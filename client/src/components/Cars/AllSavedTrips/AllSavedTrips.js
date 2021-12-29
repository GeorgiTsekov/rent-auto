import React, { useEffect, useState } from "react";

import * as carService from '../../../services/carService';
import SectionComponent from "../../Common/SectionComponent/SectionComponent";
import Car from "../Car/Car";

const AllSavedTrips = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAllSavedTrips()
            .then(result => {
                setCars(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <SectionComponent backgroundImage="/images/image_5.jpg" name="Trips" title="Your Saved Trips"/>

            <section className="ftco-section bg-light">
                <div className="container">
                    {cars.length > 0 ? (
                        <div className="row">
                            {
                                cars.map((x) => <Car key={x._id + x.dateFrom} car={x} />)
                            }
                        </div>
                    ) : <p>{"no cars"}</p>}
                </div>
            </section>
        </div>
    );
}

export default AllSavedTrips;