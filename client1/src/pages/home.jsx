import React from 'react'

import { Footer, Navbar } from '../components'

function Home() {
    return (
        <>
            <Navbar />
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    {/* Hero Section */}
                    <section className="flex flex-col-reverse lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                        {/* <!-- content - start --> */}
                        <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
                            <h1 className="text-green-700 text-3xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-12">
                                Revolutionary way to build the web
                            </h1>

                            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
                                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.
                            </p>
                        </div>
                    </section>
                </div>
            </div >
            <Footer />
        </>





    )

}

export default Home