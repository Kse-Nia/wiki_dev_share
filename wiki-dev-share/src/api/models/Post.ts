import mongoose, { Document, Schema } from "mongoose";

interface Post extends Document {
  userId: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  avatar: string;
  title: string;
  body: string;
  date: Date;
}

const PostSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  avatar: { type: String, require: true },
  title: { type: String, require: true },
  body: { type: String, require: true },
  date: { type: Date, require: true },
});

export default mongoose.model<Post>("Post", PostSchema);
