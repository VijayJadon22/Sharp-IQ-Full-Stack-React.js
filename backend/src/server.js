import express from "express";
import ENV from "./lib/env.js";

const app = express();

const PORT = ENV.PORT || 5000;


app.get("/health", (req, res) => {
    return res.status(200).json({ message: "Hey api is running and working fine" });
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})