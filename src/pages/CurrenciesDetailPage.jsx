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
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Currency</h2>
                </div>
            </div>

            {!currencyItem &&
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="pt-5 text-center">
                        Loading Currency Details...
                        </h3>
                    </div>
                </div>
            }

            {currencyItem &&
                <>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="pt-5 text-center text-uppercase">
                            {currencyItem.name}
                            </h3>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
