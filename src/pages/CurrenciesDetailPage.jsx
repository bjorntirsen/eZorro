import React, { useEffect, useState } from 'react'
import ArrowIconStyled from '../components/ArrowIconStyled'
import CurrencyInfo from '../components/CurrencyInfo'
import altAttributes from "../data/flagAltAttributes.json"

export default function CurrenciesDetailPage(props) {
    const [currencyItem, setCurrencyItem] = useState(null)
    const [countrycode, setCountrycode] = useState(null)
    const [altList, setAltList] = useState(null)
    function getCountryCode(key) {
        let tmp = key.substring(0, 2).toLowerCase()
        if (tmp === "xa") return "cm"
        else if (tmp === "xo") return "ci"
        else return tmp
    }


    useEffect( () => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCurrencyItem(data)
            setCountrycode(getCountryCode(data.ticker))
        })
        Object.entries(altAttributes).map(
            item => setAltList(item[1])
        )
    }, [] )

    return (
        <>
            <div className="container bg-light p-4 shadow">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="text-uppercase font-weight-bold">Currency</h1>
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
                                <h2 className="p-3 text-center text-uppercase bg-primary text-light shadow-sm serif">
                                {currencyItem.name}
                                </h2>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <img
                            className="img-fluid mx-auto mb-2"
                            src={`https://flagcdn.com/w320/${countrycode}.png`}
                            srcSet={`https://flagcdn.com/w640/${countrycode}.png 2x`}
                            width="320"
                            alt={`Flag of ${altList[countrycode]}`} />
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
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <h5>Today: {currencyItem.today}</h5>
                                <ArrowIconStyled value={currencyItem.today} />
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <h5>This week: {currencyItem.w1}</h5>
                                <ArrowIconStyled value={currencyItem.w1} />
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <h5>Month to Date: {currencyItem.mtd}</h5>
                                <ArrowIconStyled value={currencyItem.mtd} />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <h5>Year to Date: {currencyItem.ytd}</h5>
                                <ArrowIconStyled value={currencyItem.ytd} />
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <h5>Last three years: {currencyItem.y3}</h5>
                                <ArrowIconStyled value={currencyItem.y3} />
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <h5>Last five years: {currencyItem.y5}</h5>
                                <ArrowIconStyled value={currencyItem.y5} />
                            </div>
                        </div>
                    </>
                }
            </div>

            <CurrencyInfo />
        </>
    )
}
