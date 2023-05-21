import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const { _id, toyName, toyImg, subCategory,ratings, price, quantity, sellerName, sellerEmail, description } = toy;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-2 pt-5">
                    <img src={toyImg} alt="Shoes" className="rounded-xl h-48" />
                </figure>
                <div className="card-body flex flex-row justify-between items-center">
                    <div>
                        <h2 className="card-title">{toyName}</h2>
                        <p>Ratings: {ratings}</p>
                    </div>    
                    <div>
                        <Link to={`/details/${_id}`}>
                            <button className='btn btn-secondary border-0 btn-xs'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;