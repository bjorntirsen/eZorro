import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/crypto">
                        Crypto
                    </Link>
                </li>
                <li>
                    <Link to="/currencies">
                        Currencies
                    </Link>
                </li>
                <li>
                    <Link to="/indexes">
                        Indexes
                    </Link>
                </li>
                <li>
                    <Link to="/markets">
                        Marketsh
                    </Link>
                </li>
            </ul>
        </div>
    )
}
