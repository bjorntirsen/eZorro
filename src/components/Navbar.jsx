import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/js/src/collapse.js';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link 
                className="navbar-brand my-headline__brand"
                to="/">
                eZorro!
            </Link>
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link 
                        className="nav-item nav-link active"
                        to="/">
                        Home
                    </Link>
                    <Link 
                        className="nav-item nav-link active"
                        to="/crypto">
                        Crypto
                    </Link>
                    <Link 
                        className="nav-item nav-link active"
                        to="/currencies">
                        Currencies
                    </Link>
                    <Link
                        className="nav-item nav-link active"
                        to="/indexes">
                        Indexes
                    </Link>
                    <Link
                        className="nav-item nav-link active"
                        to="/markets">
                        Markets
                    </Link>
                </div>
            </div>
        </nav>
    )
}
