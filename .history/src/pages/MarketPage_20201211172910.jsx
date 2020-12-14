import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function MarketPage() {

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setInfo(data)})
    }, [])

    return (
        <div>
            Market Page

            {!info && <p>loading</p>}

            {info && Object.entries(info).map(market => {
                const name = market[0]

                return (
                    <div key={name}>
                        <Link key={name} to={`/markets/${name}`}>{name}</Link>
                    </div>
                )
            })}
        </div>
    )
}