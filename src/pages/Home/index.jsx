import React from 'react';
import OrderSummary from '../../components/OrderSummary';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Form from '../../components/Form';
import './style.scss';

const Home = () => {

  // const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop.summary);


  // console.log(price);

  return (
    <div className='data'>
      <Form />
      <div className='cardOrden'>
        <div className='order'>
          <h4>RESUMEN DE LA ORDEN</h4>
          <div className='container'>
            {
              shop !== undefined &&
              shop.map(data => (
                <OrderSummary key={data.name} image={data.image} name={data.name} price={data.price} />
              ))
            }
          </div>
          <div className='editar'>
            <button>Editar</button>
          </div>
          <div className='subtotal'>
            <div className='subtotal__total'>
              <h5>SUBTOTAL</h5>
              <p>$ 13.974.00</p>
            </div>
            <div className='subtotal__calculate'>
              <h5>ENVIO</h5>
              <p>A CALCULAR</p>
            </div>
          </div>
          <div className='total'>
            <h5>Total</h5>
            <p>$13,974.00</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;