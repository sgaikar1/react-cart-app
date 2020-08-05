import React from "react"
const Navbar = () =>{ 
    return <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a  className="brand-logo"></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}
export default Navbar
