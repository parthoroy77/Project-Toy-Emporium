import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loader} = useContext(AuthContext)
    if (loader) {
        return <PropagateLoader color="#36d7b7" />
    }
    if (user) {
        return children;
    }
    const location = useLocation()
    return (
        <Navigate to='/login' replace state={{from: location}}>
            
        </Navigate>
    );
};

export default PrivateRoute;