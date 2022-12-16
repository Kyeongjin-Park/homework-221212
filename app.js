const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routes/posts");

const requestMiddleware = (req, res, next) => { // 미들웨어 실행할 때마다 로그 찍음
  console.log("Request URL:", req.originalUrl," - ", new Date());
  next() // 미들웨어 다음으로 넘김. next()없으면 다음으로 안넘어감.
};

// app.use(express.json()) // json형태의 데이터 가지고옴
app.use(requestMiddleware)
app.use("/", [postsRouter]); // 1개면 [] 없어도 되지만, 2개부터는 [] 무조건 필요

app.get("/", (req, res) => {
  res.send("Connect the Server");
});

app.listen(port, () => {
  console.log("Open the Server to", port);
});