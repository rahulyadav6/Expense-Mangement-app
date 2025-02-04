require("dotenv").config();

const ENV = {
    secret: process.env.JWT_SECRET,
    MONGO_URL: process.env.MONGO_URL,
}

module.exports = ENV;