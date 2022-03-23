import express from "express";
import path from "path";
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./front/index.html"));
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
