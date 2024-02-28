import mongoose, { Document, Schema } from "mongoose";

interface Article extends Document {
  userId: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  avatar: string;
  title: string;
  body: string;
  tags: string[];
  date: Date;
}

const ArticleSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  avatar: { type: String, require: true },
  title: { type: String, require: true },
  body: { type: String, require: true },
  tags: { type: [String], require: true },
  date: { type: Date, require: true },
});

export default mongoose.model<Article>("Post", ArticleSchema);
