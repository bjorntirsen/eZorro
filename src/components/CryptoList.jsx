import React from "react"

export default function CryptoList({ value }) {
  //   let newArray = Object.values(value)
  //   console.log(newArray[0].link)

  console.log(value.name)

  return (
    <div className="container">
      <p>{value.name}</p>
    </div>
  )
}
