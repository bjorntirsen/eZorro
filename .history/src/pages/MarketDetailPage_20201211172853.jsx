import React , { useEffect } from 'react'
// import { Link } from 'react-router-dom'

export default function MarketDetailPage(props) {

    useEffect(() => {
        console.log(props);
        
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
