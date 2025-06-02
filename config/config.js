const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '47L3QtqC6fiD1br.root',
    password: 'ae4CE1YJLEYID5ng',
    database: 'mydb',
    ssl: {
        rejectUnauthorized: true // For SSL, TiDB requires secure connection
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Connected to TiDB Cloud successfully!");
        connection.release();
    } catch (err) {
        console.error("Connection error: ", err.message);
    }
}

testConnection();

module.exports = pool;
