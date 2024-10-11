// server.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    Methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
  })
);

// JSON 변환 처리를 안해줘도 된다
app.use(express.json());
app.use(express.text());

let data = { message: "여러분 화이팅!" };

app.options("/", (req, res) => {
  return res.send("요청을 보내세요.");
});

app.get("/", (req, res) => {
  return res.send(data);
});

app.post("/", (req, res) => {
  data.message = req.body;
  return res.send(`받은 POST 데이터: ${req.body}`);
});

app.put("/", (req, res) => {
  data.message = req.body;
  return res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete("/", (req, res) => {
  data = {};
  res.end("데이터가 삭제되었습니다.");
});

app.listen(3000, () => {
  console.log("서버가 http://localhost:3000/ 에서 실행 중입니다.");
});
