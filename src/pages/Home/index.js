import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
    const handleClick = () => {
    };

    return (
        <div>
            <section className='home'>
                <div className='home-card container'>
                    <div className='cardPromo'>
                        <h1>Have the newest 5g technology</h1>
                        <small>Have Waze, call and Whatsapp at ease, enjoy, change, win</small>
                        <button type="button" className="btn btn-outline-info">
                            <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleClick}>Confira nossas ofertas</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;