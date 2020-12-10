import React from 'react'

export default function CurrencyItem({currency}) {
    return (
        <div className="col-md-3">
            <h4>{currency.name}</h4>
        </div>
    )
}
