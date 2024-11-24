import express from "express";

const PORT = 3000;
const SERVER = `http://localhost:${PORT} 🚀`;

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.render("home");
});

console.log("Hello");

app.listen(PORT, () => {
    console.log(`Listening on ${SERVER}`);
});
