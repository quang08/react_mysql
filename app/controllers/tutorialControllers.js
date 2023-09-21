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

const findAllTuts = async (req, res) => {
  const { title } = req.query;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  await Tutorial.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((e) => {
      res.status(500).send({
        message:
          e.message || "Some error occurred while retrieving the Tutorial.",
      });
    });
};

const findOneTut = async (req, res) => {
  const { id } = req.params;

  await Tutorial.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res
          .status(400)
          .send({ message: `Cannot find tutorial with id: ${id}` });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

const updateTut = async (req, res) => {
  const { id } = req.params;
  const { title, description, published } = req.body;

  await Tutorial.update({ title, description, published }, { where: { id } })
    .then((result) => {
      if (result[0] === 1) {
        res.send({ message: "Tutorial was updated successfully." });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: e.message || "Error updating Tutorial with id=" + id,
      });
    });
};

const deleteOneTut = async (req, res) => {
  const { id } = req.params;

  await Tutorial.destroy({ where: { id } })
    .then((result) => {
      if (result === 1) {
        res.send({ message: "Tutorial was deleted successfully" });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}.`,
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: e.message || "Could not delete Tutorial with id=" + id,
      });
    });
};

const deleteAllTuts = async (req, res) => {
  await Tutorial.destroy({ where: {}, truncate: false })
    .then((results) => {
      res.send({ message: `${results} tutorials were deleted succesully` });
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message || "Some error occurred while removing all tutorials.",
      });
    });
};

module.exports = {
  createTut,
  findAllTuts,
  findOneTut,
  updateTut,
  deleteOneTut,
  deleteAllTuts,
};
