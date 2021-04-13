import {
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_ERROR,
  } from '../actions/order.action'
  
  const initialState = {
    isLoading: false,
    error: null
  }
  
  const handleOrder = (state = initialState, action) => {
    switch(action.type) {
      case POST_ORDER_REQUEST:
        return {
          ...state,
          isLoading: true
        }
      case POST_ORDER_SUCCESS:
        return {
          ...state,
          isLoading: false
        }
      case POST_ORDER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      default:
        return state
    }
  }
  
  export default handleOrder