console.log(`${__filename}:1`);

const promiseMysql = require("promise-mysql");

let pool;
const poolPromise = async () => {
    if (pool)
        return pool;

    console.log('createPool');
    // noinspection JSUnusedGlobalSymbols
    pool = promiseMysql.createPool({
        host : process.env.DB_HOST,
        database : process.env.DB_DATABASE,
        user : process.env.DB_ID,
        password : process.env.DB_PW,
        typeCast: function castField( field, useDefaultTypeCasting ) {
            // noinspection JSUnresolvedVariable
            if ( ( field.type === "BIT" ) && ( /*MySQL*/ field.length === 1 || /*MariaDB*/ field.columnLength === 1 ) ) {
                const bytes = field.buffer();
                return( bytes[ 0 ] === 1 );
            }
            return( useDefaultTypeCasting() );
        }
    });

    return pool;
};

// noinspection JSUnusedGlobalSymbols
module.exports = {
    query: async function () {
        return (await poolPromise()).query(...arguments);
    },
};
