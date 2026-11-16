import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="header w-full h-full flex justify-between flex-col items-center shadow-md">
                <div className="upper-header w-full px-3 sm:px-8 bg-[#F7CF21] flex flex-col sm:flex-row justify-between items-center gap-y-1 py-2">
                    <div className="icons flex gap-4 text-lg sm:text-xl">
                        <a href="#">
                            <i className="ri-tiktok-fill"></i>
                        </a>
                        <a href="#">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-twitter-x-fill"></i>
                        </a>
                    </div>
                    <div className="contact flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                        <a href="#">
                            <p><i className="ri-mail-fill"></i> help@alldesert.com</p>
                        </a>
                        <a href="#">
                            <p><i className="ri-phone-fill"></i> +1 234 456 678</p>
                        </a>
                    </div>
                </div>

                <div className="lower-header w-full flex flex-wrap justify-between px-4 md:px-7 items-center">
                    <div className="logo bg-white rounded-full p-2 relative top-0 lg:top-[25px] flex items-center">
                        <img src={logo} className="w-20 lg:w-[100px] h-auto object-contain" alt="All Desert Logo" />
                    </div>
                    <button type="button" className="lg:hidden p-2 text-2xl text-gray-800" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                    </button>
                    <nav
                        id="header-navigation"
                        className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto py-3 lg:py-0`}
                    >
                        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4">
                            <li><Link to='/' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Home</Link></li>
                            <li><Link to='/appliance-repairs' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Appliance Repairs</Link></li>
                            <li><Link to='/appliance-parts' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Appliance Parts</Link></li>
                            <li><Link to='/used-appliances' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Used Appliances</Link></li>
                            <li><Link to='/current-inventory' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Current Inventory</Link></li>
                            <li><Link to='/financing' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Financing</Link></li>
                            <li><Link to='/contact-us' onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-800 hover:text-yellow-600">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header