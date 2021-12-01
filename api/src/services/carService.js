const Car = require("../models/Car");

exports.getAll = () => Car.find();

exports.getOne = (id) => Car.findById(id);

exports.update = (id, carData) => Car.findByIdAndUpdate(id, carData);

exports.delete = (id) => Car.findByIdAndDelete(id);

exports.create = (carData) => Car.create(carData);

exports.addTenant = async (carId, userId, data) => {
    const car = await this.getOne(carId);
    const from = data.dateFrom;
    const to = data.dateTo;

    if (car.tenants) {
        car.tenants.forEach(savedDate => {
            const dateFrom = new Date(savedDate.dateFrom).toJSON().slice(0, 10);
            const dateTo = new Date(savedDate.dateTo).toJSON().slice(0, 10);
            const dateNow = new Date(Date.now()).toJSON().slice(0, 10);

            if (from < dateNow) {
                throw { message: 'from shoult be bigger then today' }
            }
            if (from > to) {
                throw { message: 'from shoult be smaller then to' }
            }
            if ((from >= dateFrom && from <= dateTo)
                || (to >= dateFrom && to <= dateTo)) {
                throw { message: `This dates: from ${dateFrom} to ${dateTo} are saved from another tenant` }
            }
        });
    }

    const newTenant = {
        tenantId: userId,
        dateFrom: from,
        dateTo: to
    }

    car.tenants.push(newTenant);

    return car.save();
}