import React from 'react';
import { getImg } from '../Images';
import { useSelector } from 'react-redux';
import SideMenuVertical from '../SideMenuVertical';
import './style.scss';

const Menu = () => {

  const move = document.getElementById('move');
  const shop = useSelector((state) => state.shop.search);

  const hide = () => {
    move.classList.toggle('slide');
  }

  return (
    <div className='menu'>
      <button id='hide' onClick={() => hide()}>
        <img src={getImg('menu')} alt='Menu'/>
      </button>
      <div id='move' className='moveMenu'>
        <ul className='show'>
          {
            shop !== undefined &&
            shop.map(data => (
              <SideMenuVertical key={data.id} title={data} />
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default Menu