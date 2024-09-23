import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../assets/icon.png'
import './style.css'

const Footer = () => {
    return (
        <div>
            <section className='footer'>
                <Link to="/" aria-label="Icon link">
                    <img className='icon' src={Icon} alt="Company icon" />
                </Link>
                <p>2022 Company, Inc</p>
            </section>
        </div>
    )
}

export default Footer;