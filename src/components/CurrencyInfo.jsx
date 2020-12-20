import React from 'react'

export default function CurrencyInfo() {
    return (
        <div className="container bg-light p-4 shadow my-4">
            <div className="row pb-3">
                <div className="col-md-12 text-center ">
                    <h2 className="font-weight-bold">Info</h2>
                </div>
            </div>
            <div className="row font-italic">
                <div className="col-md-6 text-center">
                    <p>Country facts taken from https://restcountries.eu/</p>
                    <p>Flags taken from https://flagpedia.net</p>
                    <p>Icons from https://fontawesome.com/</p>
                </div>
                <div className="col-md-6 text-center ">
                    <p>For the Euro we have used Germany's flag, since it is the most populous country with its estimated 83,2 million inhabitants.</p>
                    <p>The same was done for the Central African and West African CFA franc, using Cameroon and Ivory Coast's flag, respectively. (Estimated populations: 26,5 and 26,3 million.)</p>
                </div>
            </div>
        </div>
    )
}
