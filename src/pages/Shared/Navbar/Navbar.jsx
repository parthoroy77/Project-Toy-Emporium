import React from 'react';
import logo from '../../../assets/Logo/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addToys'>Add A Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className='px-5 bg-sky-100 rounded-lg shadow-md sticky lg:px-28 '>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} className='w-16 h-16' alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <Link to='/login'><button className='btn btn-ghost'>Log In</button></Link>
                    <Link to='/register'><button className='btn btn-ghost'>Log Out</button></Link>
                    {/* <img title='partho' className="w-14 rounded-full" src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80' /> */}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;