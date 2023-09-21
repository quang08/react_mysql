const express = require("express");
const cors = require("cors");
const db = require("./app/models/index");

const app = express();
const PORT = 3000;
const corsOpt = { origin: "http://localhost:3001" };

//a mechanism by which a front-end client can make requests for resources to an external back-end server
app.use(cors(corsOpt));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/tutorials", require("./app/routes/tutorialRoutes"));

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
