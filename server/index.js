import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import express from "express";
import bodyParser from "body-parser";
import listRoutes from "./routes/list.js";

dotenv.config()
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use("/list", listRoutes)

const PORT = process.env.PORT || 5001;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
    ).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err) => console.log(err))