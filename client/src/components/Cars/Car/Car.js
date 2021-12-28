import React from "react";
import { Link } from "react-router-dom";

const Car = ({
    car
}) => {
    const carDataForAll = (
        <>
            <div className="d-flex mb-3">
                <span className="cat">{car.type}</span>
                <p className="price ml-auto">${car.price} <span>/day</span></p>
            </div>
            <p className="d-flex mb-0 d-block">
                <Link to={`/mobile/car/${car._id}/addTenant`} className="btn btn-primary py-2 mr-1">Book now</Link>
                <Link to={`/mobile/car/${car._id}`} className="btn btn-secondary py-2 ml-1">Details</Link>
            </p>
        </>
    )

    const carDataForMe = (
        <>
            <div className="d-flex mb-3">
                <p className="price ml-auto">From: {car.pickUpLocation} </p>
                <p className="price ml-auto">  {car.dateFrom}</p>
            </div>
            <div className="d-flex mb-3">
                <p className="price ml-auto">To: {car.dropOffLocation} </p>
                <p className="price ml-auto">{car.dateTo}</p>
            </div>
            <p className="d-flex mb-0 d-block">
                <Link to={`/mobile/car/${car._id}`} className="btn btn-secondary py-2 ml-1">Details</Link>
            </p>
        </>
    )
    return (
        <div className="col-md-4">
            <div className="car-wrap rounded">
                <div className="img rounded d-flex align-items-end">
                    <img className="img rounded d-flex align-items-end" src={car.image} alt="imageUrl" />
                </div>
                <div className="text">
                    <h2 className="mb-0"><Link to={`/details/${car._id}`}>{car.make} {car.model}</Link></h2>
                    {car.price ? carDataForAll : carDataForMe}
                </div>
            </div>
        </div>
    );
}

export default Car;