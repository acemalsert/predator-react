import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
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
                    <button className="btn btn-primary"><Link to = "/login">Giriş Yap</Link></button>
                    <button className="btn btn-secondary"><Link to = "/register">Kayıt Ol</Link></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
