import {
  GET_BUMBUPRODUK_REQUEST,
  GET_BUMBUPRODUK_SUCCESS,
  GET_BUMBUPRODUK_ERROR,
  GET_BUMBUPRODUKBYID_REQUEST,
  GET_BUMBUPRODUKBYID_SUCCESS,
  GET_BUMBUPRODUKBYID_ERROR
} from '../actions/bumbuproduk.actions.js'

const initialState = {
  dataById:[],
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
    case GET_BUMBUPRODUKBYID_REQUEST:
      return {
        ...state
      }
    case GET_BUMBUPRODUKBYID_SUCCESS:
      return {
        ...state,
        dataById: action.result
      }
    case GET_BUMBUPRODUKBYID_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleBumbuProduk