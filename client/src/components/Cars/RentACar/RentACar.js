import { useNavigate, useParams } from "react-router-dom";

import *as carService from '../../../services/carService';
import InputFormComponent from "../../Common/InputFormComponent/InputFormComponent";
import { towns } from '../carConstants';
import DateValidations from "../../Common/Validations/DateValidations";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

const RentACar = () => {
    const { addNotification } = useNotificationContext();
    const { carId } = useParams();
    const navigate = useNavigate();
    const {
        dateFromChangeHandler,
        dateToChangeHandler,
        errors
    } = DateValidations();

    const onRentACar = (e) => {
        e.preventDefault();
        let carData = Object.fromEntries(new FormData(e.currentTarget));

        carService.rent(carData, carId)
            .then((result) => {
                addNotification(result.message, types.success)
                navigate(`/mobile/car/${carId}`);
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
    }

    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onRentACar} method="PATCH">
                        <h2>Make your trip</h2>
                        <div className="form-group mr-2">
                            <label htmlFor="pickUpLocation" className="label">Pick-up Airport</label>
                            <select name="pickUpLocation" id="pickUpLocation" className="form-control">
                                {towns.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                            </select>
                        </div>
                        <div className="form-group mr-2">
                            <label htmlFor="dropOffLocation" className="label">Drop-off Airport</label>
                            <select name="dropOffLocation" id="dropOffLocation" className="form-control">
                                {towns.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                            </select>
                        </div>
                        <div className="d-flex">
                            <InputFormComponent
                                form="form-group"
                                title="Pick-up date"
                                type="text"
                                name="dateFrom"
                                placeholder="2021-12-30"
                                onBlur={dateFromChangeHandler}
                                errors={errors.dateFrom}
                            />
                            <InputFormComponent
                                form="form-group"
                                title="Drop-off date"
                                type="text"
                                name="dateTo"
                                placeholder="2022-01-01"
                                onBlur={dateToChangeHandler}
                                errors={errors.dateTo}
                            />
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

export default RentACar;