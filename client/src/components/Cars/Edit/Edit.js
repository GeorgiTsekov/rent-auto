import { useNavigate, useParams } from "react-router-dom";

import useCarState from "../../../hooks/useCarState";
import *as carService from '../../../services/carService';
import InputComponent from "../../Common/InputFormComponent/InputFormComponent";
import { carTypes, fuels, transmissions } from '../carConstants';
import CarDataCheckboxesUpdate from "../CarData";
import CarValidations from "../CarValidations";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import CheckboxFormComponent from "../../Common/CheckboxFormComponent/CheckboxFormComponent";

const Edit = () => {
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const { carId } = useParams();
    const [car, setCar] = useCarState(carId);
    const {
        imageChangeHandler,
        descriptionChangeHandler,
        makeChangeHandler,
        yearChangeHandler,
        doorsChangeHandler,
        modelChangeHandler,
        priceChangeHandler,
        seatsChangeHandler,
        luggageChangeHandler,
        mileageChangeHandler,
        errors
    } = CarValidations();
    const onCarEdit = (e) => {
        e.preventDefault();
        let carData = Object.fromEntries(new FormData(e.currentTarget));

        let updatedCarData = CarDataCheckboxesUpdate(carData);
        carService.edit(updatedCarData, carId)
            .then((result) => {
                addNotification(result.message, types.success)
                navigate(`/mobile/car/${carId}`);
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
    }

    const typeChangeHandler = (e) => {
        setCar(state => ({ ...state, type: e.target.value }));
    }

    const fuelChangeHandler = (e) => {
        setCar(state => ({ ...state, fuel: e.target.value }));
    }

    const transmissionChangeHandler = (e) => {
        setCar(state => ({ ...state, transmission: e.target.value }));
    }

    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onCarEdit} method="PATCH">
                        <h2>Edit your car</h2>
                        <InputComponent
                            form="form-group"
                            title="Image"
                            type="text"
                            name="image"
                            defaultValue={car.image}
                            onBlur={imageChangeHandler}
                            errors={errors.image}
                        />
                        <InputComponent
                            form="form-group"
                            title="Description"
                            type="text"
                            name="description"
                            defaultValue={car.description}
                            onBlur={descriptionChangeHandler}
                            errors={errors.description}
                        />
                        <div className="d-flex">
                            <InputComponent
                                form="form-group mr-2"
                                title="Make"
                                type="text"
                                name="make"
                                defaultValue={car.make}
                                onBlur={makeChangeHandler}
                                errors={errors.make}
                            />
                            <InputComponent
                                form="form-group mr-2"
                                title="Model"
                                type="text"
                                name="model"
                                defaultValue={car.model}
                                onBlur={modelChangeHandler}
                                errors={errors.model}
                            />
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="type" className="label">Type</label>
                                <select name="type" id="type" className="form-control" value={car.type} onChange={typeChangeHandler}>
                                    {carTypes.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="fuel" className="label">Fuel</label>
                                <select name="fuel" id="fuel" className="form-control" value={car.fuel} onChange={fuelChangeHandler}>
                                    {fuels.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="transmission" className="label">Transmission</label>
                                <select name="transmission" id="transmission" value={car.transmission} onChange={transmissionChangeHandler} className="form-control">
                                    {transmissions.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="d-flex">
                            <InputComponent
                                form="form-group mr-2"
                                title="Price"
                                type="number"
                                name="price"
                                defaultValue={car.price}
                                onBlur={priceChangeHandler}
                                errors={errors.price}
                            />
                            <InputComponent
                                form="form-group ml-2"
                                title="Year"
                                type="number"
                                name="year"
                                defaultValue={car.year}
                                onBlur={yearChangeHandler}
                                errors={errors.year}
                            />
                            <InputComponent
                                form="form-group ml-2"
                                title="Km"
                                type="number"
                                name="mileage"
                                defaultValue={car.mileage}
                                onBlur={mileageChangeHandler}
                                errors={errors.mileage}
                            />
                        </div>
                        <div className="d-flex">
                            <InputComponent
                                form="form-group mr-2"
                                title="Seats"
                                type="number"
                                name="seats"
                                defaultValue={car.seats}
                                onBlur={seatsChangeHandler}
                                errors={errors.seats}
                            />
                            <InputComponent
                                form="form-group ml-2"
                                title="Doors"
                                type="number"
                                name="doors"
                                defaultValue={car.doors}
                                onBlur={doorsChangeHandler}
                                errors={errors.doors}
                            />
                            <InputComponent
                                form="form-group ml-2"
                                title="Luggage"
                                type="number"
                                name="luggage"
                                defaultValue={car.luggage}
                                onBlur={luggageChangeHandler}
                                errors={errors.luggage}
                            />
                        </div>
                        <div className="d-flex">
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Central Locking"
                                name="remoteCentralLocking"
                                defaultChecked={car.remoteCentralLocking}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Audio Input"
                                name="audioInput"
                                defaultChecked={car.audioInput}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="ChildSeat"
                                name="childSeat"
                                defaultChecked={car.childSeat}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Music"
                                name="music"
                                defaultChecked={car.music}
                            />
                        </div>
                        <div className="d-flex">
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Board Computer"
                                name="onboardComputer"
                                defaultChecked={car.onboardComputer}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="AirConditioner"
                                name="airConditioner"
                                defaultChecked={car.airConditioner}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Bluetooth"
                                name="bluetooth"
                                defaultChecked={car.bluetooth}
                            />
                            <CheckboxFormComponent
                                form="form-group ml-2"
                                title="Gps"
                                name="gps"
                                defaultChecked={car.gps}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Edit A Car Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Edit;