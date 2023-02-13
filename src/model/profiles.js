import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ProfilesSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  Bio: {
    type: String,
  },

  avatarUrl: {
    type: String,
  },
});

const Profiles = mongoose.model('Profile', ProfilesSchema);

export default Profiles;
