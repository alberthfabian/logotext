export const FAVORITES = 'FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const favorites = (value) => {
  return {
    type: FAVORITES,
    payload: value
  }
}

export const remove_favorites = (value) => {
  return {
    type: REMOVE_FAVORITES,
    payload: value
  }
}