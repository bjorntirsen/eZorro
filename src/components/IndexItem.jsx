import React from 'react'
import {Link} from 'react-router-dom'

export default function IndexItem({index}) {
    return (
        <div className="container">
          <th scope="row">
            <tr>
            <td><h4>{index.ticker}</h4></td>
            <td><Link className="btn shadow btn-primary " to={`/indexes/${index.ticker}`} >More info</Link></td>
            </tr>
          </th>    
        </div>
    )
}
