import React , { useEffect , useState } from 'react'

export default function InstrumentPage(props) {
    
    const [stock , setStock] = useState(null)
    const { fetchAllCourses } = props.match.url;
    
    useEffect(() => {
        console.log(props.match.url);
        console.log(props);
        const path = fetchAllCourses
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setStock)
    }, [fetchAllCourses])
    
    return (

        <div>
            hej
        </div>
    )
}
