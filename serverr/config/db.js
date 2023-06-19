const { default: mongoose } = require("mongoose");

const db = {
    connect: async () => {
        try {
            await mongoose.connect("mongodb+srv://humay:BqhBkNhh2J3C99u9@cluster0.xpk0pdu.mongodb.net/");
            console.log('CONNECTED!');

        } catch (err) {
            console.log('Mongodb connection error!!');
            console.log(err);
        }
    }
}

module.exports = {
    db
}