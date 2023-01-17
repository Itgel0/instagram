const UserModel = require("../model/user-model");

exports.getUsers = async (req, res) => {};

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    await UserModel.create({ email, password });

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // const user = await UserModel.findOne({ email });
  // if (user.password === password) true {
  //   const success = (this.login)
   }; 

exports.getUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};

exports.updateUser = async (req, res) => {};
