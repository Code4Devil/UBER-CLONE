const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captianRoutes = require('./routes/captian.routes');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectToDB()


app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
})



app.use('/users',userRoutes);
app.use('/captians',captianRoutes);
module.exports = app;