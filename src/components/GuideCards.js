import React from 'react';
import './GuideCards.css';
import CardItem from './GuideCardItems';

function GuideCards() {
  return (
    <div className='guide-cards'>
        <div className='guide-description-card'>
        <h1>Let an assistant guide you!</h1>
        </div>
      <div className='guide-cards__container'>
        <div className='guide-cards__wrapper'>
          <ul className='guide-cards__items'>
            <CardItem
              src='images/guide1.png'
              text='A guide on each command to make your experience even better!'
              label='Commands Guide'
              path='/guides/commands'
            />
          </ul>
          <ul className='guide-cards__items'>
            <CardItem
              src='images/guide2.png'
              text='A guide on how to play high quality music for your adventure!'
              label='Music Guide'
              path='/guides/music'
            />
          </ul>
          <ul className='guide-cards__items'>
            <CardItem
              src='images/sheet2.png'
              text='A guide on how to create your own character sheet with AdventureAssistant!'
              label='Music Guide'
              path='/guides/sheet'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GuideCards;