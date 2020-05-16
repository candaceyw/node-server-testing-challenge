const supertest = require('supertest');
const server = require('../index');
const db = require('../data/config');
const doctorsModel = require('../doctors/doctors-model');

beforeEach(async () => {
	await db.seed.run();
});

// fixes teardown warning
afterAll(async () => {
	await db.destroy();
});

describe('doctors integration tests', () => {
	it('GET /doctors', async () => {
		const res = await supertest(server).get('/doctors');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body).toHaveLength(5);
		expect(res.body[0].name).toBe('Christopher Eccleston');
		expect(res.body[1].name).toBe('David Tennant');
	});

	it('Does not get a doctor', async () => {
		const res = await supertest(server).get('/doctors/doctor');
		expect(res.statusCode).toBe(404);
	});

	it('GET /doctors/:id', async () => {
		const res = await supertest(server).get('/doctors/3');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
		expect(res.body.name).toBe('Matt Smith');
	});

	it('GET /doctors/:id (not found)', async () => {
		const res = await supertest(server).get('/hobbits/50');
		expect(res.statusCode).toBe(404);
	});

	it('DELETE /doctors/:id', async () => {
		const res = await supertest(server).delete('/doctors/1');
		expect(res.statusCode).toBe(204);
	});

	it('Does not delete a doctor', async () => {
		const res = await supertest(server).delete('/doctors/doctor/1');
		expect(res.statusCode).toBe(404);
	});
});
