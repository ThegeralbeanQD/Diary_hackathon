const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const diariesRouter = require('./routers/diaries');
const userRouter = require('./routers/user');


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get("/", (req, res) => {
    res.json({
        name: "Diary",
        description: "Log you daily thoughts :)"
    })
})


app.use("/diaries", diariesRouter);
app.use("/users", userRouter);

module.exports = app;
