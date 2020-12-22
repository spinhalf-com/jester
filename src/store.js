import {combineReducers, createStore} from 'redux'
import reducers from "../src/store/reducers/index";

const initialState = {
  sidebarShow: 'responsive',
  asideShow: false,
  darkMode: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState, reducers, combineReducers)
export default store
