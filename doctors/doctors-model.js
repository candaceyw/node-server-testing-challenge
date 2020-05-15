const db = require('../data/config');

module.exports = {
	get,
	insert,
	remove,
};

function get() {
	return db('doctors');
}

// adding doctors.
function insert(doctor) {
	return db('doctors')
		.insert(doctor, 'id')
		.then(([id]) => get(id));
}

// DELETE project
function remove(id) {
	return db('doctors').where({ id }).delete();
}
