import React from 'react';
import kids from '../../../assets/Banner/kids.jpg'
import kid2 from '../../../assets/Banner/kid2.jpg'
const DiscountPanel = () => {
    return (
        <div className='h-96 px-5 lg:px-24 bg-gradient-to-r from-sky-300 to-orange-500 my-14'>
            <div className='flex justify-between items-center'>
                <div className=' pt-5 space-y-3'>
                    <button className='btn bg-pink-600 border-0'>Save Upto 10%-20%</button>
                    <h3 className='text-3xl font-bold font-mono'>All New and Premium Collection</h3>
                    <h4 className='text-2xl font-bold'>Free Shipping and Discount up to 30%</h4>
                    <button className='px-14 bg-pink-300 py-2 rounded-3xl hover:bg-pink-200'>Shop Now</button>
                </div>
                <div className=''>
                    <img src={kid2} className='h-96 rounded-lg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default DiscountPanel;