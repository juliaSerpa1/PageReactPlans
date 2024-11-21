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
                        <h4>Have Waze, call and Whatsapp at ease, enjoy, change, win a complete <br />
                         platform with digital security solutions, connection, voice <br />
                         services and infrastructure partnerships </h4>
                        <button type="button" className="btn btn-dark col-2">
                            <Link to="/plans" style={{ textDecoration: 'none', color: 'white'}} onClick={handleClick}>Check out our plans</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;