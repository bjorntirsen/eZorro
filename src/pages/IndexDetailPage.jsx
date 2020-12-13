import React, { useEffect, useState } from 'react'

export default function IndexDetailPage(props) {

    const [indexItem, setIndexItem] = useState(null)

    useEffect(()=> {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`
        fetch(url)
        .then(resp => resp.json())
        .then(data => setIndexItem(data))
    },[])
    return (
        <div class="container">
          {!indexItem && <p>Loading</p>}
          {indexItem && (
              <>
              <h4>{indexItem.ticker}</h4>
              <h4>{indexItem.name}</h4>
              <p>test</p>
              </>
          )}
            
        </div>
    )
}
