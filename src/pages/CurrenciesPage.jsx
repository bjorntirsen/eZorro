import React, {useEffect, useState} from 'react'
import CurrencyInfo from '../components/CurrencyInfo'
import CurrencyItem from '../components/CurrencyItem'

export default function CurrenciesPage() {
    const [currencyList, setCurrencyList] = useState(null)
    const [countryFacts, setCountryFacts] = useState(null)
    const [altList, setAltList] = useState(null)
    const url1 = "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"
    const url2 = "https://restcountries-v1.p.rapidapi.com/all"

    function getCountryCode(key) {
        let tmp = key.substring(0, 2).toLowerCase()
        if (tmp === "xa") return "cm"
        else if (tmp === "xo") return "ci"
        else if (tmp === "eu") return "de"
        else return tmp
    }

    useEffect( () => {
        fetch(url1)
        .then(res => res.json())
        .then(data => setCurrencyList(data))
        fetch(url2, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d37c786bd7msh581d0c8d9d07666p15b31bjsn355ddcb325d8",
                "x-rapidapi-host": "restcountries-v1.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json()
        
        })
        .then(data => {
            setCountryFacts(data)
        })
        .catch(err => {
            console.error(err);
        })
    }, [url1] )

    useEffect( () => {
        if (countryFacts) {
            const obj = {}
            countryFacts.forEach(item => {
                return obj[item.alpha2Code] = item.name})
            setAltList(obj)
        }
    }, [countryFacts])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-uppercase font-weight-bold pt-3">Currencies</h2>
                        <h3 className="font-monospace">Click on a currency for details</h3>
                    </div>
                    <div className="row container">
                        {(!currencyList || !countryFacts || !altList) &&
                            <div className="col-md-12">
                                <h4 className="pt-5 text-center">
                                Loading Currencies...
                                </h4>
                            </div>
                        }

                        {(currencyList && countryFacts && altList) && 
                            Object.entries(currencyList).map(
                                currencyItem => {
                                    const key = currencyItem[0]
                                    const currency = currencyItem[1]
                                    const countrycode = getCountryCode(key)
                                    const alt = altList[countrycode.toUpperCase()]
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
