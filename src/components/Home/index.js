import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'

const Home = () =>{
    return(
        <>
            <section>
                <div className='cardPromo container'>
                    <h1>UltraGigue-se com tecnologia 5G</h1>
                    <small>tenha Waze, ligação e Whatsapp avontade, aproveite, mude, ganhe</small>
                    <button type="button" class="btn btn-outline-info col-6">Confira nossas ofertas!</button>
                </div>
            </section>
        </>
    )
}

export default Home;