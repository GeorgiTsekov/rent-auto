import { useAuthContext } from "../../contexts/AuthContext";
import LinkComponent from "../Link/Link";

const Header = () => {
    const { user, isAdministrator, isAuthenticated } = useAuthContext();

    let guestNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/auth/login" title="Login" type="nav" />
            <LinkComponent href="/auth/register" title="Register" type="nav" />
        </ul>
    )

    let userNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/auth/profile" title={`Welcome, ${user.name}`} type="nav" />
            <LinkComponent href="/mobile/car/:carId/rent" title="Rent a Car" type="nav" />
            <LinkComponent href="/auth/logout" title="Logout" type="nav" />
        </ul>
    )

    let administratorNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/auth/profile" title={`Welcome, ${user.name}`} type="nav" />
            <LinkComponent href="/mobile/car/:carId/rent" title="Rent a Car" type="nav" />
            <LinkComponent href="/mobile/car/create" title="Create a Car" type="nav" />
            <LinkComponent href="/auth/logout" title="Logout" type="nav" />
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">Auto<span>road</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <LinkComponent href="/" title="Home" type="nav" />
                        <LinkComponent href="/about" title="About" type="nav" />
                        <LinkComponent href="/mobile/car/all" title="All Cars" type="nav" />
                    </ul>
                    {isAuthenticated ? (isAdministrator ? administratorNavigation : userNavigation) : guestNavigation}
                </div>
            </div>
        </nav >
    )
};

export default Header;