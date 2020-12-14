import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function MarketPage() {
    const [marketList, setMarketList] = useState(null)
    
    useEffect(() => {
        const url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setMarketList(data)})
    }, [])

    return (
        <div>
            <p>Market Page</p>

            {!marketList && <p>Loading</p>}
            {marketList && Object.entries(marketList).map(market => {
                const marketName = market[0]
                const marketDisplayName = market[0].replace(/-/g, " ").split(" ")
                // console.log(marketDisplayName);
                
                for (let part of marketDisplayName) {
                    
                    part = "hej"
                }
                console.log(marketDisplayName);
                

                return (
                    <div key={marketName}>
                        <Link key={market} to={`/markets/${marketName}`}>
                            yo
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}