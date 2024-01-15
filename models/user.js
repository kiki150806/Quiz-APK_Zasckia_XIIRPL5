module.exports = (sequelize, Sequelize) => {
  const table = sequelize.define('user', {
      username: {
          type: Sequelize.STRING,
      },
      email: {
          type: Sequelize.STRING,
      },
      password: {
          type: Sequelize.STRING,
      },
  });
  return table;
}