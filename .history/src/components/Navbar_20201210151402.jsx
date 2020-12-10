import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link>
                        Home
                    </Link>
                </li>
                <li>
                    <Link>
                        Crypto
                    </Link>
                </li>
                <li>
                    <Link>
                        Currencies
                    </Link>
                </li>
                <li>
                    <Link>
                        Indexes
                    </Link>
                </li>
                <li>
                    <Link>
                        Markets
                    </Link>
                </li>
            </ul>
        </div>
    )
}
