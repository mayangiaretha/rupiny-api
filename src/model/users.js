import mongoose from 'mongoose';

let userElements = {
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
    required: false,
  },
};
const UserSchema = new mongoose.Schema({
  ...userElements,
});
let User = mongoose.model('user', UserSchema);
export default User;
