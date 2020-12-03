import React from 'react';
// import { useDispatch } from 'react-redux';
// import { sum } from '../../redux/actions/ShopAction';
// import { useSelector } from 'react-redux';
import './style.scss';

const OrderSummary = (props) => {

  const { image, name, price } = props;
  // const [ value, setValue ] = useState(0);
  // const dispatch = useDispatch();

  // dispatch(sum(parseInt(price)));

  // const shop = useSelector((state) => state.shop);

  // console.log(shop.sum);
  // setValue(value + parseInt(price));

  return (
    <>
      <div className='article'> 
        <img src={image} alt={name} />
        <p className='name'>{name}</p>
        <p className='price'>{`$${price}`}</p>
      </div>
      <div className='line'></div>
      {/* <p>{total}</p> */}
    </>
  )
};

export default OrderSummary;