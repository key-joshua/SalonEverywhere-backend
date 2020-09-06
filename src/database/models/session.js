const tokenDefinition = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    userId: { type: DataTypes.INTEGER },
    lastname: { type: DataTypes.STRING },
    session: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  return Session;
};

export default tokenDefinition;
