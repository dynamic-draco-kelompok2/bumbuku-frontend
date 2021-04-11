import { combineReducers } from 'redux';
import auth from './auth.reducers';
import handleBumbuProduk from './bumbuproduk.reducers'
import handleCustomBumbu from './custombumbu.reducers'

const rootReducer = combineReducers({
  auth, 
  handleBumbuProduk,
  handleCustomBumbu
})

export default rootReducer;