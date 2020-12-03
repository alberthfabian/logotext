import React, { useState } from 'react';
import { getImg } from '../Images';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { contact, form } from '../../redux/actions/ShopAction';
import './style.scss';

const Form = () => {

  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop.form);

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    location: '',
    cologne: '',
    region: '',
    city: '',
    municipality: '',
    street: ''
  });
  const [ error, actualizarError ] = useState(false);

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const { name, surname, email, phone, location, cologne, region, city, municipality, street } = data;

  const submitData = (e) => {
    e.preventDefault();

    if(name.trim() === '' || surname.trim() === '' || email.trim() === '' || phone.trim() === '' || location.trim() === '' || cologne.trim() === '' || region.trim() === '' || city.trim() === '' || municipality.trim() === '' || street.trim() === ''){
      actualizarError(true);
      return;
    }


    actualizarError(false);


    dispatch(contact(data));


    setData({
      name: '',
      surname: '',
      email: '',
      phone: '',
      location: '',
      cologne: '',
      region: '',
      city: '',
      municipality: '',
      street: ''
    })

    // En esta seccion hago la llamada a la API para traer la informacion por codigo postal
    dispatch(form(data.location));

    alert('Datos enviados con exito');

  }

  return(
    <div className='form'>
      <h4>DIRECCIÓN DE ENVÍO</h4>

      { error ? <p>Todos los campos son obligatorios</p> : null }

      <form
        onSubmit={submitData}
      >  
        <div className='img'>
          <img src={getImg('person')} alt='person'/>
          <input 
            type='text' 
            name='name'
            className='name'
            placeholder='Nombre'
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className='img'>
          <img src={getImg('person')} alt='apellido'/>
          <input 
            type='text' 
            name='surname'
            className='Surname'
            placeholder='Apellidos'
            onChange={handleChange}
            value={surname}
          />
        </div>
        <div className='img'>
          <img src={getImg('email')} alt='Email'/>
          <input 
            type='email' 
            name='email'
            className='email'
            placeholder='Correo Electrónico'
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className='img'>
          <img src={getImg('phone')} alt='Phone'/>
          <input 
            type='number' 
            name='phone'
            className='phone'
            placeholder='Teléfono'
            onChange={handleChange}
            value={phone}
          />
        </div>
        <div className='img'>
          <img src={getImg('location')} alt='Location'/>
          <input 
            type='number' 
            name='location'
            className='location'
            placeholder='Código Postal'
            onChange={handleChange}
            value={location}
          />
        </div>
        <div className='img'>
          <img src={getImg('location')} alt='Colonia'/>
          <input 
            type='text' 
            name='cologne'
            className='cologne'
            placeholder='Colonia'
            onChange={handleChange}
            value={cologne}
          />
        </div>
        <div className='img'>
          <img src={getImg('location')} alt='Region'/>
          <input 
            type='text' 
            name='region'
            className='region'
            placeholder='Estado/Región'
            onChange={handleChange}
            value={region}
          />
        </div>
        <div className='img'>
          <img src={getImg('location')} alt='City'/>
          <input 
            type='text' 
            name='city'
            className='city'
            placeholder='Ciudad'
            onChange={handleChange}
            value={city}
          />
        </div>
        <div className='img'>
          <img src={getImg('location')} alt='Municipality'/>
          <input 
            type='text' 
            name='municipality'
            className='municipality'
            placeholder='Delegación o minicipio'
            onChange={handleChange}
            value={municipality}
          />
        </div>
        <div className='img'>
          <img src={getImg('street')} alt='Street'/>
          <input 
            type='text' 
            name='street'
            className='street'
            placeholder='Calle'
            onChange={handleChange}
            value={street}
          />
        </div>
        <div className='save'>
          <button>Libreta de direcciones</button>
          <button
            type='submit'
            className='submit'
          >Guardar</button>
        </div>
      </form>
      

    </div>
  )
};

export default Form;
