import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const Pricing = () => {
    AOS.init();
    return(
        <> 
            <section className='cardPricing' data-aos="zoom-in-up" data-aos-duration="1000">
                <div className='cards'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Pro</h4>
                        </div>
                        <div className='card-body'>
                            <h4>$23</h4>
                            <ul className='list-unstyled'>
                                <li>Waze Car</li>
                                <li>Call ilimited</li>
                                <li>2 user included</li>
                                <li>10 GB of storage</li>
                            </ul>
                            <button type="button" class="btn btn-info">Join</button>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Prime</h4>
                        </div>
                        <div className='card-body'>
                            <h4>$49</h4>
                            <ul className='list-unstyled'>
                                <li>Waze Car</li>
                                <li>Call ilimited</li>
                                <li>5 user included</li>
                                <li>20 GB of storage</li>
                            </ul>
                            <button type="button" class="btn btn-info">Join</button>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Business</h4>
                        </div>
                        <div className='card-body'>
                            <h4>$66</h4>
                            <ul className='list-unstyled'>
                                <li>Waze Car</li>
                                <li>Call ilimited</li>
                                <li>8 user included</li>
                                <li>40 GB of storage</li>
                            </ul>
                            <button type="button" class="btn btn-info">Join</button>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Enterprise</h4>
                        </div>
                        <div className='card-body'>
                            <h4>$100</h4>
                            <ul className='list-unstyled'>
                                <li>Waze Car</li>
                                <li>Call ilimited</li>
                                <li>20 user included</li>
                                <li>70 GB of storage</li>
                            </ul>
                            <button type="button" class="btn btn-info">Join</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='table-responsive container'>
                <table className='table text-center'>
                    <thead>
                        <tr>
                            <th className='vazio'></th>
                            <th className='title'>Pro</th>
                            <th className='title'>Prime</th>
                            <th className='title'>Business</th>
                            <th className='title'>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className='text-start'>Velocity 5G</th>
                        <td>
                            <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                    </tr>
                    <tr>
                        <th className='text-start'>Sharing</th>
                        <td></td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                    </tr>
                    <tr>
                        <th className='text-start'>Extra security</th>
                        <td></td>
                        <td></td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                    </tr>
                    <tr>
                        <th className='text-start'>App ilimited</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        <img className='bi' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Pricing;