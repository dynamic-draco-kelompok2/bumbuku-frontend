import { combineReducers } from 'redux';
import auth from './auth.reducers';
import handleBumbuProduk from './bumbuproduk.reducers'
import handleCustomBumbu from './custombumbu.reducers'
import handleCart from './cart.reducers'

const rootReducer = combineReducers({
  auth, 
  handleBumbuProduk,
  handleCustomBumbu,
  handleCart
})

export default rootReducer;