import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as carService from '../../services/carService';
import Car from "./Car/Car";

const Cars = () => {
    const { state } = useLocation();
    const [cars, setCars] = useState(state ? state.cars : []);
    useEffect(() => {
        if (!state) {
            carService.getAll()
            .then(result => {

                setCars(result);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [state]);
    return (
        <div>
            <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url(/images/bg_3.jpg)" }} data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-9">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="/index.html">Home <i className="ion-ios-arrow-forward"></i></a>
                                </span>
                                <span>
                                    Cars <i className="ion-ios-arrow-forward"></i>
                                </span>
                            </p>
                            <h1 className="mb-3 bread">Choose Your Car</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    {cars.length > 0 ? (
                        <div className="row">
                            {
                                cars.map((x) => <Car key={x._id} car={x} />)
                            }
                        </div>
                    ) : <p>{state ? "no available cars for this dates" : "no cars"}</p>}
                </div>
            </section>
        </div>
    );
}

export default Cars;