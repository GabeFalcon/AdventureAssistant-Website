import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <div className='description-card'>
        <h1>Confidently take your adventure to the next level with <span>COUNTLESS tools</span> to assist you!</h1>
        </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/AdventureAssistantPic1.png'
              text='All the information you need at your fingertips!'
              label='Information Commands'
              path='/guides/commands'
            />
            <CardItem
              src='images/AdventureAssistantPic2.png'
              text='Create various scenarios with these randomizers!'
              label='Randomize Commands'
              path='/guides/commands'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sheet.png'
              text='Use the AdventureAssistant Website to create your own character sheet!'
              label='Character Sheet'
              path='/character-sheet'
            />
            <CardItem
              src='images/music.png'
              text='Listen to music on Tabletop Audio for a more immersive experience!'
              label='Music'
              path='/guides/music'
            />
            <CardItem
              src='images/source.png'
              text='Where the information come from!'
              label='Sources'
              path='/sources'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;