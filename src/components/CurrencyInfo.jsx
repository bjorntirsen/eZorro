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
                    <p>For Central African CFA franc we have used Cameroon's flag, since it is the most populous country with its estimated 26,5 million inhabitants.</p>
                    <p>The same was done for the West African CFA franc, using Ivory Coast's flag. (Estimated population: 26,3 million.)</p>
                </div>
            </div>
        </div>
    )
}
