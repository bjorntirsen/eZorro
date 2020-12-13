import React, {useEffect, useState} from 'react'
import CurrencyInfo from '../components/CurrencyInfo'
import CurrencyItem from '../components/CurrencyItem'
import altAttributes from "../data/flagAltAttributes.json"

export default function CurrenciesPage() {
    const [currencyList, setCurrencyList] = useState(null)
    const [altList, setAltList] = useState(null)

    useEffect( () => {
        const url = "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"
        fetch(url)
        .then(res => res.json())
        .then(data => setCurrencyList(data))
        Object.entries(altAttributes).map(
            item => setAltList(item[1])
        )
    }, [] )

    function getCountryCode(key) {
        let tmp = key.substring(0, 2).toLowerCase()
        if (tmp === "xa") return "cm"
        else if (tmp === "xo") return "ci"
        else return tmp
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Currencies</h2>
                        <h3>This is the Currencies Page</h3>
                    </div>
                    <div className="row container">
                        {(!currencyList || !altList) &&
                            <div className="col-md-12">
                                <h4 className="pt-5 text-center">
                                Loading Currencies...
                                </h4>
                            </div>
                        }

                        {(currencyList && altList) && 
                            Object.entries(currencyList).map(
                                currencyItem => {
                                    const key = currencyItem[0]
                                    const currency = currencyItem[1]
                                    const countrycode = getCountryCode(key)
                                    const alt = altList[countrycode]
                                    return <CurrencyItem key={key} currency={currency}
                                    countrycode={countrycode}
                                    alt={`Flag of ${alt}`}
                                />}
                            )
                        }
                    </div>
                </div>
            </div>

            <CurrencyInfo />
        </>
    )
}
