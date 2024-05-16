import React from 'react';
import { Link } from 'react-router-dom';

function GuideCardItem(props) {
  return (
    <>
      <li className='guide-cards__item'>
        <Link className='guide-cards__item__link' to={props.path}>
          <figure className='guide-cards__item__pic-wrap' data-category={props.label}>
            <img className='guide-cards__item__img' alt='Display Pic' src={props.src}/>
          </figure>
          <div className='guide-cards__item__info'>
            <h5 className='guide-cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GuideCardItem;