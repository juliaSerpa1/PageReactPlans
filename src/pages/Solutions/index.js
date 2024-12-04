import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'
import Solution1 from '../../assets/solution1.jpg'
import Solution2 from '../../assets/solution2.jpeg'
import Solution3 from '../../assets/solution3.jpg'
import Solution from '../../assets/solution.png'

const Features = () => {
    AOS.init();
    return (
        <div>
            <section id="features">
                <picture>
                    <source srcSet={Solution} type="image/webp" />
                    <img loading="lazy" className='imgCard' src={Solution} alt="Imagem principal" />
                </picture>
                <div className='features row-cols-lg-2' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="featuresCard">
                        <img loading="lazy" className='imgFeature' src={Solution1} alt="img" />
                        <h2>Connection Carriers</h2>
                        <p>Discover a complete platform with digital security, voice
                            services, and infrastructure partnership solutions</p>
                    </div>
                    <div className='featuresCard'>
                        <img loading="lazy" className='imgFeature' src={Solution2} alt="img" />
                        <h2>Security Solutions</h2>
                        <p>Invest in voice service for call management with
                            multiple possibilities with the DDoS Protection service</p>
                    </div>
                    <div className='featuresCard'>
                        <img loading="lazy" className='imgFeature' src={Solution3} alt="img" />
                        <h2>Voice Services</h2>
                        <p>It is one of the promoters of IPv6 and has a broad portfolio of solutions
                            that consider this and experience for its users</p>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Features;