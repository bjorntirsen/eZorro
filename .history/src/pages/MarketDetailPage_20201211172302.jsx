import React , { useEffect } from 'react'
// import { Link } from 'react-router-dom'

export default function MarketDetailPage({name}) {

    useEffect(() => {
        console.log("hej");
        
    }, [])

    return (
        <div>
            <p>{name}</p>
            {/* <Link to={`/markets/${name}`}>
                {name}
            </Link> */}
        </div>
    )
}
