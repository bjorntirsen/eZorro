import React, {useEffect, useState} from 'react'
import CurrencyItem from '../components/CurrencyItem'

export default function CurrenciesPage() {
    const [currencyList, setCurrencyList] = useState(null)

    useEffect( () => {
        const url = "https://market-data-collector.firebaseio.com/market-collector/currencies.json"
        fetch(url)
        .then(res => res.json())
        .then(data => setCurrencyList(data.sek))
    }, [] )

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Currencies</h2>
                    <h3>This is the Currencies Page</h3>
                </div>
                <div className="row container">
                    {!currencyList && <p>Loading Currencies...</p>}

                    {currencyList && Object.entries(currencyList).map(currencyItem => {
                        const key = currencyItem[0]
                        const value = currencyItem[1]
                        {console.log(value)}
                        return <CurrencyItem key={key} currency={value} />
                    })}
                </div>
            </div>
            
        </div>
    )
}
