import React, { Component } from "react";
import styles from './Cars.module.css';

class Cars extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className={`${styles['ftco-section']} ${styles['bg-light']}`}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles['col-md-4']}>
                            <div className={styles['car-wrap']}>
                                <div className={styles['car-wrap-img']} style={{ backgroundImage: "url(images/car-1.jpg)" }}>
                                </div>
                                <div className={styles['car-wrap-text']}>
                                    <h2 className=""><a href="/#">Mercedes Grand Sedan</a></h2>
                                    <div className="">
                                        <span className="">Cheverolet</span>
                                        <p className="">$500 <span>/day</span></p>
                                    </div>
                                    <p className=""><a href="/#" className="">Book now</a> <a href="/#" className="">Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Cars;