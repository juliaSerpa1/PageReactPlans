import React, { useState } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './style.css';
import ImgAbout from '../../assets/about.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';

const About = () => {
    AOS.init();

    const [successMessage, setSuccessMessage] = useState(false);

    const handleSave = () => {
        setSuccessMessage(true);
        // Fechar o modal programaticamente
        const modal = document.getElementById('exampleModal');
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        // Ocultar a mensagem de sucesso após 3 segundos
        setTimeout(() => setSuccessMessage(false), 3000);
    };

    return (
        <div>
            <section className="abouts">
                <div className="cardAbout" data-aos="zoom-out-down">
                    <div className="About">
                        <h1>Email us and talk to us</h1>
                        <p>
                            Today, we have local access to the greatest national and international <br />
                            content of the World Internet through data interconnections (Peering) <br />
                            Send the email to contact the specialized team. We will respond as soon
                            as possible.
                        </p>
                        <button type="button" className="btn btn-dark col-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>Send an email</Link>
                        </button>
                    </div>
                </div>
                <div className="aboultImg" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="1500">
                    <img className="imgAbout" src={ImgAbout} alt="img" />
                </div>
            </section>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,201,201,1) 0%, rgba(216,0,228,1) 100%)', color: 'white' }}>
                        <div className="buttonClose">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="exampleFormControlInput2" placeholder="(xx) xxx-xxx" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="buttonFooter">
                            <button type="button" className="btn btn-primary button" onClick={handleSave} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {successMessage && (
                <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1050 }}>
                    The message has been sent successfully!
                </div>
            )}
        </div>
    );
};

export default About;