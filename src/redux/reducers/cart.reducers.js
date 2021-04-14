import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CUSTOM_REQUEST,
  GET_CUSTOM_SUCCESS,
  GET_CUSTOM_ERROR
} from '../actions/cart.action'


const initialState = {
  isLoading: false,
  custom: [],
  data: [],
  error: null
}

const handleCart = (state = initialState, action) => {
  switch(action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        data: action.result,
        isLoading: false
      }
    case GET_CART_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case GET_CUSTOM_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_CUSTOM_SUCCESS:
      const NewData = state.data.map(item => {
        if (item._id === action.result[0].order_id){
          return {
            ...item,
            custom: action.result
          }
        }
        return item
      })

      return {
        ...state,
        data: NewData,
        isLoading: false
      }
    case GET_CUSTOM_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

export default handleCart