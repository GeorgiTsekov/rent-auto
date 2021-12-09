import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import *as carService from '../../../services/carService';

const CreateCar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const onCarCreate = (e) => {
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
        let remoteCentralLocking = formData.get('remoteCentralLocking') ? formData.get('remoteCentralLocking') : 0;
        let audioInput = formData.get('audioInput') ? formData.get('audioInput') : 0;
        let childSeat = formData.get('childSeat') ? formData.get('childSeat') : 0;
        let music = formData.get('music') ? formData.get('music') : 0;
        let onboardComputer = formData.get('onboardComputer') ? formData.get('onboardComputer') : 0;
        let airConditioner = formData.get('airConditioner') ? formData.get('airConditioner') : 0;
        let bluetooth = formData.get('bluetooth') ? formData.get('bluetooth') : 0;
        let gps = formData.get('gps') ? formData.get('gps') : 0;
        carService.create({
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
        }, user.accessToken)
            .then(result => {
                navigate('/mobile/car/all');
            })
            .catch(err => {
                console.log(err);
                // TODO show notification
                alert(err)
            })
    }
    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onCarCreate} method="POST">
                        <h2>Make your trip</h2>
                        <div className="form-group">
                            <label htmlFor="image" className="label">Image</label>
                            <input type="text" className="form-control" name="image" placeholder="https://car-image.bg" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="label">Description</label>
                            <input type="text" className="form-control" name="description" placeholder="Say something for this car" />
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="make" className="label">Make</label>
                                <input type="text" className="form-control" name="make" placeholder="Audi" />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="model" className="label">Model</label>
                                <input type="text" className="form-control" name="model" placeholder="A1" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="type" className="label">Type</label>
                                <select name="type" id="type" className="form-control">
                                    <option value="Combi">Combi</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Limousine">Limousine</option>
                                    <option value="Off-road">Off-road</option>
                                    <option value="Coupe">Coupe</option>
                                    <option value="Suv">Suv</option>
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="fuel" className="label">Fuel</label>
                                <select name="fuel" id="fuel" className="form-control">
                                    <option value="Diesel">Diesel</option>
                                    <option value="Gasoline">Gasoline</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Legs">Legs</option>
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="transmission" className="label">Type</label>
                                <select name="transmission" id="transmission" className="form-control">
                                    <option value="Automat">Automat</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="price" className="label">Price</label>
                                <input type="number" className="form-control" name="price" placeholder="250" />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="year" className="label">Year</label>
                                <input type="number" className="form-control" name="year" placeholder="2020" />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="mileage" className="label">Mileage</label>
                                <input type="number" className="form-control" name="mileage" placeholder="50000" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group mr-2">
                                <label htmlFor="seats" className="label">Seats</label>
                                <input type="number" className="form-control" name="seats" placeholder="5" />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="doors" className="label">Doors</label>
                                <input type="number" className="form-control" name="doors" placeholder="4" />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="luggage" className="label">Luggage</label>
                                <input type="number" className="form-control" name="luggage" placeholder="1" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group ml-2">
                                <label htmlFor="remoteCentralLocking" className="label">Central Locking</label>
                                <input type="checkbox" className="form-control-checkbox" name="remoteCentralLocking" value={1} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="audioInput" className="label">audio Input</label>
                                <input type="checkbox" className="form-control-checkbox" name="audioInput" value={1} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="childSeat" className="label">ChildSeat</label>
                                <input type="checkbox" className="form-control-checkbox" name="childSeat" value={1} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="music" className="label">music</label>
                                <input type="checkbox" className="form-control-checkbox" name="music" value={1} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group ml-2">
                                <label htmlFor="onboardComputer" className="label">board Computer</label>
                                <input type="checkbox" className="form-control-checkbox" name="onboardComputer" value={1} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="airConditioner" className="label">airConditioner</label>
                                <input type="checkbox" className="form-control-checkbox" name="airConditioner" value={1} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="bluetooth" className="label">bluetooth</label>
                                <input type="checkbox" className="form-control-checkbox" name="bluetooth" value={1} />
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="gps" className="label">Gps</label>
                                <input type="checkbox" className="form-control-checkbox" name="gps" value={1} />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCar;