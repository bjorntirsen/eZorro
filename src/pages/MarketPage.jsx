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
        for (let i in splitArr) {
            result += splitArr[i].charAt(0).toUpperCase()
            result += splitArr[i].substring(1)
            result += " "
        }

        return result
    }

    return (
        <div>
            <p>Market Page</p>

            {!marketList && <p>Loading</p>}
            {marketList && Object.entries(marketList).map(market => {
                const marketName = market[0]
                const marketDisplayName = formatName(marketName)

                return (
                    <div key={marketName}>
                        <Link key={market} to={`/markets/${marketName}`}>
                            {marketDisplayName}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}