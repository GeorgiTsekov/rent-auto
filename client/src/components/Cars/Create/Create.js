import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import *as carService from '../../../services/carService';
import { carTypes, fuels, transmissions } from '../carConstants';

const Create = () => {
    const { user } = useAuthContext();
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
        let remoteCentralLocking = formData.get('remoteCentralLocking') 
        let audioInput = formData.get('audioInput') 
        let childSeat = formData.get('childSeat') 
        let music = formData.get('music') 
        let onboardComputer = formData.get('onboardComputer') 
        let airConditioner = formData.get('airConditioner') 
        let bluetooth = formData.get('bluetooth') 
        let gps = formData.get('gps');
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
                        <h2>Create your car</h2>
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
                                    {carTypes.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="fuel" className="label">Fuel</label>
                                <select name="fuel" id="fuel" className="form-control">
                                    {fuels.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                                </select>
                            </div>
                            <div className="form-group mr-2">
                                <label htmlFor="transmission" className="label">Type</label>
                                <select name="transmission" id="transmission" className="form-control">
                                    {transmissions.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
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
                            <input type="submit" value="Create A Car Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;