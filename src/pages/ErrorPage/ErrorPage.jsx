import React from 'react';
import error from '../../assets/Error/error.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='h-screen'>
            <div>
                <img src={error} className='h-[70%] mx-auto w-[70%]' alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to='/'><button className='btn mx-auto w-36 bg-sky-600 border-0'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;