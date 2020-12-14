import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {

    useEffect(() => {
        const id = props.match.params.marketname
        console.log(id);

    }, [])

    return (
        <div>
            <Link to={`/markets/${props.mat}`}>
                {name}
            </Link>
        </div>
    )
}
