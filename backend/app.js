import express from "express"
import { router } from "./routes/productsRoute.js";



export const app = express();

app.use(express.json());

app.use("/api/v1/products", router)