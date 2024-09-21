import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("Something went wrong in connecting to MongoDB"+err);
      process.exit(1);
    });


  } catch (error) {
    console.log("Something went wrong in connecting to MongoDB");
    console.log(error);
  }
}
