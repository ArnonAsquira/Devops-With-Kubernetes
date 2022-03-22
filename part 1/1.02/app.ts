import express from "express";
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
