import React, { useEffect , useState } from 'react'

export default function MarketPage() {

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setInfo(data)})
    }, [])

    let test = {
        hej: {
            1: "yo",
            2: "whatup",
            3: {
                h: "what?"
            }
        }
    }
    // console.log(Object.keys(test));
    // console.log(Object.entries(test));

    return (
        <div>
            market
            {info && Object.entries(info).map((value, index) => {
                return <p> {index}</p>
            })}
        </div>
    )
}