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

router.patch('/:carId/edit', auth, async (req, res, next) => {
    try {
        const car = await carService.getOne(req.params.carId);

        if (car.creator.toJSON() !== req.user._id.toJSON()) {
            throw { message: 'You are not authorized to edit this car!' }
        }

        await carService.update(req.params.carId, req.body);
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

router.patch('/:carId/like', auth, async (req, res, next) => {
    try {
        const car = await carService.likes(req.params.carId, req.user?._id);
        res.status(200).json(car.likes);
    } catch (error) {
        next(error);
    }
});

router.delete('/:carId/delete', auth, async (req, res, next) => {
    try {
        const car = await carService.getOne(req.params.carId);
        if (car === null) {
            throw { message: 'This car is not exist in data base!' }
        }
        if (car.creator.toJSON() !== req.user._id.toJSON()) {
            throw { message: 'You are not authorized to delete this car!' }
        }

        await carService.delete(req.params.carId);
        res.status(200).json({ message: "Car is successfully deleted" });
    } catch (error) {
        next(error);
    }
});

router.post('/create', auth, async (req, res, next) => {
    const creator = req.user._id;
    const likes = [];

    const carData = {
        ...req.body,
        creator,
        likes
    }

    try {
        const car = await carService.create(carData);

        res.status(201).json({ message: `Car ${car.make} is successfully created` });
    } catch (error) {
        next(error);
    }
});

module.exports = router;