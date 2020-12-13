import React from "react"
import { Link } from "react-router-dom"

export default function CryptoList({ value, id }) {
  //console.log(id) Inehåller alla namn på valutorna
  // console.log(value) Innehåller arryen med alla värden

  return (
    <div className="col-md-4  shadow p-3 mb-5 bg-white rounded mr-3 ">
      <Link className="link" to={`/CryptoDetailPage/${id}`}>
        <div class="p-1 mb-2 bg-primary text-white">
          <h3>{value.name}</h3>
        </div>
      </Link>
        <p>Price: {value.price}</p>
    </div>
  )
}
