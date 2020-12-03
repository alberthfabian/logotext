const images = {
  logo: require('../../assets/Logo.png').default,
  place: require('../../assets/Place.png').default,
  wishes: require('../../assets/Wishes.png').default,
  dryer: require('../../assets/Dryer.png').default,
  email: require('../../assets/Email.png').default,
  giftset: require('../../assets/Giftset.jpg').default,
  lady: require('../../assets/Lady.jpg').default,
  location: require('../../assets/Location.png').default,
  menu: require('../../assets/Menu.png').default,
  person: require('../../assets/Person.png').default,
  phone: require('../../assets/Phone.png').default,
  street: require('../../assets/Street.png').default,
  bag: require('../../assets/Bag.png').default,
  default: require('../../assets/Logo.png').default, 
}

export const getImg = (image) => {
  let img = images[image];
  if (img === undefined) {
      img = images.default
  }
  return img;
}

export default images;