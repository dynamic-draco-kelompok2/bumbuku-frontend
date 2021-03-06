import {
  GET_BUMBUPRODUK_REQUEST,
  GET_BUMBUPRODUK_SUCCESS,
  GET_BUMBUPRODUK_ERROR,
  PUT_BUMBUPRODUK_SUCCESS,
  GET_BUMBUPRODUKBYID_REQUEST,
  GET_BUMBUPRODUKBYID_SUCCESS,
  GET_BUMBUPRODUKBYID_ERROR
} from '../actions/bumbuproduk.actions.js'

const initialState = {
  dataById:[],
  data: [],
  isLoading : false,
  error: null
}

const handleBumbuProduk = (state = initialState, action) => {
  switch(action.type) {
    case GET_BUMBUPRODUK_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_BUMBUPRODUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result
      }
    case PUT_BUMBUPRODUK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case GET_BUMBUPRODUK_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case GET_BUMBUPRODUKBYID_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_BUMBUPRODUKBYID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataById: action.result
      }
    case GET_BUMBUPRODUKBYID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default handleBumbuProduk