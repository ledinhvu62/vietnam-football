import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/logo.png'

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Fixtures",
        path: "/fixtures"
    },
    {
        display: "Results",
        path: "/results"
    }, {
        display: "Tables",
        path: "/tables"
    }, {
        display: "News",
        path: "/news"
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