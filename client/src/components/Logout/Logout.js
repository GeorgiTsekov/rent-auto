import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/')
            }).catch(err => {
                console.log(err);
                // TODO show notification
                alert(err)
            })
    }, []);

    return null;
}

export default Logout;