import { useNavigate } from "react-router-dom";

import *as carService from '../../../services/carService';
import InputFormComponent from "../../Common/InputFormComponent/InputFormComponent";
import DataValidations from "../../Common/Validations/DataValidations";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";

const SearchAvailable = () => {
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const {
        dateFromChangeHandler,
        dateToChangeHandler,
        errors
    } = DataValidations();

    const getAvailableCars = (e) => {
        e.preventDefault();
        let carData = Object.fromEntries(new FormData(e.currentTarget));

        carService.available(carData)
            .then((result) => {
                console.log(result)
                navigate(`/mobile/car/availableCars`, { state: { cars: result } });
                addNotification(result.message, types.success)
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
                    <form className="request-form bg-primary" onSubmit={getAvailableCars} method="POST">
                        <h2>Search free cars</h2>
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
                                title="Pick-up date"
                                type="text"
                                name="dateTo"
                                placeholder="2022-01-01"
                                onBlur={dateToChangeHandler}
                                errors={errors.dateTo}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Search All Free Cars Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchAvailable;