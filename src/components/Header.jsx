import React from 'react'
import Navbar from './Navbar'


const Header = () => {
    return (
        <div className='bg-transparent text-white py-5 bg-background-set '>
            < Navbar />
            <div className='container py-5'>
                <div className='row justify-content-left align-items-left'>
                    <div className='col-md-8 col-sm-12 text-left'>
                        <h1 className='header p-4' style={{ display: 'inline-block', border: '1px solid white' }}>IMMERSIVE <br />EXPERIENCES <br />THAT DELIVER</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header