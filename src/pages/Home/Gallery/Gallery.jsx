import React from 'react';
import car1 from '../../../assets/Gallery/car1.jpg'
import car2 from '../../../assets/Gallery/car2.jpg'
import car3 from '../../../assets/Gallery/car3.jpg'
import car4 from '../../../assets/Gallery/car4.jpg'
import car5 from '../../../assets/Gallery/car5.jpg'
import car6 from '../../../assets/Gallery/car6.jpg'
import car7 from '../../../assets/Gallery/car7.jpg'
import car8 from '../../../assets/Gallery/car8.jpg'
import car9 from '../../../assets/Gallery/car9.jpg'
import car10 from '../../../assets/Gallery/car10.jpg'
import car11 from '../../../assets/Gallery/car11.jpg'
const Gallery = () => {
    return (
        <div className='my-12 px-5 lg:px-24'>
            <h2 className='text-center text-4xl'>Our Gallery</h2>
            <p className='text-lg text-center font-semibold text-[#757575] my-3'>Here are some awesome collection of our toys</p>
            <div className='grid my-8 grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='grid rounded-xl gap-2 grid-cols-2'>
                    <img src={car1} className='w-full rounded-md h-52' alt="" />
                    <img src={car2} className='w-full rounded-md h-52' alt="" />
                    <img src={car8} className='w-full rounded-md h-52' alt="" />
                    <img src={car4} className='w-full rounded-md h-52' alt="" />
                </div>
                <div>
                    <img src={car6} className='h-full rounded-md' alt="" />
                </div>
                <div>
                    <img src={car7} className='h-full rounded-md' alt="" />
                </div>
                <div className='grid rounded-xl gap-3 grid-cols-2'>
                    <img src={car5} className='w-full rounded-md h-52' alt="" />
                    <img src={car11} className='w-full rounded-md h-52' alt="" />
                    <img src={car9} className='w-full rounded-md h-52' alt="" />
                    <img src={car10} className='w-full rounded-md h-52' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;