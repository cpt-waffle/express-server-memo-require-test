const express = require('express');
const morgan = require('morgan');

const app = express();

const { getEmployees } = require('./dbHelpers');
const { getDepartments } = require('./otherHelpers');


const aRoutes = require('./routes/a');
const bRoutes = require('./routes/b');
const cRoutes = require('./routes/c');
const dRoutes = require('./routes/d');
const eRoutes = require('./routes/e');




app.get('/test', (req, res) => {
	getEmployees().then(data => {
		res.json(data)
	})
})


app.use('/a', aRoutes);
app.use('/b', bRoutes);
app.use('/c', cRoutes);
app.use('/d', dRoutes);
app.use('/e', eRoutes);



app.listen('8080', () => console.log('8080'))