import React, { useState } from 'react';
import '../App.css';
import '../css/website.css';
import Sinigang from '../img/Sinigang1.jpg';
import Adobo from '../img/adobochicken1.jpg';
import Pancit from '../img/pancit1.jpg';

function Section2() {
    const [showMoreAdobo, setShowMoreAdobo] = useState(false);
    const [showMoreSinigang, setShowMoreSinigang] = useState(false);
    const [showMorePancit, setShowMorePancit] = useState(false);

    const toggleMoreInfo = (dish) => {
        if (dish === 'Adobo') {
            setShowMoreAdobo(!showMoreAdobo);
            setShowMoreSinigang(false);
            setShowMorePancit(false);
        } else if (dish === 'Sinigang') {
            setShowMoreSinigang(!showMoreSinigang);
            setShowMoreAdobo(false);
            setShowMorePancit(false);
        } else if (dish === 'Pancit') {
            setShowMorePancit(!showMorePancit);
            setShowMoreAdobo(false);
            setShowMoreSinigang(false);
        }
    };

    return (
        <div>
            <section id="section2" className="section-bg2">
                <h3>MENU</h3>
                <div className="menu-container">
                    <div className="card">
                        <img src={Adobo} alt="Adobo Chicken" />
                        <div className="card-content">
                            <h3>Adobo Chicken</h3>
                            <p>Adobo Chicken is a popular Filipino dish made with chicken, soy sauce, vinegar, and garlic.</p>
                            <button onClick={() => toggleMoreInfo('Adobo')}>More Info</button>
                            {showMoreAdobo && (
                                <div className="more-info-container">
                                    <div className="more-info">
                                        <ul>
                                            <li>Chicken</li>
                                            <li>Soy sauce</li>
                                            <li>White vinegar</li>
                                            <li>Onion </li>
                                            <li>Garlic </li>
                                            <li>Sugar</li>
                                            <li>Bay leaves</li>
                                        </ul>
                                        <button onClick={() => setShowMoreAdobo(false)}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <img src={Sinigang} alt="Sinigang" />
                        <div className="card-content">
                            <h3>Sinigang</h3>
                            <p>Sinigang is a Filipino soup characterized by its sour and savory taste, often made with pork and tamarind.</p>
                            <button onClick={() => toggleMoreInfo('Sinigang')}>More Info</button>
                            {showMoreSinigang && (
                                <div className="more-info-container">
                                    <div className="more-info">
                                    <ul>
                                            <li>Chicken</li>
                                            <li>Soy sauce</li>
                                            <li>White vinegar</li>
                                            <li>Onion </li>
                                            <li>Garlic </li>
                                            <li>Sugar</li>
                                            <li>Bay leaves</li>
                                        </ul>
                                        <button onClick={() => setShowMoreSinigang(false)}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card">
                        <img src={Pancit} alt="Pancit" />
                        <div className="card-content">
                            <h3>Pancit</h3>
                            <p>Pancit is a Filipino noodle dish that is often served during celebrations and family gatherings.</p>
                            <button onClick={() => toggleMoreInfo('Pancit')}>More Info</button>
                            {showMorePancit && (
                                <div className="more-info-container">
                                    <div className="more-info">
                                    <ul>
                                            <li>Chicken</li>
                                            <li>Soy sauce</li>
                                            <li>White vinegar</li>
                                            <li>Onion </li>
                                            <li>Garlic </li>
                                            <li>Sugar</li>
                                            <li>Bay leaves</li>
                                        </ul>
                                        <button onClick={() => setShowMorePancit(false)}>Close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section2;
