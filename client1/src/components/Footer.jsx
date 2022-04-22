import React from 'react'
import Logo from '../images/FooterLogo.png'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div>
            <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
                <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
                        <div className="col-span-full lg:col-span-2">
                            {/* <!-- logo - start --> */}
                            <div className="lg:-mt-2 mb-4">
                                <a href="/" className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2" aria-label="logo">

                                    MCPL
                                </a>
                            </div>
                            {/* <!-- logo - end --> */}

                            <img src={Logo} alt='' className='' />

                            {/* <!-- social - start --> */}
                            <div className="flex gap-4">
                                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                </a>

                                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                </a>
                            </div>
                            {/* <!-- social - end --> */}
                        </div>

                        {/* <!-- nav - start --> */}
                        <div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Overview</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Pricing</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
                                </div>
                            </nav>
                        </div>
                        {/* <!-- nav - end --> */}

                        {/* <!-- nav - start --> */}
                        <div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Documentation</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">FAQ</a>
                                </div>
                            </nav>
                        </div>
                        {/* <!-- nav - end --> */}

                        {/* <!-- nav - start --> */}
                        <div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</a>
                                </div>
                            </nav>
                        </div>
                        {/* <!-- nav - end --> */}
                    </div>

                    <div className="text-gray-400 text-sm text-center border-t py-8">© {year} - Present MCPL. All rights reserved.</div>
                </footer>
            </div>
        </div>
    )
}
