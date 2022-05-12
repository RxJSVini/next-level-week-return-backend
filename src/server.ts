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

app.listen(process.env.PORT || 3333, () => console.log('HTTP Status Running API'));