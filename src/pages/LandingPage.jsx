import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex">
                        <h1 className="text-center font-weight-bold">Welcome to eZorro!</h1>
                        <img className="img-fluid" src="/images/zorro-w512.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img className="img-fluid" src="/images/money-w640.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Crypto Page</h5>
                            <Link to="#" className="btn btn-primary btn-block">Go to page</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="img-fluid" src="/images/money-w640.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Bla Page</h5>
                            <Link to="#" className="btn btn-primary btn-block">Go to page</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="img-fluid" src="/images/money-w640.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Bla Page</h5>
                            <Link to="#" className="btn btn-primary btn-block">Go to page</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img className="img-fluid" src="/images/money-w640.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Bla Page</h5>
                            <Link to="#" className="btn btn-primary btn-block">Go to page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
