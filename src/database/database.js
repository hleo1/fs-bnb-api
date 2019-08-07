"use strict";

const mysql = require("mysql");

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "butterfly55"
};

const config1 = {
    host: "eu-cdbr-west-02.cleardb.net",
    port: 3306,
    user: "b954af0c3d0e81",
    password: "fb409759",
    database: "heroku_375ce2b690d04ff"
};

var connection = mysql.createConnection(config);
connection.connect( (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log(`Database Connected: ${config.host} : ${config.port}`);
    }
});

module.exports = connection;
