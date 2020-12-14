import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    const [stock , setStock] = useState(null)
    const path = ""
    const stockName = props.match.params.instrument
    
    useEffect(() => {
        path = props.match.url
        
    }, [path])

    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setStock(data))
    }, [path])
    
    return (

        <div>
            <p>{stockName}</p>

            {!stock && <p>Loading</p>}
            {stock && console.log(stock)}
        </div>
    )
}
