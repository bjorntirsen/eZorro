import React, {useEffect, useState}from 'react'
import IndexItem from '../components/IndexItem'

export default function IndexesPage() {

    const [indexesList, setIndexesList] = useState(null)

    useEffect(() =>{
        const url = "https://market-data-collector.firebaseio.com/market-collector/indexes.json"
        fetch(url)
        .then(resp => resp.json())
        .then(data => setIndexesList(data.se))
    }, [])
    return (
        <div className="container text-center mb-4">
            <h1>Indexes</h1>
            <div className="row p-2 bg-light mb-3 border">
                <div class="col">
                    <h3>Index</h3>           
                </div>
                <div class="col">
                    <h3>Price</h3>
                </div>
                <div class="col">
                    <h3>Today</h3>    
                </div>
                <div class="col">
                    <h3>More Details</h3>    
                </div>    
            </div>     

            {!indexesList && <p> loading...</p>}
                {indexesList && Object.entries(indexesList).map(item => {
                const key = item[0]
                const value = item[1]
                return <IndexItem key = {key} index={value}/>
            })}    
        </div>
    )
}
