const router = require('express').Router();

const carService = require('../services/carService');
const { auth } = require('../middlewares/authMiddleware');

router.get('/all', async (req, res, next) => {
    try {
        const cars = await carService.getAll();
        res.json(cars);
    } catch (error) {
        next(error);
    }
});

router.get('/:carId', async (req, res, next) => {
    try {
        const car = await carService.getOne(req.params.carId);
        res.status(200).json(car);
    } catch (error) {
        next(error);
    }
});

router.patch('/:carId/edit', async (req, res, next) => {
    try {
        const car = await carService.update(req.params.carId, req.body);

        res.status(200).json({ message: `Car ${car.make} is successfully updated` });
    } catch (error) {
        next(error);
    }
});

router.patch('/:carId/addTenant', auth, async (req, res, next) => {
    try {
        const { dateFrom, dateTo } = req.body;
        const car = await carService.addTenant(req.params.carId, req.user?._id, { dateFrom, dateTo });
        res.status(200).json({ message: `${req.user?.name} successfully rented this ${car.make} from ${dateFrom} to ${dateTo}` });
    } catch (error) {
        next(error);
    }
});

router.delete('/:carId/delete', async (req, res, next) => {
    try {
        await carService.delete(req.params.carId);
        res.status(200).json({ message: "Car is successfully deleted" });
    } catch (error) {
        next(error);
    }
});

router.post('/create', auth, async (req, res, next) => {
    try {
        const car = await carService.create(req.body);

        res.status(201).json({ message: `Car ${car.make} is successfully created` });
    } catch (error) {
        next(error);
    }
});

module.exports = router;