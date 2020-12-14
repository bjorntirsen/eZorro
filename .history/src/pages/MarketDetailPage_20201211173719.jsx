import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    const marketName = props.match.params.marketname
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${marketName}.json`

    console.log(url);

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <Link to={`/markets/${marketName}`}>
                {marketName}
            </Link>
        </div>
    )
}
