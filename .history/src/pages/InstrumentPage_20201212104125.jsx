import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    
    const [stock , setStock] = useState(null)
    const path = props.match.url
    
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setStock)
    }, [])
    
    return (

        <div>
            hej
        </div>
    )
}
