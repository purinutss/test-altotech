const { User } = require("../models");

exports.createUser = async (req, res, next) => {
  try {
    const createUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    });
    res.status(201).json({ createUser });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(201).json({ users });
  } catch (err) {
    next(err);
  }
};
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      },
      { where: { id: req.params.id } }
    );
    res.status(201).json({ updateUser });
  } catch (err) {
    next(err);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(201).json();
  } catch (err) {
    next(err);
  }
};
