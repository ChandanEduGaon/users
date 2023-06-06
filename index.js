const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(cors());

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.status(200).send('OK');
});

app.post("/register", (req, res) => {
  res.status(200).send(req.body)
})
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});