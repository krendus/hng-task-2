import express from "express"
import personRouter from "./routes/person";
import { connectDB } from "./database/mongo";
const app = express();
require("dotenv").config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", personRouter);

const PORT = process.env.PORT || 5000;

const initApp = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server starting at port ${PORT}...`);
    });
}

initApp();
