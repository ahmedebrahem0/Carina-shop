import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Combonent/Footer/Footer'
import Navbar from '../Combonent/Navber/Navber'

export default class MainLayout extends Component {
    render() {
        return (

            <>
                <Navbar/>
                <Outlet />
                <Footer/>
            </>
        )
    }
}
