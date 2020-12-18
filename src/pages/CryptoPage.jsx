import React, { useState, useEffect } from "react"
import CryptoList from "../components/CryptoList"

export default function CryptoPage() {
  const [cryptoList, setCryptoList] = useState(null)

  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/crypto/.json"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCryptoList(data.usd))
  }, [])

  return (
    <div className="container">
      <h2 className="text-center mb-5">Crypto currencies</h2>
      {!cryptoList && <p className="text-center">Loading data</p>}
      <div className="row ">
        {cryptoList &&
          Object.entries(cryptoList).map((item, index) => {
            const key = index
            const id = item[0]
            const value = item[1]
            return <CryptoList id={id} value={value} key={key} />
          })}
      </div>
    </div>
  )
}
