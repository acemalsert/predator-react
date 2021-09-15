import React from 'react'

function Dashboard() {
    return (
        <div className="container">
            <div className = "row">
                <div className="col-12 col-md-6 mt-2 mb-2">
                    <div className="card">
                        <img src="/assets/apexlegendsCard.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Apex Legends</h5>
                            <p className="card-text">Apex Legends ile ilgili haberler için tıklayın!</p>
                            <a href="/apexLegends" className="btn btn-primary">Haberlere git</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mb-2">
                    <div className="card">
                        <img src="/assets/valorantCard.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Valorant</h5>
                            <p className="card-text">Valorant ile ilgili haberler için tıklayın!</p>
                            <a href="/valorant" className="btn btn-primary">Haberlere git</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mb-5">
                    <div className="card">
                        <img src="/assets/warzoneCard.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cod:Warzone</h5>
                            <p className="card-text">Warzone ile ilgili haberler için tıklayın!</p>
                            <a href="/valorant" className="btn btn-primary">Haberlere git</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mb-5">
                    <div className="card">
                        <img src="/assets/otherGamesCard.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Diğer Oyunlar</h5>
                            <p className="card-text">Diğer Oyunlar ile ilgili haberler için tıklayın!</p>
                            <a href="/valorant" className="btn btn-primary">Haberlere git</a>
                        </div>
                    </div>
                </div>                            
            </div>
        </div>
    )
}

export default Dashboard
