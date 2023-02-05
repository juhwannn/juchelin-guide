console.log(`${__filename}:1`);

const { selectOne, query } = require("./mysqlPool");

module.exports = {
    selectUserAll: () => query(`SELECT * FROM User`, []),
};
