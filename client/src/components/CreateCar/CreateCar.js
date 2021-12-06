import React, { Component } from "react";

class CreateCar extends Component {
    render() {
        return (
            <div className="hero-wrap" style={{ backgroundImage: "url(images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="overlay"></div>
                    <hr />
                    <div className="row no-gutters slider-text align-items-center">
                        <form action="/#" className="request-form bg-primary">
                            <h2>Make your trip</h2>
                            <div className="form-group">
                                <label for="" className="label">Type</label>
                                <input type="text" className="form-control" placeholder="Combi, Sedan..." />
                            </div>
                            <div className="form-group">
                                <label for="" className="label">Image</label>
                                <input type="text" className="form-control" placeholder="https://car-image.bg" />
                            </div>
                            <div className="form-group">
                                <label for="" className="label">Description</label>
                                <input type="text" className="form-control" placeholder="Say something for this car" />
                            </div>
                            <div className="d-flex">
                                <div className="form-group mr-2">
                                    <label for="" className="label">Make</label>
                                    <input type="text" className="form-control" placeholder="Audi" />
                                </div>
                                <div className="form-group ml-2">
                                    <label for="" className="label">Model</label>
                                    <input type="text" className="form-control" placeholder="A1" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="form-group mr-2">
                                    <label for="" className="label">Engine</label>
                                    <input type="text" className="form-control" placeholder="Diesel, Gazoline" />
                                </div>
                                <div className="form-group ml-2">
                                    <label for="" className="label">AirConditioner</label>
                                    <input type="text" className="form-control" placeholder="Yes" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="form-group mr-2">
                                    <label for="" className="label">Seats</label>
                                    <input type="number" className="form-control" placeholder="5" />
                                </div>
                                <div className="form-group ml-2">
                                    <label for="" className="label">Doors</label>
                                    <input type="number" className="form-control" placeholder="4" />
                                </div>
                                <div className="form-group ml-2">
                                    <label for="" className="label">Year</label>
                                    <input type="number" className="form-control" placeholder="2020" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
                            </div>
                        </form>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default CreateCar;