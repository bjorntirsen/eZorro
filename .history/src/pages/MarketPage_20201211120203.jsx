import React, { useEffect , useState } from 'react'

export default function MarketPage() {

    const [data, setData] = useState(null)
    
    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setData = data})
    }, [])

    return (
        <div>
            market
            {data}
        </div>
    )
}