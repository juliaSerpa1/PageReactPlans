import React from 'react'
import Icon from '../../assets/icon.png'
import './style.css'

const Footer = () =>{
    return (
        <>
            <section className='footer'>
                <a>
                    <img className='icon' src={Icon}/>
                </a>
                <a>2022 Company, Inc</a>
            </section>
        </>
    )
}

export default Footer;