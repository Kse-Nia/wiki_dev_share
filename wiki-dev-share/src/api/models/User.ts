import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
  role: "user" | "admin";
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  confirmPassword: { type: String, require: true },
  avatar: { type: String, require: true },
  role: { type: Boolean, require: false },
});

export default mongoose.model<User>("User", UserSchema);
