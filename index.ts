import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./utils/connectDB";
import authRoute from "./routes/auth.router";

dotenv.config();
const app: Express = express();

const port = process.env.PORT;
const uri = process.env.URI;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`server is runnig on http://localhost:${port}`);
  connectDB(uri as string);
});
