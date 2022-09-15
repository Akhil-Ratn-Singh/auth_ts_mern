import mongoose from "mongoose";
import { MongoDocument } from "../utils/interface";

const UserSchema = new mongoose.Schema<MongoDocument>(
  {
    username: {
      type: String,
      requireed: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<MongoDocument>("User", UserSchema);
