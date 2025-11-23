import dotenv from "dotenv";
dotenv.config({ quiet: true }); //quiet dosent display the message in the console env io injecting

const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
}

export default ENV;