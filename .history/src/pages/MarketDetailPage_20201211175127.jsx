import React , { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {
    
    const [name , setName] = useState(null)
    
    useEffect(() => {
        const marketName = props.match.params.marketname
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${marketName}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setName(data))
    }, [])

    return (
        (!name && <p>Loading</p>)
        (name && console.log(Object.entries(data)))
    )
}
