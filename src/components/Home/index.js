import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import backgroundImage from '../../assets/liquidabstract3D.png'

const Home = () =>{
    return(
        <>
            <section>
                <div className='homeBackground'>
                <img src={backgroundImage}></img>
                </div>
            </section>
        </>
    )
}

export default Home;