import React from 'react'

export default function InstrumentPage(props) {
    const stock = props.match.params.instrument

    useEffect(() => {
        fetch()
    }, [])
    
    return (
        <div>
            hej
        </div>
    )
}
