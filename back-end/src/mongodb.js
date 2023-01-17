const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_ATLAS_URI;
//          End mongodb Atlas iin userName password baina

const connect = async () => {
  try {
    await mongoose.connect(uri);

    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
