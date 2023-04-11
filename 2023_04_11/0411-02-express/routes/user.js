const express = require("express");
// 임포트 먼저 !

const router = express.Router();
// 라우터 불러오기 !

router.get("/:id", (req, res) => {
    res.send("유저 조회");
});
//(:id)다이나믹 라우팅을 통해 특정 유저를 조회할 수 있다

/////////////////유저 생성 (C)
router.post("/", (req, res) => {
    res.send("신규 유저 생성");
});

/////////////////유저 정보수정 (U)
router.put("/:id", (req, res) => {
    res.send("유저 정보 수정");
});

/////////////////회원정보 삭제 (D)
router.delete("/:id", (req, res) => {
    res.send("회원정보 삭제");
});

module.exports = router;
//마지막 부분에는 export 꼭 해주기ㅐ !
