import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    const path = props.match.url
    const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`

    const [stock , setStock] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    
    return (

        <div>
            hej
        </div>
    )
}
