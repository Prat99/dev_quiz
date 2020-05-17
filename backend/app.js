const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Site is under construction");
});

app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
