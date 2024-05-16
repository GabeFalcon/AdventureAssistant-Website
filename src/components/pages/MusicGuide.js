import React from 'react';
import '../../App.css';
import './MusicGuide.css';

export default function MusicGuide() {
    return (
        <div className='guide-container'>
            <h1 className='commands'>Tabletop Audio Guide</h1>
            <div className='music-description-card'>
                <h2>
                    Tabletop Audio offers immersive audio experiences to elevate your gaming sessions.
                </h2>
            </div>
            <div className='step'>
                <h2>Step 1: Select Your Music</h2>
                <p>Tabletop offers a variety of FREE music to use for your adventures. Just find the music you like and add them to your playlist!</p>
                <img src='/images/step1.png' alt='Step 1' />
            </div>
            <div className='step'>
                <h2>Step 2: Share The Playlist</h2>
                <p>Once you've created a playlist you are satisfied with, you have a few options. You can share the link with your players and save your playlist for the future!</p>
                <img src='/images/step2.png' alt='Step 2' />
            </div>
            <div className='step'>
                <h2>Step 3: Play Your Music</h2>
                <p>You can finally start playing your music! Unfortunately, there's no synchronous play option so just tell your players which song to play. </p>
                <img src='/images/step3.png' alt='Step 3' />
            </div>
            <div className='step'>
                <h2>Optional: Soundboard</h2>
                <p>There's also an amazing soundpad full of ambient sounds for your adventure. This DOES have a synchronous play so just share the broadcast link with your party and play away! </p>
                <img src='/images/step4.png' alt='Step 4' />
                <img src='/images/step5.png' alt='Step 5' />
            </div>
        </div>
    );
}
