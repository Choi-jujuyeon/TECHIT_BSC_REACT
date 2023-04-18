const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();
//프리즈마 클라이언트를 프리즈마로 사용하겠다.

// 유저 생성
router.post("/", async (req, res) => {
    try {
        const { account } = req.body;

        //중복생성자를 막기위해서 ~>  무한 로딩 상태로 빠지게 된다 
        const existUser = await client.user.findUnique({
            where: {
                account,
            },
        });
        if (existUser) {
            return res
                .status(400)
                .json({ ok: false, error: "Already exist account!" });
        }
        console.log(existUser);
        // db통신 시작 == prisma client 통신 시작
        const user = await client.user.create({
            data: {
                account,
            },
        });
        res.json({ ok: router, user });
    } catch (error) {
        console.error(error);
    }
});


// 유저 조회
router.get("/:account", async (req, res) => {
    try {
        const { account } = req.params;

        const user = await client.user.findUnique({
            where: {
                account,
            },
        });
        if (!user) {
            return res.status(400).json({
                ok: false,
                error: "Not exist user.",
            });
        }

        res.json({
            ok: true,
            user,
        });
    } catch (error) {
        console.error(error);
    }
});
/*
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id);
        res.send("임시라도 이 문구는 넣어줘야함");
    } catch (error) {
        console.errir(error);
    }
});
*/
module.exports = router;
