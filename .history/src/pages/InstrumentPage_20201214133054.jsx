import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    const [stock , setStock] = useState(null)
    const path = props.match.url

    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setStock(data))
    }, [path])
    
    return (

        <div>

            
            {!stock && <p>Loading</p>}
            {stock && console.log(stock)}
            
            {stock && 
                <>
                    <h2>{stock.name}</h2>
            <p>{stock.source}</p>
                    <div>
                        <span>Price: $</span>
                        <span>{stock.price}</span>
                    </div>
                    <div>
                        <span>T</span>
                        <span>{}</span>
                    </div>
                </>
            }
        </div>
    )
}
/*
mtd - Month-to-date
ytd - year-to-date

*/