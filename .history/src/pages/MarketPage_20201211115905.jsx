import React, { useEffect } from 'react'

export default function MarketPage() {

    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {console.log(data);})
    }, [])

    return (
        <div>
            market
        </div>
    )
}