const express = require("express");
// 임포트 먼저 !== user.js 와 동일

const router = express.Router();
// 라우터 불러오기 !

/////////////////게시물 조회 (R)
router.get("/:id", (req, res) => {
    res.send("특정 tweet 조회 ");
    //(/:id) 동적 라우팅이라고 한다

    console.log(req.params);
    //터미널에서 id 확인 가능함
});
router.get("/", (req, res) => {
    res.send("전체 tweet 조회 ");
});

/////////////////게시물 생성 (C)
router.post("/", (req, res) => {
    res.send("게시물 생성하기  ");
});

/////////////////게시물 수정 (U)
router.put("/:id", (req, res) => {
    res.send("게시물 수정하기 ");
});

/////////////////게시물 삭제 (D)
router.delete("/:id", (req, res) => {
    res.send("게시물 삭제하기 ");
});

module.exports = router;
//마지막 부분에는 export 꼭 해주기 !
