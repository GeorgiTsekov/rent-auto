const router = require('express').Router();

const carService = require('../services/carService');
const { isGuest, isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
    const cars = await carService.getAll();
    res.json(cars);
});

router.get('/:carId', async (req, res) => {
    const car = await carService.getOne(req.params.carId);
    res.json(car);
});

router.post('/create', isAuth, async (req, res) => {
    await carService.create({ ...req.body, ownerId: req.user._id });

    res.json({ ok: true })
});

module.exports = router;