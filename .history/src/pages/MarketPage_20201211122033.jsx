import React, { useEffect , useState } from 'react'

export default function MarketPage() {

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setInfo(data)})
    }, [])

    let test = {
        hej: {
            1: "yo",
            2: "whatup"
        }
    }
    console.log(Object.keys(test));

    return (
        <div>
            market
            {info && <p>{Object.entries(test)}</p>}
        </div>
    )
}