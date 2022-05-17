const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'w05d03',
  password: 'labber',
  port: 5432,
})

console.log("connection required!");

pool.connect(() => {
  console.log("connected");
})


module.exports = pool;