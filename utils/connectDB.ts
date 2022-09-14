import mongoose from "mongoose";

const connectDB = async (uri:string) => {
  try {
    await mongoose.connect(uri);
    console.log(`mongodb connected to ${uri}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
