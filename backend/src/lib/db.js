import mongoose from "mongoose";
import ENV from "./env.js";

export const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log(`Connected to DB ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to DB, ${error}`);
        process.exit(1); // 0 means sucess, 1 means failure
    }
}