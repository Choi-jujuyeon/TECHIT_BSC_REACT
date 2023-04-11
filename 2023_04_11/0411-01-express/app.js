const express = require("express");
// 임포트 부분을 대체하는 문법을 의미한다.

const app = express();

const port = 3010;
// 동작할 포트 번호가 필요하다.

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
// 이 함수는 2가지를 필요로한다.
// -> 경로, req + res

app.get("/user/:id", (req, res) => {
    res.send("유저 정보 조회");
});

app.post("/", (req, res) => {
    res.send("post!");
});

app.put("/", (req, res) => {
    res.send("put!");
});

app.delete("/", (req, res) => {
    res.send("delete!");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port} 🚀`);
});
// 첫번째 인자 == 포트 번호, 두번째 인자 실행할 코드

// get요청은 postman이나 insomia
