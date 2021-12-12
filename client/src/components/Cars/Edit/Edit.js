import { useState } from "react";
import validator from 'validator';
import { useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import useCarState from "../../../hooks/useCarState";
import *as carService from '../../../services/carService';
import InputComponent from "../../Common/InputComponent/InputComponent";
import { types, fuels, transmissions } from '../carConstants';

const Edit = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { carId } = useParams();
    const [errors, setErrors] = useState(
        {
            description: false,
            image: false,
            make: false,
            model: false,
            price: false,
            year: false,
            mileage: false,
            seats: false,
            doors: false,
            luggage: false
        });
    const [car, setCar] = useCarState(carId);

    const onCarEdit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let image = formData.get('image');
        let description = formData.get('description');
        let make = formData.get('make');
        let model = formData.get('model');
        let type = formData.get('type');
        let fuel = formData.get('fuel');
        let transmission = formData.get('transmission');
        let price = formData.get('price');
        let year = formData.get('year');
        let mileage = formData.get('mileage');
        let seats = formData.get('seats');
        let doors = formData.get('doors');
        let luggage = formData.get('luggage');
        let remoteCentralLocking = formData.get('remoteCentralLocking') ? 1 : 0;
        let audioInput = formData.get('audioInput') ? 1 : 0;
        let childSeat = formData.get('childSeat') ? 1 : 0;
        let music = formData.get('music') ? 1 : 0;
        let onboardComputer = formData.get('onboardComputer') ? 1 : 0;
        let airConditioner = formData.get('airConditioner') ? 1 : 0;
        let bluetooth = formData.get('bluetooth') ? 1 : 0;
        let gps = formData.get('gps') ? 1 : 0;
        carService.edit({
            make,
            model,
            type,
            image,
            fuel,
            transmission,
            description,
            mileage,
            price,
            seats,
            doors,
            luggage,
            year,
            childSeat,
            gps,
            music,
            bluetooth,
            onboardComputer,
            audioInput,
            remoteCentralLocking,
            airConditioner
        }, carId, user.accessToken)
            .then(result => {
                navigate(`/mobile/car/${carId}`);
            })
            .catch(err => {
                console.log(err);
                // TODO show notification
                alert(err)
            })
    }

    const imageChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isURL(value)) {
            setErrors(state => ({ ...state, image: 'Your image should be valid URL!' }));
        } else {
            setErrors(state => ({ ...state, image: false }));
        }
    }

    const descriptionChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length > 300) {
            setErrors(state => ({ ...state, description: 'Your description should be maximum 300 characters!' }));
        } else {
            setErrors(state => ({ ...state, description: false }));
        }
    }

    const makeChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, make: 'Your make should be minimum 2 characters!' }));
        } else {
            setErrors(state => ({ ...state, make: false }));
        }
    }

    const modelChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, model: 'Your model should be minimum 1 characters!' }));
        } else {
            setErrors(state => ({ ...state, model: false }));
        }
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

    const priceChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 1000 || value < 1) {
            setErrors(state => ({ ...state, price: 'Your price should be between 1 and 1000!' }));
        } else {
            setErrors(state => ({ ...state, price: false }));
        }
    }

    const yearChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 2021 || value < 1930) {
            setErrors(state => ({ ...state, year: 'Your year should be between 1930 and 2021!' }));
        } else {
            setErrors(state => ({ ...state, year: false }));
        }
    }

    const mileageChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 1000000 || value < 1) {
            setErrors(state => ({ ...state, mileage: 'Your mileage should be between 1 and 1000000!' }));
        } else {
            setErrors(state => ({ ...state, mileage: false }));
        }
    }

    const seatsChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 9 || value < 1) {
            setErrors(state => ({ ...state, seats: 'Your seats should be between 1 and 9!' }));
        } else {
            setErrors(state => ({ ...state, seats: false }));
        }
    }

    const doorsChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 5 || value < 2) {
            setErrors(state => ({ ...state, doors: 'Your doors should be between 2 and 5!' }));
        } else {
            setErrors(state => ({ ...state, doors: false }));
        }
    }

    const luggageChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 6 || value < 0) {
            setErrors(state => ({ ...state, luggage: 'Your luggage should be between 0 and 6!' }));
        } else {
            setErrors(state => ({ ...state, luggage: false }));
        }
    }

    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onCarEdit} method="PATCH">
                        <h2>Edit your car</h2>
                        <div className="form-group">
                            <InputComponent
                                title="Image"
                                type="text"
                                name="image"
                                defaultValue={car.image}
                                onBlur={imageChangeHandler}
                                errors={errors.image}
                            />
                        </div>
                        <div className="form-group">
                            <InputComponent
                                title="Description"
                                type="text"
                                name="description"
                                defaultValue={car.description}
                                onBlur={descriptionChangeHandler}
                                errors={errors.description}
                            />
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <InputComponent
                                    title="Make"
                                    type="text"
                                    name="make"
                                    defaultValue={car.make}
                                    onBlur={makeChangeHandler}
                                    errors={errors.make}
                                />
                            </div>
                            <div className="form-group ml-2">
                                <InputComponent
                                    title="Model"
                                    type="text"
                                    name="model"
                                    defaultValue={car.model}
                                    onBlur={modelChangeHandler}
                                    errors={errors.model}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="type" className="label">Type</label>
                                <select name="type" id="type" className="form-control" value={car.type} onChange={typeChangeHandler}>
                                    {types.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
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
                            <div className="form-group mr-2">
                                <InputComponent
                                    title="Price"
                                    type="number"
                                    name="price"
                                    defaultValue={car.price}
                                    onBlur={priceChangeHandler}
                                    errors={errors.price}
                                />
                            </div>
                            <div className="form-group ml-2">
                                <InputComponent
                                    title="Year"
                                    type="number"
                                    name="year"
                                    defaultValue={car.year}
                                    onBlur={yearChangeHandler}
                                    errors={errors.year}
                                />
                            </div>
                            <div className="form-group ml-2">
                                <InputComponent
                                    title="Mileage"
                                    type="number"
                                    name="mileage"
                                    defaultValue={car.mileage}
                                    onBlur={mileageChangeHandler}
                                    errors={errors.mileage}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <InputComponent
                                    title="Seats"
                                    type="number"
                                    name="seats"
                                    defaultValue={car.seats}
                                    onBlur={seatsChangeHandler}
                                    errors={errors.seats}
                                />
                            </div>
                            <div className="form-group ml-2">
                                <InputComponent
                                    title="Doors"
                                    type="number"
                                    name="doors"
                                    defaultValue={car.doors}
                                    onBlur={doorsChangeHandler}
                                    errors={errors.doors}
                                />
                            </div>
                            <div className="form-group ml-2">
                                <InputComponent
                                    title="Luggage"
                                    type="number"
                                    name="luggage"
                                    defaultValue={car.luggage}
                                    onBlur={luggageChangeHandler}
                                    errors={errors.luggage}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group ml-2">
                                <label htmlFor="remoteCentralLocking" className="label">Central Locking</label>
                                <input type="checkbox" className="form-control-checkbox" name="remoteCentralLocking" defaultChecked={car.remoteCentralLocking} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="audioInput" className="label">audio Input</label>
                                <input type="checkbox" className="form-control-checkbox" name="audioInput" defaultChecked={car.audioInput} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="childSeat" className="label">ChildSeat</label>
                                <input type="checkbox" className="form-control-checkbox" name="childSeat" defaultChecked={car.childSeat} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="music" className="label">music</label>
                                <input type="checkbox" className="form-control-checkbox" name="music" defaultChecked={car.music} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group ml-2">
                                <label htmlFor="onboardComputer" className="label">board Computer</label>
                                <input type="checkbox" className="form-control-checkbox" name="onboardComputer" defaultChecked={car.onboardComputer} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="airConditioner" className="label">airConditioner</label>
                                <input type="checkbox" className="form-control-checkbox" name="airConditioner" defaultChecked={car.airConditioner} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="bluetooth" className="label">bluetooth</label>
                                <input type="checkbox" className="form-control-checkbox" name="bluetooth" defaultChecked={car.bluetooth} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="gps" className="label">Gps</label>
                                <input type="checkbox" className="form-control-checkbox" name="gps" defaultChecked={car.gps} />
                            </div>
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