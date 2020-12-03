import axios from 'axios';

export const WATCH_MOVIE = 'WATCH_MOVIE';
export const RETURN_POKEMON = 'RETURN_POKEMON';
export const INITIAL = 'INITIAL';
export const SUMMARY = 'SUMMARY';
export const MENU__TITLE = 'MENU__TITLE';
export const MENU__SUBITEMS = 'MENU__SUBITEMS';
export const SUM = 'SUM';
export const FORM = 'FORM';
export const FAVORITES = 'FAVORITES';

export const initial = () => {
  return dispatch => {
    return axios.get(`https://blackisp.herokuapp.com/menu`)
    .then(response => {
      dispatch({
        type: 'INITIAL',
        payload: response.data,
      })
    });
  };
}

export const summary = () => {
  return dispatch => {
    return axios.get(`https://blackisp.herokuapp.com/products`)
    .then(response => {
      dispatch({
        type: 'SUMMARY',
        payload: response.data,
      })
    });
  };
}

export const form = () => {
  return dispatch => {
    return axios.get(`https://blackisp.herokuapp.com/products`)
    .then(response => {
      dispatch({
        type: 'FORM',
        payload: response.data,
      })
    });
  };
}

export const menuTitle = (value) => {
  return {
    type: MENU__TITLE,
    payload: value
  }
}

export const menuSubItems = (value) => {
  return {
    type: MENU__SUBITEMS,
    payload: value
  }
}

export const sum = (value) => {
  return {
    type: SUM,
    payload: value
  }
}

// export const watch_movie = (id) => {
//   return dispatch => {
//     return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=b64a56c4`)
//     .then(response => {
//       dispatch({
//         type: 'WATCH_MOVIE',
//         payload: response.data
//       })
//     });
//   };
// }

// export const modal = (value) => {
//   return {
//     type: MODAL,
//     payload: value
//   }
// }