import { Navigate } from 'react-router-dom';

import * as authService from '../../services/authService'

const Logout = ({
    onLogout
}) => {
    authService.logout();
    onLogout();

    return <Navigate to="/auth/login" replace={true} />
}

export default Logout;