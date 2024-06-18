const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.routes.js");
const app = express()

app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send('Hello express from the server!')
});


mongoose.connect('mongodb+srv://ngetich86:MI2rjXEuDfTI70jS@nodeapi.xvivcwk.mongodb.net/?retryWrites=true&w=majority&appName=nodeApi',
    // {   useNewUrlParser: true,   useUnifiedTopology: true}
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
