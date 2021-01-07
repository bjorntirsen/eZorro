import React, { useEffect, useState } from 'react'

export default function IndexDetailPage(props) {

    const [indexItem, setIndexItem] = useState(null)
    const id = props.match.params.id

    useEffect(()=> {   
        const url = `https://stock-market-dummy-api-default-rtdb.europe-west1.firebasedatabase.app/market-collector/indexes/se/${id}.json`
        fetch(url)
        .then(resp => resp.json())
        .then(data => setIndexItem(data))
    }, [id] )
    return (
        <div className="container text-center shadow border mt-5">
          {!indexItem && <p>Loading</p>}
          {indexItem && (
              <>
                <h1>{indexItem.ticker}</h1>
                <div className="row border mx-2 mb-2 p-2">
                    <div className="col">
                        <h4><strong>Market: </strong> {indexItem.market}</h4>
                        <h4><strong>Mtd: </strong> {indexItem.mtd}</h4>
                        <h4><strong>omni_ticker: </strong> {indexItem.omni_ticker}</h4>
                        <h4><strong>price: </strong> {indexItem.price}</h4>
                        <h4><strong>source: </strong> {indexItem.source}</h4>
                    </div>
                    <div className="col">
                        <h4><strong>Today: </strong> {indexItem.today}</h4>
                        <h4><strong>W1: </strong> {indexItem.w1}</h4>
                        <h4><strong>Y3: </strong> {indexItem.y3}</h4>
                        <h4><strong>Y5: </strong> {indexItem.y5}</h4>
                        <h4><strong>Ytd: </strong> {indexItem.ytd}</h4>
                    </div>
                </div>
            </>
          )}           
        </div>
    )
}
