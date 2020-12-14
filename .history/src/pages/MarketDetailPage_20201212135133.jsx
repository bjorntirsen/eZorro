import React , { useEffect , useState } from 'react'

import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    const [stockList , setstockList] = useState(null)
    const marketstockList = props.match.params.marketstockList
    const path = props.match.url;
    const marketName = props.match.params.marketName

    console.log(props);
    console.log(marketName);
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setstockList(data))
    }, [path])

    return (
        <div>
            <p>{marketstockList}</p>
            {!stockList && <p>Loading</p>}
            {stockList && (
                Object.entries(stockList).map(stock => {
                    const stockName = stock[0];

                    return (
                        <div key={stockName}>
                            <Link key={stockName} to={`${path}/${stockName}`}>
                                {stockName}
                            </Link>
                        </div>
                    )
                })
            )}
        </div>
        
    )
}
