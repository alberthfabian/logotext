import { FAVORITES, REMOVE_FAVORITES } from '../actions/buscadorAction';

const like = (state = [], action) => {
  switch(action.type) {
    case FAVORITES:
       return state.concat(action.payload)
    case REMOVE_FAVORITES:
      return state.filter(movie => movie.imdbID !== action.payload)
    default: return state;
  }
}

export default like;