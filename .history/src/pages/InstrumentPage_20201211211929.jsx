import React from 'react'

export default function InstrumentPage(props) {
    const stock = props.match.url
    console.log(stock);
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${marketName}.json`

    useEffect(() => {
        fetch()
    }, [])
    
    return (
        <div>
            hej
        </div>
    )
}
