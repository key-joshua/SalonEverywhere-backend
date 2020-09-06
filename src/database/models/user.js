const userDefinition = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    petname: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    pettype: { type: DataTypes.STRING },
    career: { type: DataTypes.STRING },
    council: { type: DataTypes.STRING },
    petimage: { type: DataTypes.STRING },
    petbreed: { type: DataTypes.STRING },
    addressname: { type: DataTypes.STRING },
    coverpicture: { type: DataTypes.STRING },
    profilepicture: { type: DataTypes.STRING },
    rememberme: { type: DataTypes.BOOLEAN },
    isVerified: { type: DataTypes.BOOLEAN },
    password: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {});

  return User;
};

export default userDefinition;
