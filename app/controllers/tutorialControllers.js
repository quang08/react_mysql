const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

const createTut = async (req, res) => {
  //validate
  const { title, description, published } = req.body;
  if (!title) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  //create
  await Tutorial.create({
    title,
    description,
    published: published ? published : false,
  })
    .then((data) => res.send(data))
    .catch((e) => {
      res.status(500).send({
        message:
          e.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

const findAllTuts = async (req, res) => {};

const findOneTut = async (req, res) => {};

const updateTut = async (req, res) => {};

const deleteTut = async (req, res) => {};

module.exports = {
  createTut,
  findAllTuts,
  findOneTut,
  updateTut,
  deleteTut,
};
