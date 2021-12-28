import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as carService from '../../services/carService';
import SectionComponent from "../Common/SectionComponent/SectionComponent";
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
            <SectionComponent backgroundImage="/images/image_6.jpg" name="Catalog" title="Choose Car For Your Trip"/>

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