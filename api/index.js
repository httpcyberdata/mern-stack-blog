const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Connected to Mongo DB')).catch(err => console.log(err))

app.use("/lama", (req, res) => {
    console.log("hey this is main url");
})

app.listen("4000", () => {
    console.log('Backend is running.')
})