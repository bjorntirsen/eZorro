import React from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage({name}) {

    return (
        <div>
            <Link to={`/markets/${name}`}>
                {name}
            </Link>
        </div>
    )
}
