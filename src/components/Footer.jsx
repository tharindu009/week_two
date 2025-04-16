import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 py-4'>
                        <Logo image={'../src/assets/images/logo.svg'} link={'#'} alttext={'Logo'} />
                    </div>
                    <div className='col-md-6 d-flex flex-column align-items-center align-items-md-end py-4'>
                        <Logo image={'../src/assets/images/icon-facebook.svg'} link={'#'} alttext={'facebook'} />
                        <Logo image={'../src/assets/images/icon-twitter.svg'} link={'#'} alttext={'twitter'} />
                        <Logo image={'../src/assets/images/icon-pinterest.svg'} link={'#'} alttext={'facebook'} />
                        <Logo image={'../src/assets/images/icon-instagram.svg'} link={'#'} alttext={'facebook'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer