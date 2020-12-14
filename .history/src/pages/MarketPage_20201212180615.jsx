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

    function formatName(input) {
        let splitArr = input.split("-")
        let result = ""
        for (let i=0 ; i < splitArr.length ; i++) {
            splitArr[i] = splitArr[i].charAt(0).toUpperCase() + splitArr[i].substring(1);  
        }

        return splitArr
    }

    return (
        <div>
            <p>Market Page</p>

            {!marketList && <p>Loading</p>}
            {marketList && Object.entries(marketList).map(market => {
                const marketName = market[0]
                const marketDisplayName = formatName(marketName)
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