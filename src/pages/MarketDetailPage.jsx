import React , { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    const [stockList , setstockList] = useState(null)
    const path = props.match.url;
    const marketDisplayName = formatName(props.match.params.marketname)
    
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setstockList(data))
    }, [path])
    
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
            <p>{marketDisplayName}</p>

            {!stockList && <p>Loading</p>}
            {stockList && 
                Object.entries(stockList).map(stock => {
                    const stockName = stock[1].name;
                    const ticker = stock[1].ticker;
                    
                    return (
                        <div key={ticker}>
                            <Link key={stockName} to={`${path}/${ticker}`}>
                                {stockName}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}