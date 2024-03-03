

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from '../components/Button';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const navLists = (
        <>

            <nav className="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 flex flex-col lg:flex-row  items-center text-base justify-start">
                <div className='flex lg:flex-row mb-2 lg:mb-0'>
                    <li><NavLink className="lg:mr-2 ">Product</NavLink></li>
                    <MdKeyboardArrowDown className='lg:mr-7 size-5' />
                </div>
                <div className='flex lg:flex-row mb-2 lg:mb-0'>
                    <li><NavLink className="lg:mr-2 ">Solutions</NavLink></li>
                    <MdKeyboardArrowDown className='lg:mr-7 size-5' />
                </div>
                <div className='flex lg:flex-row mb-3 lg:mb-0'>
                    <li><NavLink className="lg:mr-2 ">Resources</NavLink></li>
                    <MdKeyboardArrowDown className='lg:mr-7 size-5' />
                </div>
                <li className='mb-2 lg:mb-0'><NavLink className="lg:mr-7 ">Enterprise</NavLink></li>
                <li className='mb-2 lg:mb-0'><NavLink className="lg:mr-16">Pricing</NavLink></li>
            </nav>
            <div className='flex place-items-center flex-col lg:flex-row text-base'>
                <div className='flex lg:flex-row gap-3 lg:gap-0 mb-3 lg:mb-0'>
                    <img src="https://i.ibb.co/94qSnn5/svg-1.png" alt="" className='size-6 lg:mr-2' />
                    <li><NavLink className="lg:mr-7">EN</NavLink></li>
                </div>
                <li className='mb-2 lg:mb-0'><NavLink className="lg:mr-7 ">Contact Sales</NavLink></li>
                <li className='mb-2 lg:mb-0'><NavLink className="lg:mr-10 ">Login</NavLink></li>
                <Button />
            </div>
        </>
    )

    return (
        <div className=' px-5 bg-[#F0F0F0] flex justify-between text-base inter-text overflow-y-hidden'>
            {/* Logo */}

            <NavLink className="flex font-medium items-center my-4 lg:my-0">
                <img src="https://i.ibb.co/7y8F1Gq/svg.png" alt="Miro" />
            </NavLink>
            {/* Desktop Navigation */}
            <ul className='hidden lg:flex'>

                <li

                    className='mx-auto flex p-5 flex-row items-center'
                >
                    {navLists}
                </li>

            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block mt-2 lg:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed lg:hidden left-0 top-0 w-[40%] h-full bg-gray-200  ease-in-out duration-500'
                        : 'ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}

                <NavLink className="flex font-medium items-center mx-4  my-4 lg:my-0">
                    <img src="https://i.ibb.co/7y8F1Gq/svg.png" alt="Miro" />
                </NavLink>
                {/* Mobile Navigation Items */}

                <li

                    className='mx-auto grid p-5 grid-cols-1 '
                >
                    {navLists}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;


