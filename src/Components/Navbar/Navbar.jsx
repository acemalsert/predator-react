import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.css'
function Navbar() {
    const {user} = useContext(AuthContext)
    console.log(user)
    const SignedIn = ({user})=>{
        console.log(user)
        if(user !== null){
            return(
                <React.Fragment>
                    <Link to = "/profile"><i className="fas fa-user fas-lg"></i></Link>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <button className="btn btn-primary"><Link to = "/login">Giriş Yap</Link></button>
                    <button className="btn btn-secondary"><Link to = "/register">Kayıt Ol</Link></button>
                </React.Fragment>
            )
        }
    }
    return (
        <div>
            <nav>
                <div className="navbar-img">
                    <img src="/assets/Predator-logos_white.png" alt="" />
                </div>
                <ul className="navbar-list">
                    <li><Link to="/"><i className="fas fa-home"></i>  Anasayfa</Link></li>
                    <li><Link to="/forum"><i className="fab fa-wpforms"></i>   Forum</Link></li>
                </ul>
                <div className="auth">
                    <SignedIn user={user}/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
