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

router.get('/:id', async (req, res, next) => {
	try {
		const doctor = await Doctors.findById(req.params.id);
		if (!doctor) {
			return res.status(404).json({
				message: 'doctor was not found',
			});
		}
		res.json(doctor);
	} catch (err) {
		next(err);
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
