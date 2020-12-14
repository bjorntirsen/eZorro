import React , { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    const marketName = props.match.params.marketname
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${marketName}.json`

    const [name , setName] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    (!name && <p>Loading</p>)
    (name && Object.entries(name).map(stock => {
        console.log(stock);
    }))
    return (
        <div>
            <Link to={`/markets/${marketName}`}>
                {marketName}
            </Link>
        </div>
    )
}
