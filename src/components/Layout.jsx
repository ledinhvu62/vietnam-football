import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RoutesApp from '../routes/RoutesApp'

import Navbar from './Navbar'

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div className='main'>
                    <RoutesApp />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout