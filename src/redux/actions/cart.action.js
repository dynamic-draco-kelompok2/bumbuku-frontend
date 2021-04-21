import axios from 'axios'

export const CART_REQUEST = 'CART_REQUEST'
export const CART_ERROR = 'CART_ERROR'
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS'
export const GET_CUSTOM_SUCCESS = 'GET_CUSTOM_SUCCESS'
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS'

export const CLEAN_CART = 'CLEAN_CART'


export const cartRequest = () => {
  return {
    type: CART_REQUEST
  }
}

export const cartError = (error) => {
  return {
    type: CART_ERROR,
    error
  }
}

export const getCartSuccess = (result) => {
  return {
    type: GET_CART_SUCCESS,
    result
  }
}

export const getCustomSuccess = (result) => {
  return {
    type: GET_CUSTOM_SUCCESS,
    result,
  }
}

export const deleteCartSuccess = (result, order) => {
  return {
    type: DELETE_CART_SUCCESS,
    result,
    order
  }
}

export const cleanCart = () => {
  return {
    type: CLEAN_CART
  }
}

export const getCustom = (order_id) => {
  return function(dispatch) {
    const token = localStorage.token;
    dispatch(cartRequest())

    axios
      .get(`https://bumbuku.herokuapp.com/custom/order/${order_id}`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      })
      .then((result) => dispatch(getCustomSuccess(result.data)))
      .catch((error) => dispatch(cartError(error)))
  }
}

export const getCart = (user) => {
  return function(dispatch) {
    const token = localStorage.token;
    dispatch(cartRequest())

    axios
      .get(`https://bumbuku.herokuapp.com/order/user/${user}`, {
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
      .catch((error) => dispatch(cartError(error)))
  }
}

export const deleteCart = (order) => {
  return function(dispatch) {
    const token = localStorage.token;
    dispatch(cartRequest());

    axios.delete(`https://bumbuku.herokuapp.com/order/${order._id}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    })
    .then(result => {
      if(order.custom){
        order.custom.forEach(item => {
          axios.delete(`https://bumbuku.herokuapp.com/custom/${item._id}`)
          .catch((error) => dispatch(cartError(error)))
        })
      }
      dispatch(deleteCartSuccess(result.data, order))
    })
    .catch((error) => dispatch(cartError(error)))
  }
}


