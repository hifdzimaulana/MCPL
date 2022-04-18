import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Header() {
    return (
        <header className="spacing-sm sticky-top">
            <div className="container">
                <Fade bottom>
                    <div className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                         <span>Pustel</span></a>
                        <div className="collapse-navbar-collapse ml-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#">Home 
                                     <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Special</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Featured</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Designer</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Fade>
            </div>
        </header>
    )
}