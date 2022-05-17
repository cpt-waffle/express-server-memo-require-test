const pool = require('./connection');



const getEmployees = () => {
	return pool.query('SELECT * FROM employees JOIN departments ON employees.department_id = departments.id').then(data => {
		return data.rows;		
	})
}


module.exports = { getEmployees };