import React from 'react';
import { Button } from './Button'; 
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-section'>
            <p className='footer-heading'>
                AdventureAssistant
            </p>
            <p className='footer-text'>
                Your next adventure begins now.
            </p>
            <div className='footer-btns'> 
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    link='/invite'>
                    Invite <i className='fa-brands fa-discord' /> 
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    link='/support'>
                    Support <i className='fa-solid fa-wrench' /> 
                </Button>
            </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Resources</h2>
                        <Link to='https://open5e.com/'>
                            Open5e
                        </Link>
                        <Link to='https://tabletopaudio.com/'>
                            Tabletop Audio
                        </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Terms and Privacy</h2>
                        <Link to='/support'>
                            Terms of Service
                        </Link>
                        <Link to='/support'>
                            Privacy
                        </Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>AdventureAssistant</h2>
                        <Link to='/support'>
                            Support
                        </Link>
                        <Link to='/support'>
                            Suggestions
                        </Link>
                        <Link to='/character-sheet'>
                            Character Sheet
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;