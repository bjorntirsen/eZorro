import React from 'react'
import {Link} from 'react-router-dom'

export default function IndexItem({index}) {
    return (
      <div className="row p-2 border">
        <div className="col">
          <h3>{index.ticker}</h3>           
        </div>
        <div className="col">
          <h3>{index.price}</h3>
        </div>
        <div className="col">
          <h3>{index.today}</h3>
        </div> 
        <div className="col">
          <Link className="btn btn-primary " to={`/indexes/${index.ticker}`} >More Details</Link>        
        </div>   
      </div>  
    )
}
