import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: [true, 'field email required'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Users', UserSchema);
