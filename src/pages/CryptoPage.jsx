import React, { useState, useEffect } from "react"
import CryptoList from "../components/CryptoList"

export default function CryptoPage() {
  const [cryptoList, setCryptoList] = useState(null)

  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/crypto.json"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCryptoList(data.usd))
  }, [])

  return (
    <div className="container">
      <h2>Crypto list</h2>
      {!cryptoList && <p>Loading data</p>}
      {cryptoList && console.log(Object.entries(cryptoList))}
      <div className="row">
        {cryptoList &&
          Object.entries(cryptoList).map((item) => {
            const id = item[0]
            const value = item[1]
            return <CryptoList key={id} value={value} />
          })}
      </div>
    </div>
  )
}
