import express from "express";

const PORT = 3000;
const SERVER = `http://localhost:${PORT} 🚀`;

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); // 사용자가 볼 수 있는 폴더를 명시적으로 설정

app.get("/", (req, res) => {
    res.render("home");
});

// 다른 경로로 접근 시 home을 보여줌
app.use("/*", (erq, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`Listening on ${SERVER}`);
});
