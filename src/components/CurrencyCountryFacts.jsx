import React, { useEffect, useState } from 'react'
import countryFacts from "../data/countryFacts.json"

export default function CurrencyCountryFacts({countrycode}) {
    const [country, setCountry] = useState(null)
    /* const [population, setPopulation] = useState(formattedPopulation(country.population))
    setPopulation() */

    useEffect( () => {
        setCountry(countryFacts.find(obj => obj.alpha2Code.toLowerCase() === (countrycode)))
    }, [] )

    function formattedNumber(number) {
        let roundedNumber = parseFloat(number).toPrecision(3)
        return Math.abs(Number(roundedNumber)) >= 1.0e+9
        ? Math.abs(Number(roundedNumber)) / 1.0e+9 + "B"
        : Math.abs(Number(roundedNumber)) >= 1.0e+6
        ? Math.abs(Number(roundedNumber)) / 1.0e+6 + "M"
        : Math.abs(Number(roundedNumber)) >= 1.0e+3
        ? Math.abs(Number(roundedNumber)) / 1.0e+3 + "K"
        : Math.abs(Number(roundedNumber));
    }

    return (
        <>
            <div className="text-center card bg-info m-3">
                <div className="card-header">
                    <h3 className="text-uppercase font-weight-bold">Quick country facts:</h3>
                </div>
                {!country &&
                    <div className="card-body">
                        <h3>Loading...</h3>
                    </div>
                }
                {country &&
                    <div className="card-body">
                        <h3 className="font-weight-bold">{country.name}</h3>
                        <h4 className="font-italic">Region: {country.region}</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Subregion: {country.subregion}</p>
                                <p>Capital: {country.capital} </p>
                                <p>Population: {formattedNumber(country.population)}</p>
                            </div>
                            <div className="col-md-6">
                                <p>Size: {formattedNumber(country.area)} km&sup2;</p>
                                <p>Native name: {country.nativeName}</p>
                                <p>Currency symbol: {country.currencies[0].symbol} </p>
                            </div>
                        </div>
                        
                        
                    </div>
                }
            </div>
            
        </>
    )
}
