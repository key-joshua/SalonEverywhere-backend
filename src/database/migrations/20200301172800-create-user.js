const up = (queryInterface, Sequelize) => queryInterface.createTable('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  petname: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  },
  pettype: {
    type: Sequelize.STRING
  },
  career: {
    type: Sequelize.STRING
  },
  council: {
    type: Sequelize.STRING
  },
  petimage: {
    type: Sequelize.STRING
  },
  petbreed: {
    type: Sequelize.STRING
  },
  addressname: {
    type: Sequelize.STRING
  },
  coverpicture: {
    type: Sequelize.STRING
  },
  profilepicture: {
    type: Sequelize.STRING
  },
  rememberme: {
    type: Sequelize.BOOLEAN
  },
  isVerified: {
    type: Sequelize.BOOLEAN
  },
  password: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
});

const down = (queryInterface) => queryInterface.dropTable('Users');

export { up, down };
