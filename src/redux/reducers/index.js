import { combineReducers } from 'redux';
import auth from './auth.reducers';
import handleBumbuProduk from './bumbuproduk.reducers'

const rootReducer = combineReducers({
  auth, 
  handleBumbuProduk
})

export default rootReducer;