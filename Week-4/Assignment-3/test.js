const mysql = require('mysql2');

const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'88888888',
    database:'user'
}).promise()

const result = await pool.query('SELECT * FROM user')
console.log(result)