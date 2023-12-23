const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err?.message ?? "DB connection failed");
    });
