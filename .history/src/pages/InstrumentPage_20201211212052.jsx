import React , { useEffect } from 'react'

export default function InstrumentPage(props) {
    const stock = props.match.url
    const url = `https://market-data-collector.firebaseio.com/market-collector/${stock}.json`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    
    return (
        <div>
            hej
        </div>
    )
}
