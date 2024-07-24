const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { createServer } = require("http");
const session = require('express-session');
const MongoStore = require("connect-mongo");
const authRoute=require('./routes/auth');
const productRoute=require('./routes/product');
const categoryRoute=require('./routes/category');
const cartRoute=require('./routes/cart');
const orderRoute=require('./routes/order');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL, 
    (err) => {
        if (err) console.log(err);
        else console.log("Database is connect");
});


app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.enable("trust proxy");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(session({
    secret: 'somethingsecret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2*24*60*60*1000,secure: true,sameSite: 'None',},
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL })
  }));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(".....................");
});

app.use('/api/v1/auth',authRoute );
app.use('/api/v1/product',productRoute);
app.use('/api/v1/category',categoryRoute );
app.use('/api/v1/cart',cartRoute);
app.use('/api/v1/order', orderRoute);
