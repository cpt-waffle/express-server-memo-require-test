const pool = require('./connection');



const getDepartments = () => {
	return pool.query('SELECT * FROM departments;').then(data => {
		return data.rows;		
	})
}


module.exports = { getDepartments };