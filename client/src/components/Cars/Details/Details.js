import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from "../../../contexts/AuthContext";
import * as carService from "../../../services/carService";
import LiComponent from "../../LiComponent/LiComponent";
import ConfirmDialog from '../../Common/ConfirmDialog/ConfirmDialog';
import useCarState from "../../../hooks/useCarState";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext()
    const { carId } = useParams();
    const [car, setCar] = useCarState(carId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();

        carService.deleteCar(carId, user.accessToken)
            .then(result => {
                navigate('/mobile/car/all');
            })
            .catch(err => {
                console.log(err);
                alert(err)
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShowDeleteDialog(true);
    }

    const likeHandler = (e) => {
        e.preventDefault();

        carService.likes(carId, user.accessToken)
            .then(likes => {
                setCar(state => ({
                    ...state,
                    likes
                }))
            })
            .catch(err => {
                console.log(err);
                alert(err)
            })
    }

    const creatorButtons = (
        <div>
            <Link to={`/mobile/car/${car._id}/edit`} className="btn btn-secondary py-2 ml-1">Edit this car</Link>
            <button className="btn btn-primary py-2 ml-1" onClick={deleteClickHandler}>Delete this car</button>
        </div>
    );

    const guestButtons = (
        <div>
            <Link to={`/mobile/car/${car._id}/addTenant`} className="btn btn-primary py-2 mr-1">Book now</Link>
            <button className="btn btn-primary py-2 ml-1" onClick={likeHandler}>Like this car</button>
        </div>
    );
    return (
        <>
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
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
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
                                                <span>{car.seats}</span>
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
                                                <span>{car.luggage}</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
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
                        <div className="col-md d-flex align-self-stretch ">
                            <div className="media block-6 services">
                                <div className="media-body py-md-4">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-diesel"></span></div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Doors
                                                <span>{car.doors}</span>
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
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span>&#9829;</span>
                                        </div>
                                        <div className="text">
                                            <h3 className="heading mb-0 pl-3">
                                                Likes
                                                <span>{car.likes?.length}</span>
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
                                            <p className="nav-link" >{car.description}</p>
                                            <div className="nav-link">
                                                {user._id && (user._id === car.creator ? creatorButtons : guestButtons)}
                                            </div>
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
        </>
    );
}

export default Details;