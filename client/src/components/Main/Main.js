import React, { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="overlay"></div>
                </div>
            </div>
        )
    }
}

export default Main;