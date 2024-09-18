import "dotenv/config";
import { app } from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URI.replace("<db_password>", process.env.DB_PASSWORD))
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("DB Connection Error", err.message));
