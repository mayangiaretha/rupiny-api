import dayjs from 'dayjs';
import User from '../model/users';

class ProfilesController {
  static async updatedAUser(req, res) {
    const { id } = req.params;

    const { body } = req;

    const updatedProfile = {
      ...body,
      updatedAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
    };

    await User.findOneAndUpdate({ userId: id }, updatedProfile);

    const profile = await User.findOne({ userId: id });


    return res.status(201).json({ profile, message: 'profile updated' });
  }
}

export default ProfilesController;
