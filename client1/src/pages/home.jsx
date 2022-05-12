import React from 'react'

import { Footer, Navbar } from '../components'
import Gambar from '../images/baca buku.jpg'


class Home extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <div class="w-full h-25 bg-yellow-400 antialiased">
                    <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                        <div className="py-6 sm:py-8 lg:py-12">
                            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                                {/* Hero Section */}
                                <section className="flex flex-col-reverse lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                                    {/* <!-- content - start --> */}
                                    <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
                                        <img src={Gambar} alt="Logo" className="px-12 justify-items-center lg:items-end sm:text-right" />
                                        <h1 className="text-black text-3xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-12">
                                            Education
                                        </h1>

                                        <p className="lg:w-4/5 text-white xl:text-lg leading-relaxed mb-8 md:mb-12">
                                            The Malang City Public Library has been an essential provider of educational programs and resources. From English language classes and technology training to storytimes, we give Arek Malang the tools they need to succeed.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div >
                </div>
                <Footer />
            </>
        )

    }
}

export default Home