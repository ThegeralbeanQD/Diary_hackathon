const express = require('express');
const cors = require('cors');

const diariesRouter = require('./routers/diaries');
const userRouter = require('./routers/user');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "Discretion",
        description: "Send and receive private messages."
    })
})

app.use("/diaries", diariesRouter);
app.use("/users", userRouter);

module.exports = app;
