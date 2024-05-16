import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Sources.css';


function Sources() {
    const handleOpen5eButtonClick = () => {
        window.open('https://open5e.com/', '_blank');
    };

    const handleAdventureAssistantButtonClick = () => {
        window.open('https://tabletopaudio.com/', '_blank'); 
    };

    return (
        <div>
            <h1 className='sources'>Sources</h1>
            <div className='sources-container'>
                <div className='source'>
                    <div className='source-header'>
                        <h2>Open5e</h2>
                        <img src="/images/Open5eLogo.png" alt="Open5e Logo" className="source-logo" />
                    </div>
                    <p>
                        AdventureAssistant owes its wealth of knowledge to the Open5e API, a treasure trove of Dungeons and Dragons lore and mechanics. 
                        This bot diligently fetches information from Open5e, ensuring that your adventure remains rich and immersive. 
                        While we strive to keep the database up-to-date, the ever-expanding world of D&D may occasionally outpace us. 
                        If you encounter any discrepancies, please don't hesitate to join the support server. 
                        Your journey through the realms is top priority, and we're grateful to Open5e for illuminating the path with their invaluable resources. 
                        Thank you for choosing AdventureAssistant, and may your quests be filled with excitement and wonder!
                    </p>
                    <button className="source-btn" onClick={handleOpen5eButtonClick}>Open5e</button>                
                </div>
                <div className='source'>
                    <div className='source-header'>
                        <h2>Tabletop Audio</h2>
                        <img src="/images/TabletopAudioLogo.png" alt="Tabletop Audio Logo" className="source-logo" />
                    </div>
                    <p>
                    While AdventureAssistant isn't officially partnered with Tabletop Audio, we recognize the importance of setting the right ambiance for your adventures. 
                    That's why we offer a gateway to Tabletop Audio's extensive collection of music and soundscapes. 
                    With our simple tutorial, you can easily access a diverse range of music to enhance immersion and bring your adventures to life. 
                    We may not be official partners, but our dedication to your gaming experience remains unwavering. 
                    Thank you for choosing AdventureAssistant as your guide, and may your tabletop sessions be filled with epic soundtracks and unforgettable moments!
                    </p>
                    <Link to="/guides/music" className="source-tutbtn">AdventureAssistant Tutorial</Link>
                    <button className="source-btn" onClick={handleAdventureAssistantButtonClick}>Tabletop Audio</button>             
                </div>
            </div>
        </div>
    );
}

export default Sources;
