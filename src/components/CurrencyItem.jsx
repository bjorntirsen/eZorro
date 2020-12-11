import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrencyItem({currency}) {
    return (
        <div className="col-md-3 col-sm-4">
            <div className="card shadow my-2">
                <div className="card-header">
                    <h4>{currency.name}</h4>
                </div>
                <div className="card-body">
                    <p>Price in SEK: {currency.price}</p>
                    <Link className="btn shadow btn-secondary btn-block" to={`/currencies/${currency.ticker}`}>More info</Link>
                </div>
            </div>
        </div>
    )
}
