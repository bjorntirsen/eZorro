import React from 'react'
import { Link } from 'react-router-dom'


export default function CurrencyItem({currency, countrycode, alt}) {

    return (
        <div className="col-md-3 col-sm-4">
            <div className="card shadow my-2 text-center">
                <div className="card-header">
                    <h4>{currency.name}</h4>
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <img
                        className="img-fluid mx-auto mb-2"
                        src={`https://flagcdn.com/w160/${countrycode}.png`}
                        srcSet={`https://flagcdn.com/w320/${countrycode}.png 2x`}
                        width="160"
                        alt={alt} />
                    </div>
                    <p>Price in SEK: {currency.price}</p>
                    <Link className="btn shadow btn-secondary btn-block" to={`/currencies/${currency.ticker}`}>More info</Link>
                </div>
            </div>
        </div>
    )
}
