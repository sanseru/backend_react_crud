import express from "express";
import cors from "cors";
import userRoute from "./routers/userRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);


app.listen(5000, () => console.log("Server Running..."));
