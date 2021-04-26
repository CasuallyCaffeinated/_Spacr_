'use strict';
const  bcrypt  = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error(`Username may not be an email.`)
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60, 60],
      }
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    // associations can be defined here
  };


                                                                                                 //* USER MODEL METHODS START HERE *//


  User.prototype.toSafeObject = function() {
    const { id, username, email } = this;
    return { id, username, email };
  };
  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.prototype.getCurrentUserById = async function(id) {
    return await User.scope('currentUser').findByPk(id);
  };


//* USER MODEL METHOD FOR LOGGING IN *//
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        },
      },
    })
    if(user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  }


//* USER MODEL METHOD FOR SIGNING UP *//
  User.signup = async function({username, email, password}) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    })
    return await User.scope('currentUser').findByPk(user.id);
  }
  return User;
};
