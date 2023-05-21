import React from 'react';
import './Banner.css'
import kid1 from '../../../assets/Banner/kid1.png'
const Banner = () => {
    return (
        <div
            className='banner-container pt-10 justify-between bg-gradient-to-t from-pink-500 to-blue-100 lg:px-28 px-5 items-center flex flex-col lg:flex-row '>
            <div className='space-y-5'>
                <h2 className='text-2xl font-serif lg:text-5xl font-bold'>
                    Best Kids Store <br /> & Online Shopping
                </h2>
                <p className='text-xl text-neutral-focus font-semibold'>
                    Give The Gift Of Your Children Everyday
                </p>
                <div>
                    
                    <button className='bg-pink-200 rounded-3xl text-lg hover:bg-pink-100 font-semibold px-8 py-3'>Shop Now
                        
                    </button>
                </div>
            </div>
            <div>
                <img src={kid1} alt="" />
            </div>
        </div>
    );
};

export default Banner;