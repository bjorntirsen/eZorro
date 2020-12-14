import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function CryptoDetailPage(props) {
  const [cryptoDetail, setCryptoDetail] = useState(null)

  useEffect(() => {
    const id = props.match.params.id
    const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCryptoDetail(data))
  }, [])

  return (
    <div className="container">
      {!cryptoDetail && <p>Loading Data</p>}
      {cryptoDetail && (
        <>
          <div className=" shadow p-3 mb-5 bg-white rounded mr-3 text-center">
            <div className="row pt-5"></div>
            <h1 className="pb-3">{cryptoDetail.name}</h1>
            <p>Mrket: {cryptoDetail.market}</p>
            <p>Price: {cryptoDetail.price}</p>
            <p>Today: {cryptoDetail.today}</p>
            <Link to="/crypto">
              <button className="btn btn-primary mt-3">Go back</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
