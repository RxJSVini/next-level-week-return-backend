import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

app.listen(3333, () => console.log('Node.js is Running!'));