const mysql = require('mysql2');


var pool = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'3216',
    database : 'co_game_score',
    connectionLimit : 20,
    queueLimit: 0,
};

module.exports=pool;