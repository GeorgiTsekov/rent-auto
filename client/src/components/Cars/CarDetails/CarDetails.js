import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import * as carService from "../../../services/carService";
import LiComponent from "../../LiComponent/LiComponent";

const CarDetails = () => {
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(async () => {
        let carResult = await carService.getOne(carId);

        setCar(carResult);
    }, []); 
    return (
        <div>
            <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: "url(/images/bg_3.jpg)" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                        <div className="col-md-9  pb-5">
                            <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span>Car details <i className="ion-ios-arrow-forward"></i></span></p>
                            <h1 className="mb-3 bread">Car Details</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ftco-section ftco-car-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="car-details">
                                <div className="img rounded">
                                    <img className="img rounded" src={car.image} alt="imageUrl" />
                                </div>
                                <div className="text text-center">
                                    <span className="subheading">{car.type}</span>
                                    <h2>{car.make} {car.model}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="media-body py-md-4">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-dashboard"></span></div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Mileage
                                                <span>{car.mileage}</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="media-body py-md-4">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-pistons"></span></div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Transmission
                                                <span>{car.transmission}</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="media-body py-md-4">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-car-seat"></span></div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Seats
                                                <span>{car.seats} Adults</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="media-body py-md-4">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-backpack"></span></div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Luggage
                                                <span>{car.luggage} Bags</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="media-body py-md-4">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-diesel"></span></div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Fuel
                                                <span>{car.fuel}</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pills">
                            <div className="bd-example bd-example-tabs">
                                <div className="d-flex justify-content-center">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" >{car.description}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="features">
                                                    <LiComponent title="AirConditioner" type={car.airConditioner} />
                                                    <LiComponent title="Child Seat" type={car.childSeat} />
                                                    <LiComponent title="GPS" type={car.gps} />
                                                    <LiComponent title="Music" type={car.music} />
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="features">
                                                    <LiComponent title="Bluetooth" type={car.bluetooth} />
                                                    <LiComponent title="Onboard computer" type={car.onboardComputer} />
                                                    <LiComponent title="Audio input" type={car.audioInput} />
                                                    <LiComponent title="Remote central locking" type={car.remoteCentralLocking} />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default CarDetails;