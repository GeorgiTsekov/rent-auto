const router = require('express').Router();

const carService = require('../services/carService');

router.get('/', async (req, res) => {
    const cars = await carService.getAll();
    res.json(cars);
});

router.get('/:carId', async (req, res) => {
    const car = await carService.getOne(req.params.carId);
    res.json(car);
});

router.put('/:carId', async (req, res) => {
    const car = await carService.update(req.params.carId, req.body);
    res.json({ ok: true })
});

router.delete('/:carId', async (req, res) => {
    await carService.delete(req.params.carId);
    res.json({ ok: true })
});

router.post('/create', async (req, res) => {
    await carService.create(req.body);

    res.json({ ok: true })
});

module.exports = router;