const mongoose = require("mongoose");

const connect = async () => {
    try {
        // Set the strictQuery option to suppress the warning
        mongoose.set('strictQuery', false);

        // MongoDB connection
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connect;
