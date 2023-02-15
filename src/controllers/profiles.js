import dayjs from 'dayjs';
import Profiles from '../model/profiles';
import User from '../model/users';

class ProfilesController {
  static async getAllProfiles(req, res) {
    const allProfiles = await Profiles.find().populate({
      path: 'userId',
      model: 'user',
    });
    if (!allProfiles.length === 0) {
      return res.status(200).json({ message: 'there are no profiles' });
    }
    return res.json(allProfiles);
  }

  static async getAProfile(req, res) {
    const { _id } = req.params;
    const oneProfile = await Profiles.findOne(_id).populate({
      path: 'userId',
      model: 'user',
    });
    if (!oneProfile) {
      return res
        .status(400)
        .json({ message: 'this profile does not exist please check id' });
    }
    return res.json({ profile: oneProfile });
  }
  static async updatedAUser(req, res) {
    const { _id } = req.params;

    const { body } = req;
    console.log(req.body);

    const updatedProfile = {
      ...body,
      updatedAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
    };

    await Profiles.findOneAndUpdate({ profileId: _id }, updatedProfile);
    const profile = await User.findOne({ profileId: _id });

    return res.status(201).json({ profile, message: 'profile updated' });
  }
}

export default ProfilesController;
