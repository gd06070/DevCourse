import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes/userRoutes.js"

const app = express();
dotenv.config();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() => {
    console.log('연결 ok');
    app.listen(PORT, () => {
        console.log(`연결 okok http://localhost:${PORT}/users`);
    }) //포트 연결
})
.catch((e) => console.log(e))

app.use("/user", route);