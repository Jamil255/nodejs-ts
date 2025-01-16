import express from "express";
import { signupControllers } from "../controllers/index.js";
const app = express();

app.post("/all",signupControllers)

export default app