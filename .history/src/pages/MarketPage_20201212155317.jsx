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
        return capitalInitLetter(dashToSpace(input))

        function dashToSpace(input) {
            return input.replace(/-/g, " ").split(" ")
        }
        function capitalInitLetter(input) {
            // console.log(input);
            return input
            const splitArr = input.split(" ")
        }
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