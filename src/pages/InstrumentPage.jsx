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
    
    function nickName(ticker) {
        const split = ticker.split("-")
        return split[0]
    }

    return (

        <div>
            {!stock && <p>Loading</p>}
            {stock && console.log(stock)}
            {stock && 
                <>
                    <div className="container">
                        <div className="row m-4">
                            <div className="col-12 d-flex flex-row align-items-center
                                            justify-content-center">
                                <h3>{nickName(stock.ticker)}</h3>
                                <h4 className="ml-2 mr-2">|</h4>
                                <h4>{stock.name}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-4">
                                <div>
                                    <div className="row">
                                        <h4 className="mr-2">Price:</h4>
                                        <h4>{stock.price}</h4>
                                    </div>
                                    <div className="row">
                                        <h4 className="mr-2">Today:</h4>
                                        <h4>{stock.today}</h4>
                                        <ArrowIconStyled value={stock.today} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                                <div>
                                    
                                <h4>History</h4>
                                <div className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Since</th>
                                            <th scope="col">+/-%</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 week</td>
                                            <td>{stock.w1}</td>
                                            <td className="py-1">
                                                <ArrowIconStyled value={stock.w1} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 month</td>
                                            <td>{stock.mtd}</td>
                                            <td className="py-1">
                                                <ArrowIconStyled value={stock.mtd} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1 year</td>
                                            <td>{stock.ytd}</td>
                                            <td className="py-1">
                                                <ArrowIconStyled value={stock.ytd} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3 years</td>
                                            <td>{stock.y3}</td>
                                            <td className="py-1">
                                                <ArrowIconStyled value={stock.y3} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5 years</td>
                                            <td>{stock.y5}</td>
                                            <td className="py-1">
                                                <ArrowIconStyled value={stock.y5} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}