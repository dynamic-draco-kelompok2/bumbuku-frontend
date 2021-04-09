import {
  GET_BUMBUPRODUK_REQUEST,
  GET_BUMBUPRODUK_SUCCESS,
  GET_BUMBUPRODUK_ERROR
} from '../actions/bumbuproduk.actions.js'

const initialState = {
  data: [],
  error: null
}

const handleBumbuProduk = (state = initialState, action) => {
  switch(action.type) {
    case GET_BUMBUPRODUK_REQUEST:
      return {
        ...state
      }
    case GET_BUMBUPRODUK_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_BUMBUPRODUK_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleBumbuProduk