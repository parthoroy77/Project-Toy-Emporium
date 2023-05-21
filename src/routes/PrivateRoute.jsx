import React from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loader } = {
    
    }
    if (loader) {
        return <h2>progresss</h2>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' replace state={{from: location}}>
            
        </Navigate>
    );
};

export default PrivateRoute;