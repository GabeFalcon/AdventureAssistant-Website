import React from 'react';
import '../../App.css';
import './SheetGuide.css';

export default function SheetGuide() {
    return (
        <div className='guide-container'>
            <h1 className='commands'>Character Sheet Guide</h1>
            <div className='music-description-card'>
                <h2>
                    AdventureAssistant uses cookies to store character information. Keep in mind that clearing cookies will result in character information being lost.
                </h2>
            </div>
            <div className='step'>
                <h2>Step 1: Log In</h2>
                <p>Create an account and log in, then navigate to the character sheet page to being creating your character!</p>
                <img src='/images/sheetstep1.png' alt='Step 1' />
            </div>
            <div className='step'>
                <h2>Step 2: Add A Character</h2>
                <p>Once you've navigated to the Character Sheet Page, just click on "Add Character" to enter your character's name and begin. </p>
                <img src='/images/sheetstep2.png' alt='Step 2' />
            </div>
            <div className='step'>
                <h2>Step 3: Add Your Stats.</h2>
                <p>Your skills and saving throws are automatically adjusted to fit your stats. Clicking on the circles will declare the skill/saving throw as proficient and add your proficiency bonus to it.</p>
                <img src='/images/sheetstep3.png' alt='Step 3' />
            </div>
            <div className='step'>
                <h2>Step 4: Death Saves</h2>
                <p>You can keep track of your death saves here and reset them whenever the rolls are done.</p>
                <img src='/images/sheetstep4.png' alt='Step 4' />
            </div>
            <div className='step'>
                <h2>Step 5: Equipment</h2>
                <p>You'll come across lots of items on your adventure, keeping track of everything could be a good idea so we gave plenty of space!</p>
                <img src='/images/sheetstep5.png' alt='Step 4' />
            </div>
        </div>
    );
}
