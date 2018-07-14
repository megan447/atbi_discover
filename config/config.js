// config.js
const env = process.env.NODE_ENV || "dev";
const dev = {
    port: 5555,
    database: process.env.DB_DEV,
    secret: process.env.TOKEN_SECRET,
    environment: "development",
};


const prod = {
    port: 3002,
    database: process.env.DB_PROD,
    secret: process.env.TOKEN_SECRET,
    environment: "product",
};

const config = {
    dev,
    prod
};

module.exports = config[env];
