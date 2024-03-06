import React from 'react'
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-container'>
                <img src={logo} className='nav-logo' />
                <div className='nav-tabs'>
                    <a className='nav-tab'>NEWS</a>
                    <a className='nav-tab'>FAQ</a>
                    <span className='nav-tab'>MONTHLY VIEWS : 255445500033 </span>
                </div>
            </div>

        </div>
    )
}

export default Nav
