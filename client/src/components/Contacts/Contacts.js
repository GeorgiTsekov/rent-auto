import React from "react";
import SectionComponent from "../Common/SectionComponent/SectionComponent";

const Contacts = () => {
    return (
        <div>
            <SectionComponent backgroundImage="/images/bg_3.jpg" name="Contact" title="Contact Us" />

            <section className="ftco-section contact-section">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-7">
                            <div className="row mb-7">
                                <div className="col-md-12">
                                    <div className="border w-100 p-4 rounded mb-2 d-flex">
                                        <div className="icon mr-3">
                                            <span className="icon-map-o"></span>
                                        </div>
                                        <p><span>Address:</span> Triaditsa 5B Street, Sofia</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="border w-100 p-4 rounded mb-2 d-flex">
                                        <div className="icon mr-3">
                                            <span className="icon-mobile-phone"></span>
                                        </div>
                                        <p><span>Phone:</span> +359 884 35 21 37</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="border w-100 p-4 rounded mb-2 d-flex">
                                        <div className="icon mr-3">
                                            <span className="icon-envelope-o"></span>
                                        </div>
                                        <p><span>Email:</span> rent-mobile@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;