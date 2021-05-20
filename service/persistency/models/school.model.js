export default (sequelize, Sequelize) => {
  const School = sequelize.define("school", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    class: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.NUMMER,
    },
  });

  return School;
};
