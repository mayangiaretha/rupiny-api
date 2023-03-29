import bcrypt from 'bcrypt';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import User from '../model/users';
import Profiles from '../model/profiles';

class UserController {
  static async registerAUser(req, res) {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ message: 'userName already in use' });
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: 'user already exist' });
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userId: uuidv4(),
      userName,
      password: encryptedPassword,
      email,
      createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
    });

    const createdUser = await User.create(newUser);

    const { userId, _id } = createdUser;

    const newProfile = new Profiles({
      profileId: uuidv4(),
      createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
      userId: _id,
    });
    await Profiles.create(newProfile);

    const token = jwt.sign(
      {
        userId,
        userName,
        _id,
      },
      process.env.TOKEN_SECRET
    );
    return res.status(201).json({
      createdUser,
      token,
      message: 'user successfully created',
    });
  }
  static async loginUser(req, res) {
    const { password, userName } = req.body;
    const loggedIn = await User.findOne({ userName });
    if (!loggedIn)
      return res
        .status(400)
        .json({ message: 'user does not exist. Check your username' });
    const checkPassword = await bcrypt.compare(password, loggedIn.password);
    if (!checkPassword)
      return res.status(400).json({ message: 'invalid password' });
    const token = jwt.sign(
      {
        userId: loggedIn.userId,
        userName,
        _id: loggedIn._id,
      },
      process.env.TOKEN_SECRET
    );

    return res.header('access-token', token).status(200).json({
      token,
      message: 'you have successfully logged in',
    });
  }
}
export default UserController;
