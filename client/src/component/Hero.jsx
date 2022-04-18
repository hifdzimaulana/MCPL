import React from 'react'
import HeroImg from '../assets/images/Logo Pustel1.png'
import Fade from 'react-reveal/Fade';

export default function Hero() {
    return (
        <section className="pt-4 hero">
            <div className="container">
                <div className="row align-item-center" style={{ width: "360" }}>
                    <Fade right delay={300}>
                        <div className="col-auto pr-5">
                            <h1 className="font-weight-bold my-5">
                                Choose Your Book.
                        </h1>
                            <p className="mb-5 text-hero font-weight-light text-gray w-75 mt-3">
                                Create your new knowledge <br />
                            with our best book <br />
                            it's time to leave the old style.
                        </p>
                            <button className="btn btn-shop btn-primary" >
                                Shop Now
                        </button>
                            <div className="row  icons-hero mt-100">
                                <div className="col-auto icons">
                                    <i className="far fa-paper-plane icon"></i>
                                    <h6 className="mt-3">
                                        Best Price <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Guaranteed
                                    </span>
                                    </h6>
                                </div>
                                <div className="col-auto icons">
                                    <i className="fas fa-tag"></i>
                                    <h6 className="mt-3">
                                        100% Secure <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Payment online
                                    </span>
                                    </h6>
                                </div>
                                <div className="col-auto icons">
                                    <i className="fas fa-undo-alt"></i>
                                    <h6 className="mt-3">
                                        Free Return <br />
                                        <span className="text-gray-500 font-weight-light">
                                            Within 30 days
                                    </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className="col-5 offset-md-1 pl-5 hero-img">
                        <Fade bottom delay={350}>
                            <div >
                                <img src={HeroImg} alt="my-hero" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}