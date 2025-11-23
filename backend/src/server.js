import express from "express";
import path from "path";
import ENV from "./lib/env.js";
import { connectToDB } from "./lib/db.js";

const app = express();

const PORT = ENV.PORT || 5000;

const __dirname = path.resolve();


app.get("/health", (req, res) => {
    return res.status(200).json({ message: "Hey api is running and working fine" });
})

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

const startServer = async () => {
    try {
        await connectToDB();
        app.listen(PORT, () => { console.log(`Server started on PORT: ${PORT}`) });
    } catch (error) {
        console.error(`Error starting the server, ${error}`);
    }
}

startServer(); //calling this function which will connect to db and start server