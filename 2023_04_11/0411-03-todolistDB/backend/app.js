const express = require("express");
//express.js import 하기
const app = express();
// app에 express() 등록

const todoRouter = require("./routes/todo");

const port = 3010;

app.use(express.json());
//express 가 json 형식을 읽어오지 못함으로 다음 코드를 사용해준다.
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
    res.send("Hello,Express!!~!~!~");
});

app.listen(port, () => {
    console.log(`💚 Server listening on port ${port}💚 `);
});
