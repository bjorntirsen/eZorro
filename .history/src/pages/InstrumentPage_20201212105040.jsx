import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    
    const [stock , setStock] = useState(null)
    
    useEffect(() => {
        const { fetchAllCourses } = props.match.url;
        console.log(fetchAllCourses);
        const path = props.match.url
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
