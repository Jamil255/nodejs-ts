import express from "express";
import { allUserController } from "../controllers/index.js";
const app = express();
app.get("/all", allUserController);
export default app;
