import React, { useEffect, useState } from 'react'

export default function CurrenciesDetailPage(props) {
    const [currencyItem, setCurrencyItem] = useState(null)

    useEffect( () => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setCurrencyItem(data))
    }, [])

    return (
        <div className="container bg-light p-4 shadow">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Currency:</h1>
                </div>
            </div>

            {!currencyItem &&
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="pt-5 text-center">
                        Loading Currency Details...
                        </h2>
                    </div>
                </div>
            }

            {currencyItem &&
                <>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="p-3 text-center text-uppercase bg-primary text-light shadow-sm">
                            {currencyItem.name}
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3>Current exchange rate</h3>
                            <h4>Price in SEK: <span className="badge bg-primary text-light">{currencyItem.price}</span></h4>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h3>Changes in relative value</h3>
                        </div>
                        <div className="col-md-4">
                            <h5>Today: {currencyItem.today}</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>This week: {currencyItem.w1}</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Month to Date: {currencyItem.mtd}</h5>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h5>Year to Date: {currencyItem.ytd}</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Last three years: {currencyItem.y3}</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Last five years: {currencyItem.y5}</h5>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
