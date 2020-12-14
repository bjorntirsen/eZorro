import React , { useEffect , useState } from 'react'

import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    
    const [name , setName] = useState(null)
    
    const marketName = props.match.params.marketname
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${marketName}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setName(data))
    }, [])

    return (
        <div>
            <p>{marketName}</p>
            {!name && <p>Loading</p>}
            {name && (
                Object.entries(name).map(stock => {
                    const name = stock[0];
                    console.log(name);
                    <div>
                        <Link to={`/markets/${name}`}>
                            {name}
                        </Link>
                    </div>
                })
            )}
        </div>
        
    )
}
