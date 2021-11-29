const router = require('express').Router();

const carService = require('../services/carService');
const { auth } = require('../middlewares/authMiddleware');

router.get('/all', async (req, res) => {
    const cars = await carService.getAll();
    res.json(cars);
});

router.get('/:carId', async (req, res) => {
    const car = await carService.getOne(req.params.carId);
    res.status(200).json(car);
});

router.patch('/:carId', async (req, res) => {
    const car = await carService.update(req.params.carId, req.body);

    res.status(200).json({ message: `Car ${car.make} is successfully updated` });
});

router.delete('/:carId', async (req, res) => {
    await carService.delete(req.params.carId);
    res.status(200).json({ message: "Car is successfully deleted" });
});

router.post('/create', auth, async (req, res) => {
    const car = await carService.create(req.body);

    res.status(201).json({ message: `Car ${car.make} is successfully created` });
});

module.exports = router;