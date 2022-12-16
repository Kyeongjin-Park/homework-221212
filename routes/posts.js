const express = require("express");
// const Posts = require("../schemas/post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("post페이지 입니다.");
});

// 입력 데이터
const post = [
  {
    user: "Developer",
    password: 1234,
    title: "안녕하세요.",
    content: "안녕하세요 content 입니다.",
  },
];

// 목록 조회 API
router.get("/posts",(req,res) => {
  res.json({data: post});
});

// 데이터 입력


module.exports = router;