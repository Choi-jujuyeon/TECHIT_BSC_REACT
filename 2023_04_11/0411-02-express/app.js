const express = require("express");
const userRouter = require("./routes/user");
// user.js 연결해주기

const tweetRouter = require("./routes/tweet");
// tweet.js 연결해주기

const app = express();

const port = 3010;

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);
// middle 웨어 ?

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port} 🚀🚀🚀`);
});
