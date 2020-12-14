import React, { useEffect , useState } from 'react'
import DetailPage from './DetailPage'

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
                const key = market[0]
                const value = market[1]
                console.log(value.name);
                return <DetailPage key={key} name={value.name} />
            })}
        </div>
    )
}