import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    const [stock , setStock] = useState(null)
    const path = props.match.url
    const stockName = props.match.params.instrument

    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setStock(data))
    }, [])
    
    return (

        <div>
            <p>{stockName}</p>

            {!stock && <p>Loading</p>}
            {stock && console.log(stock)}
        </div>
    )
}
