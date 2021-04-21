import { combineReducers } from 'redux';
import auth from './auth.reducers';
import handleBumbuProduk from './bumbuproduk.reducers'
import handleCustomBumbu from './custombumbu.reducers'
import handleBumbuDasar from './bumbudasar.reducers'
import handleCart from './cart.reducers'
import handleOrder from './order.reducers';
import handleUser from './user.reducer'
import handleCategory from './categorybumbu.reducers';

const rootReducer = combineReducers({
  auth, 
  handleBumbuProduk,
  handleBumbuDasar,
  handleCustomBumbu,
  handleCart,
  handleOrder,
  handleUser,
  handleCategory
})

export default rootReducer;