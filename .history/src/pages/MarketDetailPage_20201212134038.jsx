import React , { useEffect , useState } from 'react'

import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    const [name , setName] = useState(null)
    const marketName = props.match.params.marketname
    const path = props.match.url;
    
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setName(data))
    }, [path])

    return (
        <div>
            <p>{marketName}</p>
            {!name && <p>Loading</p>}
            {name && (
                Object.entries(name).map(stock => {
                    const name = stock[0];
                    console.log(stock);

                    return (
                        <div key={name}>
                            <Link key={name} to={`${path}/${name}`}>
                                {name}
                            </Link>
                        </div>
                    )
                })
            )}
        </div>
        
    )
}
