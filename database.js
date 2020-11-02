const mysql = require("mysql2");
const dbConnection = mysql
  .createPool({
    host: "nodejs2.cukqmpwudxzd.us-east-1.rds.amazonaws.com", // MYSQL HOST NAME
    user: "admin", // MYSQL USERNAME
    password: "adminafraz", // MYSQL PASSWORD
    database: "nodejs2", // MYSQL DB NAME
  })
  .promise();
module.exports = dbConnection;
