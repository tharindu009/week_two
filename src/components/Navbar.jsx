import React from 'react'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-transparent px-5 pb-5'>
                <div className='container-fluid'>
                    <a href=""><img src={logo} alt="" /></a>
                    <button className='navbar-toggler'>
                        <span className='navbar-toggler-icon'></span>
                    </button >
                    <div className='collapse navbar-collapse justify-content-end' id='NavbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href="">About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="">Careers</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="">Events</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="">Products</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar