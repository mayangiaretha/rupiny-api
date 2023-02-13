import dayjs from 'dayjs';
import Profiles from '../model/profiles';
import User from '../model/users';

class ProfilesController {
  static async updatedAUser(req, res) {
    const { id } = req.params;

    const { body } = req;
    console.log(req.body);

    const updatedProfile = {
      ...body,
      updatedAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
    };

    await Profiles.findOneAndUpdate({ profileId: id }, updatedProfile);
    const profile = await User.findOne({ profileId: id });

    return res.status(201).json({ profile, message: 'profile updated' });
  }
}

export default ProfilesController;
