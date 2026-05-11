import mongoose from "mongoose";
import 'dotenv/config';

 const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (err) {
    console.log("Error connecting to mongodb", err);
    process.exit(1); //1 means  exit with failure
  }
};

export default connectDb