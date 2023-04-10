module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phoneNumber: {
        type: Datatypes.STRING,
        allowNull: true,
        validate: {
          isNumeric: true
        }
      }
    },
    {
      underscored: true
    }
  );

  return User;
};
