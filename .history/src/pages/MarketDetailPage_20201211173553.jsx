import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {

    useEffect(() => {
        const marketName = props.match.params.marketname
        console.log(id);

    }, [])

    return (
        <div>
            <Link to={`/markets/${marketName}`}>
                {marketName}
            </Link>
        </div>
    )
}
