import React, { Component } from "react";

class RentACar extends Component {
    render() {
        return (
            <div className="hero-wrap" style={{ backgroundImage: "url(images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="overlay"></div>
                    <div className="row no-gutters slider-text align-items-center">
                        <form action="/#" className="request-form bg-primary">
                            <h2>Make your trip</h2>
                            <div className="form-group">
                                <label for="" className="label">Pick-up location</label>
                                <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                            </div>
                            <div className="form-group">
                                <label for="" className="label">Drop-off location</label>
                                <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                            </div>
                            <div className="d-flex">
                                <div className="form-group mr-2">
                                    <label for="" className="label">Pick-up date</label>
                                    <input type="text" className="form-control" id="book_pick_date" placeholder="Date" />
                                </div>
                                <div className="form-group ml-2">
                                    <label for="" className="label">Drop-off date</label>
                                    <input type="text" className="form-control" id="book_off_date" placeholder="Date" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RentACar;