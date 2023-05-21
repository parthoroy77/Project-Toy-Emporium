import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitleHook from '../../hooks/useTitleHook';

const ViewDetails = () => {
    useTitleHook('Details')
    const toy = useLoaderData()
    const { _id, toyName, toyImg, subCategory, ratings, price, quantity, sellerName, sellerEmail, description } = toy;
    return (
        <div className='my-10'>
            <div className="card w-10/12 mx-auto lg:card-side bg-base-100 shadow-xl">
                <figure><img src={toyImg} className='h-full' alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Toy Name: {toyName}o</h2>
                    <p><span className='font-bold'>Description:</span> {description}</p>
                    <p><span className='font-bold text-orange-800'>Price: </span> ${price}</p>
                    <p><span className='font-bold text-orange-800'>Ratings: </span> {ratings}</p>
                    <p><span className='font-bold text-orange-800'>Available Quantity: </span> {quantity}</p>
                    <p><span className='font-bold text-orange-800'>Seller Name: </span> {sellerName}</p>
                    <p><span className='font-bold text-orange-800'>Seller Email: </span> {sellerEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;