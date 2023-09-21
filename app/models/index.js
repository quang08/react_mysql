const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    aquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorialModel")(sequelize, Sequelize);
// db.comments = require("./commentModel")(sequelize, Sequelize);
// db.tags = require("./tagModel")(sequelize, Sequelize);

//one-many relationship
// db.tutorials.hasMany(db.comments, { as: "comments" });
// db.comments.belongsTo(db.tutorials, {
//   foreignKey: "tutorialId",
//   as: "tutorial",
// });

//many-many relationship: One tut has many tags and one tag points to many tuts
// db.tags.belongsToMany(db.tutorials, {
//   through: "tutorial_tag",
//   as: "tutorials",
//   foreignKey: "tag_id",
// });

// db.tutorials.belongsToMany(db.tags, {
//   through: "tutorial_tag",
//   as: "tags",
//   foreignKey: "tutorial_id",
// });

module.exports = db;
