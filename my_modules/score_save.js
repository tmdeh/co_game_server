const db = require('../db/sql');

const save = async(nickname, score) => {
    let sql = `INSERT INTO score(nickname, score) VALUES(?,?)`;
    await db.executePreparedStatement(sql, [nickname, score]);
}

module.exports = save;