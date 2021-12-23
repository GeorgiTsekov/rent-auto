import { useNavigate } from "react-router";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import * as authService from '../../services/authService';
import InputFormComponent from "../Common/InputFormComponent/InputFormComponent";
import AuthValidations from "../Common/Validations/AuthValidations";

const Register = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const {
        nameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        rePasswordChangeHandler,
        errors
    } = AuthValidations();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        authService.register({ name, email, password, rePassword })
            .then((authData) => {
                login(authData);
                addNotification('You sign and logged in successfully!', types.success);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                addNotification(err, types.error)
            })
    }
    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onRegisterHandler} method="POST">
                        <h2>Register your account</h2>
                        <InputFormComponent
                            form="form-group"
                            title="Name"
                            type="text"
                            name="name"
                            placeholder="Pesho Petrov"
                            onBlur={nameChangeHandler}
                            errors={errors.name}
                        />
                        <InputFormComponent
                            form="form-group"
                            title="Email"
                            type="text"
                            name="email"
                            placeholder="georgi_tsekov@abv.bg"
                            onBlur={emailChangeHandler}
                            errors={errors.email}
                        />
                        <div className="d-flex">
                            <InputFormComponent
                                form="form-group mr-2"
                                title="Password"
                                type="password"
                                name="password"
                                placeholder="password"
                                onBlur={passwordChangeHandler}
                                errors={errors.password}
                            />
                            <InputFormComponent
                                form="form-group ml-2"
                                title="Repeat Password"
                                type="password"
                                name="rePassword"
                                placeholder="repeat password"
                                onBlur={rePasswordChangeHandler}
                                errors={errors.rePassword}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register Your Account Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;