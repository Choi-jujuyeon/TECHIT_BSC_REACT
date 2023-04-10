const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.get("/abc", (req, res) => {
    res.send("ABC");
});

app.post("/", (req, res) => {
    res.send("This is Post Request");
});
app.put("/", (req, res) => {
    res.send("This is put Request");
});
app.delete("/", (req, res) => {
    res.send("This is delete Request");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
