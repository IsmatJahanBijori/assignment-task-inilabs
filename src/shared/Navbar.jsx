import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Container from '../components/Container';
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navLists = (
        <>
            <NavLink className="flex font-medium items-center  mb-4 md:mb-0">
                <img src="https://i.ibb.co/7y8F1Gq/svg.png" alt="Miro" />
            </NavLink>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                <NavLink className="mr-2 ">Product</NavLink>
                <MdKeyboardArrowDown className='mr-7 size-5' />
                <NavLink className="mr-2 ">Solutions</NavLink>
                <MdKeyboardArrowDown className='mr-7 size-5' />
                <NavLink className="mr-2 ">Resources</NavLink>
                <MdKeyboardArrowDown className='mr-7 size-5' />
                <NavLink className="mr-7 ">Enterprise</NavLink>
                <NavLink className="mr-16 ">Pricing</NavLink>
            </nav>
            <div className='flex place-items-center'>
                <img src="https://i.ibb.co/94qSnn5/svg-1.png" alt="" className='size-6 mr-2' />
                <NavLink className="mr-7">EN</NavLink>
                <NavLink className="mr-7 ">Contact Sales</NavLink>
                <NavLink className="mr-10 ">Login</NavLink>
                <button className="btn-primary flex place-items-center">Sign up free
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </>
    )
    return (
        // bg-[#F0F0F0]

        <>
            <header className="h-[90px] px-5 bg-[#F0F0F0] text-base inter-text overflow-y-hidden">
                <div className="mx-auto flex p-5 flex-row items-center">
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu}>
                            <GiHamburgerMenu className="text-2xl" />
                        </button>
                    </div>
                    {navLists}
                </div>
            </header>
            <hr />
        </>
    )
}

export default Navbar;
