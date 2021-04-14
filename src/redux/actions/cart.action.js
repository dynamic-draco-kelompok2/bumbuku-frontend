import axios from 'axios'

export const GET_CART_REQUEST = 'GET_CART_REQUEST'
export const GET_CART_SUCCESS = 'GET_CART_SUCCES'
export const GET_CART_ERROR = 'GET_CART_ERROR'

export const GET_CUSTOM_REQUEST = 'GET_CUSTOM_REQUEST'
export const GET_CUSTOM_SUCCESS = 'GET_CUSTOM_SUCCES'
export const GET_CUSTOM_ERROR = 'GET_CUSTOM_ERROR'

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

export const getCustomRequest = () => {
  return {
    type: GET_CUSTOM_REQUEST
  }
}

export const getCustomSuccess = (result) => {
  return {
    type: GET_CUSTOM_SUCCESS,
    result
  }
}

export const getCustomError = (error) => {
  return {
    type: GET_CUSTOM_ERROR,
    error
  }
}

export const getCustom = (order_id) => {
  return function(dispatch) {
    const token = localStorage.token;
    dispatch(getCustomRequest())

    axios
      .get(`http://bumbuku.herokuapp.com/custom/order/${order_id}`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      })
      .then((result) => dispatch(getCustomSuccess(result.data)))
      .catch((error) => dispatch(getCustomError(error)))
  }
}

export const getCart = (user) => {
  return function(dispatch) {
    const token = localStorage.token;
    dispatch(getCartRequest())

    axios
      .get(`http://bumbuku.herokuapp.com/order/user/${user}`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      })
      .then((result) => {
        // console.log('item', result);
        result.data.forEach(item => {
          dispatch(getCustom(item._id))
        })
        
        dispatch(getCartSuccess(result.data))})
      .catch((error) => dispatch(getCartError(error)))
  }
}




