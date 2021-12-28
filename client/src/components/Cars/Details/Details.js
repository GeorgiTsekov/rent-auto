import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from "../../../contexts/AuthContext";
import * as carService from "../../../services/carService";
import LiCheckComponent from "../../Common/LiCheckComponent/LiCheckComponent";
import ConfirmDialog from '../../Common/ConfirmDialog/ConfirmDialog';
import useCarState from "../../../hooks/useCarState";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import CarDetailsComponent from "../../Common/CarDetailsComponent/CarDetailsComponent";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext()
    const { carId } = useParams();
    const [car, setCar] = useCarState(carId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { addNotification } = useNotificationContext();

    const deleteHandler = (e) => {
        e.preventDefault();

        carService.deleteCar(carId)
            .then(result => {
                addNotification("You delete this car successfully", types.success)
                navigate('/mobile/car/all');
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
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

        carService.likes(carId)
            .then(likes => {
                setCar(state => ({
                    ...state,
                    likes
                }))
                addNotification("You like this car successfully", types.success)
            })
            .catch(err => {
                addNotification(err.message, types.error)
                console.log(err);
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
                        <CarDetailsComponent title="Km" icon="&#x339E;" detail={car.mileage} />
                        <CarDetailsComponent title="Transmission" icon="&#128663;" detail={car.transmission} />
                        <CarDetailsComponent title="Seats" icon="&#128186;" detail={car.seats} />
                        <CarDetailsComponent title="Luggage" icon="&#x1F6C5;" detail={car.luggage} />

                    </div>
                    <div className="row">
                        <CarDetailsComponent title="Fuel" icon="&#9981;" detail={car.fuel} />
                        <CarDetailsComponent title="Doors" icon="&#128682;" detail={car.doors} />
                        <CarDetailsComponent title="Likes" icon="&#10084;" detail={car.likes?.length} />
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
                                                    <LiCheckComponent title="AirConditioner" type={car.airConditioner} />
                                                    <LiCheckComponent title="Child Seat" type={car.childSeat} />
                                                    <LiCheckComponent title="GPS" type={car.gps} />
                                                    <LiCheckComponent title="Music" type={car.music} />
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="features">
                                                    <LiCheckComponent title="Bluetooth" type={car.bluetooth} />
                                                    <LiCheckComponent title="Onboard computer" type={car.onboardComputer} />
                                                    <LiCheckComponent title="Audio input" type={car.audioInput} />
                                                    <LiCheckComponent title="Remote central locking" type={car.remoteCentralLocking} />
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