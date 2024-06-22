import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.routes.js"
import userRoutes from "./routes/User.Routes.js"

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//config cors & dotenv
app.use(cors());
dotenv.config();
productRoutes(app);
userRoutes(app);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

// app.use("/api/products", getProducts);
app.get('/', (req, res) => {
    res.send('Hello express from the server!')
});
// app.get('/products', (req, res) => {
//     res.send('Hello express from the products!')
// });
app.use("/products", productRoutes);
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

