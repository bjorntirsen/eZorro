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
        <div className="container">
            <div className="col text-center">
              <h1>Indexes</h1>

              <div className="row">
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">More info</th>
                    </tr>
                </thead>
                <tbody>                  
                    {!indexesList && <p> loading...</p>}

                    {indexesList && Object.entries(indexesList).map(item => {
                    const key = item[0]
                    const value = item[1]
                    return <IndexItem key = {key} index={value}/>
                    })}
                </tbody>    
               </table>  
              </div>
            </div>      
        </div>
    )
}
