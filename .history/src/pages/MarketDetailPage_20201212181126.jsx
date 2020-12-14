import React , { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    const [stockList , setstockList] = useState(null)
    console.log(props);
    const path = props.match.url;
    const marketName = props.match.params.marketname
    
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setstockList(data))
    }, [path])
    
    return (
        <div>
            <p>{marketName}</p>

            {!stockList && <p>Loading</p>}
            {stockList && (
                Object.entries(stockList).map(stock => {
                    const stockName = stock[1].name;

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