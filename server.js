import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { subscribersRouter } from "./routes/subscribers.js";

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

const app = express();
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server started"));
