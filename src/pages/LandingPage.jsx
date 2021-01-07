import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex align-items-center justify-content-center my-headline">
                        <h1 className="text-center font-weight-bold"><small className="text-muted align-self-start">Welcome to</small><br /><span className="display-4 my-headline__brand">eZorro!</span></h1>
                        <img className="img-fluid w-25 p-3" src="./images/zorro-w320.png" alt=""/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <audio
                            controls
                            src="/audio/intro.mp3">
                            Your browser does not support the <code>audio</code> element.
                        </audio>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card my-3">
                        <img className="img-fluid" src="./images/crypto-w538.jpg" alt=""/>
                        <div className="card-body">
                            <Link to="/crypto" className="btn btn-primary btn-block btn-lg">Crypto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="card">
                        <img className="img-fluid" src="./images/currencies-w538.jpg" alt=""/>
                        <div className="card-body">
                            <Link to="/currencies" className="btn btn-primary btn-block btn-lg">Currencies</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="card">
                        <img className="img-fluid" src="./images/indexes-w538.jpg" alt=""/>
                        <div className="card-body">
                            <Link to="/indexes" className="btn btn-primary btn-block btn-lg">Indexes</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="card">
                        <img className="img-fluid" src="./images/markets-w538.jpg" alt=""/>
                        <div className="card-body">
                            <Link to="/markets" className="btn btn-primary btn-block btn-lg">Markets</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
