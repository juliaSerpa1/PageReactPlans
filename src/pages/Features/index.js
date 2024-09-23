import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'
import Feature1 from '../../assets/feature1.jpg'
import Feature2 from '../../assets/feature2.jpg'
import Feature3 from '../../assets/feature3.jpg'

const Features = () => {
    AOS.init();
    return (
        <div>
            <section id="features" className='container'>
                <div className='features row-cols-lg-3' data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="featuresCard">
                        <img className='imgFeature' src={Feature1} alt="img" />
                        <h2>Features title</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout</p>
                    </div>
                    <div className='featuresCard'>
                        <img className='imgFeature' src={Feature2} alt="img" />
                        <h2>Features title</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout</p>
                    </div>
                    <div className='featuresCard'>
                        <img className='imgFeature' src={Feature3} alt="img" />
                        <h2>Features title</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout</p>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Features;