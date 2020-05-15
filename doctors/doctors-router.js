const router = require('express').Router();

const Doctors = require('./doctors-model');

router.get('/', async (req, res, next) => {
	try {
		res.json(await Doctors.get());
	} catch (err) {
		next(err);
	}
});

// POST adding doctors.
router.post('/', async (req, res, next) => {
	try {
		const data = await Doctors.insert(req.body);
		res.status(201).json(data);
	} catch (error) {
		next(error);
	}
});

// DELETE doctors
router.delete('/:id', async (req, res, next) => {
	try {
		await Doctors.remove(req.params.id);
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});

module.exports = router;
