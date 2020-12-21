const Pool = require('pg').Pool

const pool = new Pool({
    host: 'pucmgmybd.postgres.database.azure.com',
    user: 'adm@pucmgmybd',
    password: '@MyBDTest',
    database: 'sportsdb',
    port: 5432,
});

module.exports = pool;