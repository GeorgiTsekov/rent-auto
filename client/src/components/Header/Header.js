import { useAuthContext } from "../../contexts/AuthContext";
import LinkComponent from "../Common/LinkComponent/LinkComponent";

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
            <LinkComponent href="/mobile/car/mySavedTrips" title={`Welcome, ${user.name}`} type="nav" />
            <LinkComponent href="/auth/logout" title="Logout" type="nav" />
        </ul>
    )

    let administratorNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/mobile/car/allSavedTrips" title={`Welcome, ${user.name}`} type="nav" />
            <LinkComponent href="/mobile/car/create" title="Create a Car" type="nav" />
            <LinkComponent href="/auth/logout" title="Logout" type="nav" />
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg ftco-navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">Auto<span>rent</span></a>
                <div className=" navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <LinkComponent href="/" title="Home" type="nav" />
                        <LinkComponent href="/about" title="About" type="nav" />
                        <LinkComponent href="/contacts" title="Contacts" type="nav" />
                        <LinkComponent href="/mobile/car/all" title="Catalog" type="nav" />
                    </ul>
                    {isAuthenticated ? (isAdministrator ? administratorNavigation : userNavigation) : guestNavigation}
                </div>
            </div>
        </nav >
    )
};

export default Header;