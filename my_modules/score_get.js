const db = require('../db/sql');

const get = async() => {
    let sql = "SELECT nickname, score, time FROM score order by score limit 10";
    return await db.executePreparedStatement(sql, []);
}


module.exports = get;