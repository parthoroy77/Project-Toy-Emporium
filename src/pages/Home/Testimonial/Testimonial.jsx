import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Testimonial = () => {
    return (
        <div className='px-5 lg:px-24 my-14'>
            <div className='text-center'>
                <h1 className='text-4xl font-mono font-bold'>What Our Customers Says</h1>
                <hr className='w-[40%] mx-auto my-4 border-6' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img data-aos-duration="2000" data-aos='zoom-in-right' src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HidleSton</h2>
                        <p className='text-[#757575] px-4'>My daughter plays with this car toy all day long. It's sturdy, responsive, and keeps her engaged. Great purchase for any kid who loves cars!</p>
                        <p className='flex items-center'>Ratings:
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img data-aos-duration="2000" data-aos='zoom-in-up' src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg' alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Wiliam Smith</h2>
                        <p className='text-[#757575] px-4'>I bought this car toy for my son, and he absolutely loves it! It's durable, easy to control, and provides endless entertainment. Highly recommended!</p>
                        <p className='flex items-center'>Ratings:
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img data-aos-duration="2000" data-aos='zoom-in-left' src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Zara Isa</h2>
                        <p className='text-[#757575] px-4'>This car toy is a hit in our household. The bright colors, smooth wheels, and cool sound effects make it a perfect choice for little ones. Worth every penny!</p>
                        <p className='flex items-center'>Ratings:
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalf></FaStarHalf>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;