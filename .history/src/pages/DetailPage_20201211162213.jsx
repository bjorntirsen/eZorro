import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailPage({name}) {

    return (
        <div>
            <Link to="">
                {name}
            </Link>
        </div>
    )
}
