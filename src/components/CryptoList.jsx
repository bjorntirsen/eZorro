import React from "react"
import { Link } from "react-router-dom"

export default function CryptoList({ value, id }) {
  //console.log(id) Inehåller alla namn på valutorna
  // console.log(value) Innehåller arryen med alla värden

  let defaultImage = () => {
    let onError = "/icons/bitcoin.png"
    return onError
  }

  return (
    <div className=" mainDiv container col-sm-6 col-lg-4">
      <Link to={`/CryptoDetailPage/${id}`}>
        <div className="shadow p-3 mb-5 bg-white rounded mr-3 text-center">
          <div className="p-1 mb-2 bg-primary text-white">
            <h3>{value.name}</h3>
          </div>
          <img
            className="pt-4 pb-4"
            src={`/icons/${value.name}.png`}
            alt={defaultImage}
          />
          <p>Price: {value.price}</p>
        </div>
      </Link>
    </div>
  )
}
