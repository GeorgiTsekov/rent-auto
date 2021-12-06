import React from "react";

const Car = ({
    car
}) => {
    return (
        <div className="col-md-4">
            <div className="car-wrap rounded">
                <div className="img rounded d-flex align-items-end">
                    <img className="img rounded d-flex align-items-end" src={car.image} alt="imageUrl" />
                </div>
                <div className="text">
                    <h2 className="mb-0"><a href="/carDetails">{car.make} {car.model}</a></h2>
                    <div className="d-flex mb-3">
                        <span className="cat">{car.type}</span>
                        <p className="price ml-auto">${car.price} <span>/day</span></p>
                    </div>
                    <p className="d-flex mb-0 d-block"><a href="/carDetails" className="btn btn-primary py-2 mr-1">Book now</a> <a href="/carDetails" className="btn btn-secondary py-2 ml-1">Details</a></p>
                </div>
            </div>
        </div>
    );
}

export default Car;