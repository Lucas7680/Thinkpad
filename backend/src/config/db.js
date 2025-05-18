import mongoose from "mongoose";4

 const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully");
  } catch (err) {
    console.log("Error connecting to mongodb", err);
    process.exit(1); //1 means  exit with failure
  }
};

export default connectDb