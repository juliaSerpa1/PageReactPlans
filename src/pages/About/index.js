import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import ImgAbout from '../../assets/about.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = () => {
    AOS.init();

    const [successMessage, setSuccessMessage] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = () => {
        setSuccessMessage(true);
        // Fechar o modal programaticamente
        setIsModalOpen(false);

        // Ocultar a mensagem de sucesso após 3 segundos
        setTimeout(() => setSuccessMessage(false), 3000);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                        <button type="button" className="btn btn-dark responsive-btn" onClick={openModal}>
                            Send an email
                        </button>
                    </div>
                </div>
                <div className="aboultImg" data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="1500">
                    <img className="imgAbout" src={ImgAbout} alt="img" />
                </div>
            </section>

            {successMessage && (
                <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1050 }}>
                    The message has been sent successfully!
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style={{ display: 'block' }}>
                    <div className="modal-dialog" style={{ padding: 0 }}>
                        <div className="modal-content" style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,201,201,1) 0%, rgba(216,0,228,1) 100%)', color: 'white' }}>
                            <div className="buttonClose">
                                <button type="button" className="btn-close" onClick={closeModal} data-dismiss="modal" aria-label="Close"></button>
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
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="buttonFooter">
                                <button type="button" className="btn btn-light button" onClick={handleSave} data-bs-dismiss="modal">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;