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

    function something() {
        console.log("hej");
    }
    return (
        <div>
            <p>Market Page</p>

            {!marketList && <p>Loading</p>}
            {marketList && Object.entries(marketList).map(market => {
                const marketName = market[0]
                const marketDisplayNameArr = market[0].replace(/-/g, " ").split(" ")
                
                const marketDisplayName = marketDisplayNameArr.map(part => {
                    
                    // console.log(part);
                })
                // console.log(marketDisplayNameArr);
                

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