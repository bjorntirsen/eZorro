import React from 'react'

export default function CurrencyCountryFacts({country}) {

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
                                <p>Top level web domain: {country.topLevelDomain[0]} </p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
