import Sequelize from "sequelize";
import dbConfig from "../../environment-config.json";
import SchoolModel from "./models/school.model";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = SchoolModel(sequelize, Sequelize);

// create relationship

// use it to force to create the db from scratch
// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

export default db;
