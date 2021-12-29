const mysql = require('mysql2');


var pool = {
    host:'localhost',
    port:'3306',
    user:'score_user',
    password:'3216',
    database : 'co_game',
    connectionLimit : 20,
    queueLimit: 0,
};

module.exports=pool;