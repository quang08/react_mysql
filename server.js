const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
const corsOpt = { origin: "http://localhost:3000" };

//a mechanism by which a front-end client can make requests for resources to an external back-end server
app.use(cors(corsOpt));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
