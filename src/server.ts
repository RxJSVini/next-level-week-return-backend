import express from "express";
import { routes } from "./routes";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config({});

const app = express();

app.use(cors({
    origin:"https://nlwreturnnode-production.up.railway.app/api/feedbacks"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

app.listen(process.env.PORT|| 3333, () => console.log('HTTP Status Running API'));