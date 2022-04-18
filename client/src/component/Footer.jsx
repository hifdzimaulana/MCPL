import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <span className="brand">Pustel</span>
                        <p className="brand-tagline font weight-light">
                            Buku jendela dunia
                        </p>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Our careers
                            </li>
                            <li className="list-group-item">
                                Privacy
                            </li>
                            <li className="list-group-item">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Connnect us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                pustel@gmail.com
                            </li>
                            <li className="list-group-item">
                                082335117847
                            </li>
                            <li className="list-group-item">
                                <span>
                                    Sawojajar, Malang
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2022 • All rights reserved •
                    </div>
                </div>
            </div>
        </footer>
    )
}