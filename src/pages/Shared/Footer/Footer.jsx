import React from 'react';
import logo from '../../../assets/Logo/logo.png'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='sticky top-full'>
            <footer className="footer px-20 py-8 bg-black text-base-content">
                <div className="footer-title ">
                    <div className='text-white font-bold'>
                        <img src={logo} className='w-16' alt="" />
                        <h3>Follow Us</h3>
                    </div>
                    <div className='flex text-white'>
                        <Link><FaFacebook className='h-8 cursor-pointer w-10'></FaFacebook></Link>
                        <Link><FaInstagram className='h-8 cursor-pointer w-10'></FaInstagram></Link>
                        <Link><FaTwitter className='h-8 cursor-pointer w-10'></FaTwitter></Link>
                        <Link><FaLinkedin className='h-8 cursor-pointer w-10'></FaLinkedin></Link>
                    </div>
                </div>
                <div className='text-base-200'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='text-base-200'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='text-base-200'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="footer-title">
                    <div>
                        <h2 className="text-lg text-white">
                            Subscribe Newsletter
                        </h2>
                        <input type="text" className='h-10 text-black bg-white rounded-2xl my-3' name="" id="" />
                        <button className='text-black block bg-white px-4 py-3 rounded-3xl'>Subscribe</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;