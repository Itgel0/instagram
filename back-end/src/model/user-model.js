const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  userName: String,
  profileImage: String,
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
