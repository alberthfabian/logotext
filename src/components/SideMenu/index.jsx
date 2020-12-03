import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { menuTitle, menuSubItems } from '../../redux/actions/ShopAction';
import './style.scss';

const SideMenu = (props) => {

  const { title } = props;
  const dispatch = useDispatch();
  // let [ value, setValue ] = useState();
  // const shop = useSelector((state) => state.shop);

  // console.log(shop.sum);

  return (
    <div className='listL'>
      <li className='listL__title' onClick={() => dispatch(menuTitle(title.title))}>{title.title}
        {
          title.subItems !== undefined && 
          <ul className='subItems'>
            {
              title.subItems.map(data => (
                <li className='subItems__title' key={data.id} onClick={() => dispatch(menuSubItems(data.title))}>{data.title}</li>
              ))
            }
          </ul>
        }
      </li>
    </div>
  )
};

export default SideMenu;