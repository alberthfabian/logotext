import React from 'react';
import { getImg } from '../Images';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import SideMenu from '../SideMenu';
import Menu from '../Menu';
import './style.scss';

const Header = () => {

  const shop = useSelector((state) => state.shop.search);

  return (
    <>
      <div className='textS'>
        <p className='textS__sent'>ENVÍO GRATIS X COMPRA</p>
        <p className='textS__upper'>SUPERIOR A $ 150.000</p>
      </div>
      <nav className='nav'>
        <div className='text'>
          <p className='text__sent'>ENVÍO GRATIS X COMPRA</p>
          <div className='triangleBlack'></div>
          <p className='text__upper'>SUPERIOR A $ 1.500.000</p>
          <div className='triangleGrey'></div>
        </div>
        <Menu />
        <div className='figure'>
          <figure className='figure__list'>
            <img src={getImg('place')} alt='Place'/>
            <p>Tiendas</p>
          </figure>
          <figure className='figure__list wishes'>
            <img src={getImg('wishes')} alt='Wishes'/>
            <p>Lista de deseos</p>
          </figure>
          <figure className='figure__list'>
            <img src={getImg('bag')} alt='Bag'/>
            <p>Mi bolsa</p>
          </figure>
        </div>
      </nav>
      <figure className='logo'>
        <img src={getImg('logo')} alt='Logo'/>
      </figure>
      {
        shop === undefined ? 
        <div className='loading'>
          <Loading /> 
        </div>
        :
        <ul className='verticalMenu'>
          {
            shop.map(data => (
              <SideMenu key={data.id} title={data} />
            ))
          }
        </ul>
      }
    </>
  );
}

export default Header;