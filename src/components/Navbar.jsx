import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/vl1.png'

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "V.League 1",
        path: "/vleague-1"
    },
    {
        display: "V.League 2",
        path: "/vleague-2"
    }, {
        display: "V.League 3",
        path: "/vleague-3"
    }, {
        display: "V.League 4",
        path: "/vleague-4"
    },
]

const Navbar = () => {
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav className="navbar__menu">
                <ul>
                    {
                        mainNav.map((item, index) => (
                            <li key={index} className={`navbar__menu__item ${activeNav === index ? 'active' : ''}`}>
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar