import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

app.listen(3000, () => console.log('Node.js is Running!'));