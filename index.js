import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//config cors & dotenv
app.use(cors());
dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send('Hello express from the server!')
});

//mogoose connection....
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

