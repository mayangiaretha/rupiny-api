import bcrypt from 'bcrypt';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import User from '../model/user';

class UserController {
  static async registerAUser(req, res) {
    const { userName, email, password } = req.body;
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
      viewedArticle: Math.floor(Math.random() * 10000),
      likes: Math.floor(Math.random() * 10000),
    });
    await User.create(newUser);
    return res.status(201).json({
      newUser,
      message: 'user successfully created',
    });
  }
  static async loginUser(req, res) {
    const { password, userName } = req.body;
    const loggedIn = await User.findOne({ userName });
    if (!loggedIn)
      return res.status(400).json({ message: 'userName already in use' });
    const checkPassword = await bcrypt.compare(password, loggedIn.password);
    if (!checkPassword)
      return res.status(400).json({ message: 'invalid password' });
    const token = jwt.sign(
      {
        userId: loggedIn.userId,
        userName,
      },
      process.env.TOKEN_SECRET
    );
    return res.headers('access-token', token).json({
      token,
      message: 'ypu have successfully logged in',
    });
  }
}
export default UserController;
