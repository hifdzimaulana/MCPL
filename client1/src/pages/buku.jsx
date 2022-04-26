import React, {Component} from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import $, { get } from 'jquery'

class Buku extends Component {
    constructor(props) {

        super(props)
        this.state = {
            buku: [],
            isModalOpen: false,
            token: "",
            nama: "",
            id: 0,
            judul: "",
            penulis: "",
            penerbit : "",
            stok: 0
        }
    }
    render() {
        return (
            <>
                <Navbar />
                <section>
                    <div className="bg-white py-2 sm:py-4 lg:py-8">
                        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                <div>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="max-w-7xl mx-auto">

                            <div className="flex flex-wrap -m-4 justify-center items-center md:justify-center md:items-center">
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Buku