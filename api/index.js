const express = require('express');
const app = express();

console.log("hello");

app.listen("6000", () => {
    console.log('Backend is running.')
})