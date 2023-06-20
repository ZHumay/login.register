const { default: mongoose } = require("mongoose");

const db = {
    connect: async () => {
        try {
            await mongoose.connect("mongodb+srv://frontend:HFJwpjyrwXb3yShw@cluster0.x7fyasm.mongodb.net/");
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