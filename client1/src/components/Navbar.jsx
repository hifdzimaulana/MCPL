import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../images/Logo.jpeg'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const activeClass = 'text-gray-500 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out'
    const inactiveClass = 'text-gray-500 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out'
    const inactiveClassMenu = 'text-gray-700 hover:bg-gray-100 hover:bg-gray-800 transition duration-300 ease-in-out'

    const activeClasses = (path) => {
        return window.location.pathname === path ? activeClass : inactiveClass
    }

    const activeClassMob = (path) => {
        return window.location.pathname === path ? activeClass : inactiveClassMenu
    }

    const links = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/catalogue', name: 'Catalogue' },
        { path: '/shop', name: 'Shop' },
        { path: '/login', name: 'Login' },


    ]

    return (
        <nav>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-10'>
                    <div className='flex items-center'>
                        {/* Profile dropdown */}
                        <NavLink to='/'>
                            <div className='ml-3 relative'>
                                <div className='flex items-center'>
                                    <span className='sr-only'>Open user menu</span>
                                    <img src={Logo} alt="Logo" className="w-30 h-20" />
                                    <h3 className='ml-2 font-bold md:text-xl text-lg'>Malang Public Library</h3>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    {links.map((link, index) => (
                                        <NavLink key={index} className={`px-3 py-2 rounded-md text-sm font-medium ${activeClasses(link.path)}`} to={link.path}>{link.name}</NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 focus:text-white'
                        >
                            {/* Menu open: 'hidden', Menu closed: 'block' */}
                            <svg
                                className='block h-6 w-6'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                            {/* Menu open: 'block', Menu closed: 'hidden' */}
                            <svg
                                className='hidden h-6 w-6'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                        {showMenu && (
                            <div className='origin-top-right absolute right-5 mt-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'>
                                <div className='py-1 rounded-md bg-white shadow-xs' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                                    {links.map((link, index) => (
                                        <NavLink key={index} className={`block px-4 py-2 text-sm font-medium ${activeClassMob(link.path)}`} to={link.path}>{link.name}</NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}