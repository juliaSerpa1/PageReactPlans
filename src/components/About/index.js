import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import ImgAbout from '../../assets/about.jpg';

const About = ()=>{
    AOS.init();
    return(
        <>
            <section className='abouts'>
                <div className='aboultImg' data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="1500">
                    <img className='imgAbout' src={ImgAbout}/>
                </div>
                <div className='cardAbout' data-aos="zoom-out-down">
                    <div  className='About'>
                        <h5>Going through the cites of the word</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable. If you are going to 
                        use a passage of Lorem Ipsum, you need to be sure there isn't 
                        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                        Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
                        words, combined with a handful of model sentence structures, 
                        to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                        free from repetition,</p>
                        <button type="button" class="btn btn-info col-6">Info</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;