const db = require('../data/config');

module.exports = {
	get,
	insert,
	remove,
	findById,
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

function findById(id) {
	return db('doctors').where('id', id).first();
}

// DELETE project
function remove(id) {
	return db('doctors').where({ id }).delete();
}
