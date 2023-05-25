const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  const a = 1;
  const b = 1;
  const c = a + b;
  res.send("Hello W123123orld!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
