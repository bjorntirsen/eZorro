import React , { useEffect , useState } from 'react'
import ArrowIconStyled from '../components/ArrowIconStyled'

export default function InstrumentPage(props) {
    const [stock , setStock] = useState(null)
    const path = props.match.url

    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setStock(data))
    }, [path])
    
    return (

        <div>
            {!stock && <p>Loading</p>}
            {stock && console.log(stock)}
            
            {stock && 
                <>
                    <div>
                        <h2>{stock.name}</h2>
                        <p>{stock.source}</p>
                    </div>
                    <div>
                        <span>Price: $</span>
                        <span>{stock.price}</span>
                    </div>
                    <div>
                        <span>Today: </span>
                        <span>{stock.today}</span>
                        <ArrowIconStyled value={stock.today} />
                    </div>
                    <div>
                        <h1>History</h1>
                        <div>
                            <span>1 week: </span>
                            <span>{stock.w1}</span>
                            <ArrowIconStyled value={stock.w1} />
                        </div>
                        <div>
                            <span>1 month: </span>
                            <span>{stock.mtd}</span>
                            <ArrowIconStyled value={stock.mtd} />
                        </div>
                        <div>
                            <span>3 years: </span>
                            <span>{stock.y3}</span>
                            <ArrowIconStyled value={stock.y3} />
                        </div>
                        <div>
                            <span>5 years: </span>
                            <span>{stock.y5}</span>
                            <ArrowIconStyled value={stock.y5} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}