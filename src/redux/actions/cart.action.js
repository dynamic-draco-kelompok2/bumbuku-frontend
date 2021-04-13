import axios from 'axios'

export const GET_CART_REQUEST = 'GET_CART_REQUEST'
export const GET_CART_SUCCESS = 'GET_CART_SUCCES'
export const GET_CART_ERROR = 'GET_CART_ERROR'

export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const ADD_CART_ITEM_CUSTOM = 'ADD_CART_ITEM_CUSTOM'

export const getCartRequest = () => {
  return {
    type: GET_CART_REQUEST
  }
}

export const getCartSuccess = (result) => {
  return {
    type: GET_CART_SUCCESS,
    result
  }
}

export const getCartError = (error) => {
  return {
    type: GET_CART_ERROR,
    error
  }
}

export const getCart = (user) => {
  return function(dispatch) {
    const token = localStorage.token;
    dispatch(getCartRequest())

    axios
      .get(`https://bumbuku.herokuapp.com/order/user/${user}`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      })
      .then((result) => dispatch(getCartSuccess(result.data)))
      .catch((error) => dispatch(getCartError(error)))
  }
}

