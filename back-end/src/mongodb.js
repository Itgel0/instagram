const mongoose = require("mongoose");

const uri = "mongodb+srv://Itgel0:itgel0116@cluster0.hbwnvmh.mongodb.net/?retryWrites=true&w=majority"
//          End mongodb Atlas iin userName password baina

const connect = async () => {
    try {
        await mongoose.connect(uri);

        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;