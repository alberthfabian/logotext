const { WATCH_MOVIE } = require("../actions/ShopAction");
const { MENU__TITLE } = require("../actions/ShopAction");
const { MENU__SUBITEMS } = require("../actions/ShopAction");
const { INITIAL } = require("../actions/ShopAction");
const { SUMMARY } = require("../actions/ShopAction");
const { SUM } = require("../actions/ShopAction");
const { FORM } = require("../actions/ShopAction");

const shop = (state = [], action) => {
  switch(action.type) {
    case INITIAL: {
      return {
        ...state,
        search: action.payload,
      }
    }
    case SUMMARY: {
      return {
        ...state,
        summary: action.payload,
      }
    }
    case WATCH_MOVIE: { 
      return {
        ...state,
        movie: action.payload
      }
    }
    case MENU__TITLE: {
      console.log(action.payload)
      return {
        ...state,
        menu: action.payload
      }
    }
    case MENU__SUBITEMS: {
      console.log(action.payload)
      return {
        ...state,
        menu: action.payload
      }
    }
    case SUM: {
      return {
        ...state,
        sum: action.payload
      }
    }
    case FORM: {
      return {
        ...state,
        sum: action.payload
      }
    }
    default: return state;
  }
}

export default shop;