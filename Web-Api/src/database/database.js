const sequelize = require("sequelize");

const environment = process.env.NODE_ENV || "development";

const config = require("../config/config.js")[environment];

const sequelize = new sequelize(

    config.database.name, 
     
    config,database,user, 
    config.database.password,
    {
        host: config.database.host, 
        dialect: config.database.dialect

    }


);