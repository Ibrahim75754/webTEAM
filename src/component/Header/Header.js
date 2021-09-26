import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg py-5">
                <div className="container">
                    <a className="navbar-brand  fs-3 fw-bold" href="#"><span className="">WEB</span> <span className="icon-color2">TEAM</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 fs-5 mb-lg-0">
                            <li>Total Budget $50000</li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn icon-color1 text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;