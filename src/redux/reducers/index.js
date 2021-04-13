import { combineReducers } from 'redux';
import auth from './auth.reducers';
import handleBumbuProduk from './bumbuproduk.reducers'
import handleCustomBumbu from './custombumbu.reducers'
import handleCart from './cart.reducers'
import handleOrder from './order.reducers';

const rootReducer = combineReducers({
  auth, 
  handleBumbuProduk,
  handleCustomBumbu,
  handleCart,
  handleOrder
})

export default rootReducer;