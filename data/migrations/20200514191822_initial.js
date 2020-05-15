exports.up = async function (knex) {
	await knex.schema.createTable('doctors', (table) => {
		table.increments();
		table.text('name').notNullable();
		table.text('number').notNullable();
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('doctors');
};
