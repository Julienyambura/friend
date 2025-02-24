import mongoose, { type Document, Schema } from "mongoose";

export interface IBlogPost extends Document {
  title: string;
  content: string;
  author: string;
  date: Date;
  image?: string;
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String },
});

export default mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);
