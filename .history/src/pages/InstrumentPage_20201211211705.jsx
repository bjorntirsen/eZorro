import React from 'react'

export default function InstrumentPage(props) {
    const stock = props.match.params.instrument
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${marketName}.json`


    
    return (
        <div>
            hej
        </div>
    )
}
