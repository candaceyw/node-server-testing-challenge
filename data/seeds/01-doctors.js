exports.seed = async function (knex) {
	return knex('doctors').insert([
		{ name: 'Christopher Eccleston', number: 'Ninth Doctor' },
		{ name: 'David Tennant', number: 'Tenth Doctor' },
		{ name: 'Matt Smith', number: 'Eleventh Doctor' },
		{ name: 'Peter Capaldi', number: 'Twelfth Doctor' },
		{ name: 'Jodie Whittaker', number: 'Thirteenth Doctor' },
	]);
};
