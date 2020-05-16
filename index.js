const express = require('express');
const helmet = require('helmet');
const doctorsRouter = require('./doctors/doctors-router');

const server = express();
const port = process.env.PORT || 8100;

server.use(helmet());
server.use(express.json());

server.use('/doctors', doctorsRouter);

server.get('/', (req, res) => {
	res.json({
		message: 'Welcome to our API',
	});
});

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});

module.exports = server;
