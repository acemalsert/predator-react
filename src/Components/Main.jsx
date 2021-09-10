import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import {Switch,Route,Redirect} from 'react-router-dom'
import Register from './Register/Register'
import ValorantNews from './Valorant/ValorantNews'
function Main() {
    return (
        <div>
            <Navbar/>
                <Switch>
                    <Route path ="/valorant">
                        <ValorantNews/>
                    </Route>
                    <Route path="/apexLegends">

                    </Route>
                    <Route path="/digerOyunlar">

                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route exact path ="/">
                        <Dashboard/>
                    </Route>
                    <Route path="">

                    </Route>
                    <Redirect to="/"/>
                </Switch>
            <Footer/>
        </div>
    )
}

export default Main
