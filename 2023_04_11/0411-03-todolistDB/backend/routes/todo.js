const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

/////////todo 생성 /////////
router.post("/", (req, res) => {
    // console.log(req);

    // console.log(req.body);
    //객체로 온다 == 구조분해가 가능하다
    const { title, desc } = req.body;
    console.log(title, desc);

    // todoData.push({title: title, desc: desc})
    todoData.push({ title, desc, isDone: false });
    console.log(todoData);
    res.json(todoData);
});

/////////전체 todolist /////////
router.get("/", (req, res) => {
    console.log(todoData);

    res.json(todoData);
});

/////////특정 todolist /////////
router.get("/:id", (req, res) => {
    const { id } = req.params;

    if (parseInt(id) >= todoData.length) {
        res.json({ error: " 존재하지 않는 ID 입니다" });
    }

    res.json(todoData[parseInt(id)]);
});

/////////todolist 수정 /////////
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, desc } = req.body;

    if (parseInt(id) >= todoData.length) {
        res.status(400).json({ error: "존재하지 않는 ID입니다." });
    }
    if (!title && !desc) {
        res.status(400).json({
            error: "타이틀이나 설명 중에 하나의 값은 입력해야 합니다.",
        });
    }
    todoData[parseInt(id)] = {
        title: title ? title : todoData[parseInt(id)].title,
        desc: desc ? desc : todoData[parseInt(id)].desc,
        isDone: todoData[parseInt(id)].isDone,
    };

    console.log(todoData);

    res.json(todoData);
});

/////////todolist 완료 여부 /////////
router.put("/done/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;

    //예외 설정하기
    if (parseInt(id) >= todoData.length) {
        res.status(400).json({ error: "완료되지 않았습니다" });
    }

    todoData[parseInt(id)] = {
        title: todoData[parseInt(id)].title,
        desc: todoData[parseInt(id)].desc,
        isDone: !todoData[parseInt(id)].isDone,
    };
    console.log(todoData);

    res.json(todoData);
    // res.send("임시 투두 완료 체크");
});

/////////todolist 삭제 /////////
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    // 필터 전에 예외 상황을 만들어 걸러준다
    // 400번은 클라이언트 문제, 500번은 서버문제
    if (parseInt(id) >= todoData.length) {
        res.status(400).json({ error: "존재하지 않는 iD입니다" });
    }

    // fillter
    todoData = todoData.filter((v, i) => {
        //(!=)왼쪽과 오른쪽이 다른지 체크 중
        //id가 i와 같지 않으면 return == 같으면 삭제된다는 의미
        return parseInt(id) !== i;
    });

    console.log(todoData);
    res.json(todoData);
});

module.exports = router;
