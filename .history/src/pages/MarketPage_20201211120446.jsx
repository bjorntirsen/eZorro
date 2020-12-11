import React, { useEffect , useState } from 'react'

export default function MarketPage() {

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setInfo(data)})
    }, [])

    return (
        <div>
            market
    {!info && <p>{info}</p> }
        </div>
    )
}