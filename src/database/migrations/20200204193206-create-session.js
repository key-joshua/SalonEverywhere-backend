const up = (queryInterface, Sequelize) => queryInterface.createTable('Sessions', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userId: {
    type: Sequelize.INTEGER
  },
  lastname: {
    type: Sequelize.STRING
  },
  session: {
    type: Sequelize.STRING(1000)
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

const down = (queryInterface) => queryInterface.dropTable('Sessions');

export {
  up,
  down
};
