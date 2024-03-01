import React from 'react'
import { NavLink } from 'react-router-dom'
// <a href="https://ibb.co/2MjHqq4"><img src="https://i.ibb.co/94qSnn5/svg-1.png" alt="svg-1" border="0"></a>
// <a href="https://ibb.co/x7V8fGX"><img src="https://i.ibb.co/DR3g8kz/div-after.png" alt="div-after" border="0"></a>
const Navbar = () => {
    return (
        <>
            <header className="">
                <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <NavLink className="flex font-medium items-center  mb-4 md:mb-0">
                        <img src="https://i.ibb.co/7y8F1Gq/svg.png" alt="Miro" />
                    </NavLink>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <NavLink className="mr-2 ">Product</NavLink>
                        <img src="https://i.ibb.co/DR3g8kz/div-after.png" alt="" className='mr-7' />
                        <NavLink className="mr-2 ">Solutions</NavLink>
                        <img src="https://i.ibb.co/DR3g8kz/div-after.png" alt="" className='mr-7' />
                        <NavLink className="mr-2 ">Resources</NavLink>
                        <img src="https://i.ibb.co/DR3g8kz/div-after.png" alt="" className='mr-7' />
                        <NavLink className="mr-7 ">Enterprise</NavLink>
                        <NavLink className="mr-7 ">Pricing</NavLink>
                    </nav>
                    <img src="https://i.ibb.co/94qSnn5/svg-1.png" alt="" className='mr-2' />
                    <NavLink className="mr-7">EN</NavLink>
                    <NavLink className="mr-7 ">Contact Sales</NavLink>
                    <NavLink className="mr-7">Login</NavLink>
                    <button className="btn-primary flex place-items-center">Sign up free
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
            <hr />
        </>
    )
}

export default Navbar