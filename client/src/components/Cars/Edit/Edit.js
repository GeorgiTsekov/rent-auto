import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import useCarState from "../../../hooks/useCarState";
import *as carService from '../../../services/carService';
import { types, fuels, transmissions } from '../carConstants';

const Edit = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { carId } = useParams();
    const [errors, setErrors] = useState({ description: false });
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

    const typeChangeHandler = (e) => {
        setCar(state => ({ ...state, type: e.target.value }));
    }

    const fuelChangeHandler = (e) => {
        setCar(state => ({ ...state, fuel: e.target.value }));
    }

    const transmissionChangeHandler = (e) => {
        setCar(state => ({ ...state, transmission: e.target.value }));
    }

    const descriptionChangeHandler = (e) => {
        let currentDescription = e.target.value;
        if (currentDescription.length > 300) {
            setErrors(state => ({ ...state, description: 'Your name should be maximum 300 characters!' }));
        } else {
            setErrors(state => ({ ...state, description: false }))
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
                            <label htmlFor="image" className="label">Image</label>
                            <input type="text" className="form-control" name="image" defaultValue={car.image} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="label">Description</label>
                            <input type="text" className="form-control" name="description" defaultValue={car.description} onBlur={descriptionChangeHandler} />
                            <Alert variant="danger" show={errors.description}>{errors.description}</Alert>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="make" className="label">Make</label>
                                <input type="text" className="form-control" name="make" defaultValue={car.make} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="model" className="label">Model</label>
                                <input type="text" className="form-control" name="model" defaultValue={car.model} />
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
                                <label htmlFor="price" className="label">Price</label>
                                <input type="number" className="form-control" name="price" defaultValue={car.price} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="year" className="label">Year</label>
                                <input type="number" className="form-control" name="year" defaultValue={car.year} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="mileage" className="label">Mileage</label>
                                <input type="number" className="form-control" name="mileage" defaultValue={car.mileage} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="seats" className="label">Seats</label>
                                <input type="number" className="form-control" name="seats" defaultValue={car.seats} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="doors" className="label">Doors</label>
                                <input type="number" className="form-control" name="doors" defaultValue={car.doors} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="luggage" className="label">Luggage</label>
                                <input type="number" className="form-control" name="luggage" defaultValue={car.luggage} />
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