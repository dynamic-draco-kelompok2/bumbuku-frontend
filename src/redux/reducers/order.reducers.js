import {
    ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    ORDER_ERROR,
    ORDER_BUMBUDASAR_REQUEST,
    ORDER_BUMBUDASAR_SUCCESS,
    ORDER_BUMBUDASAR_ERROR
  } from '../actions/order.action'
  
  const initialState = {
    isLoading: false,
    error: null
  }
  
  const handleOrder = (state = initialState, action) => {
    switch(action.type) {
      case ORDER_REQUEST:
        return {
          ...state,
          isLoading: true
        }
      case POST_ORDER_SUCCESS:
        return {
          ...state,
          isLoading: false
        }
      case ORDER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      case ORDER_BUMBUDASAR_REQUEST:
        return {
          ...state,
          isLoading: true
        }
      case ORDER_BUMBUDASAR_SUCCESS: 
        return {
          ...state,
          isLoading: false
        }
      case ORDER_BUMBUDASAR_ERROR:
        return {
          ...state,
          isLoading: false
        }
      default:
        return state
    }
  }
  
  export default handleOrder