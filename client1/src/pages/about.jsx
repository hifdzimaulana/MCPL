import React from 'react'

import { Footer, Navbar } from '../components'

function About() {

    return (
        <>
            <Navbar />
            <section>
                <div className="bg-white py-2 sm:py-4 lg:py-8">
                    <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <div>
                                <div className="h-64 md:h-auto bg-slate-100 overflow-hidden rounded-lg shadow-lg">
                                </div>
                            </div>

                            <div className="md:pt-8">
                                <h1 className="text-green-700 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Berawal dari Mimpi</h1>

                                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                    Bla... blaa... blah..
                                </p>

                                <h1 className="text-green-700 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Tentang Kami</h1>

                                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                    MCPL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col text-center w-full mb-20 text-gray-600 body-font">
                            <h1 className="text-green-700 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6 tracking-widest">Malang City Public Library</h1>
                            <p>bla bla bla....!</p>
                        </div>
                        <div className="flex flex-wrap -m-4 justify-center items-center md:justify-center md:items-center">
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About