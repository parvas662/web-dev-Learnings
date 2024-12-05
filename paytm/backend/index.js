const express = require("express");
const app = express()
const mainRouter = require('./routes/index');
const cors = require('cors');
app.use('/api/v1',mainRouter);
app.use(cors());   // 

app.use(express.json());   //body-parse to read incoming json data.


app.listen(3000);