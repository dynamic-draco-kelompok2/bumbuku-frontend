import axios from 'axios'

export const POST_ORDER_REQUEST = 'GET_CART_REQUEST'
export const POST_ORDER_SUCCESS = 'GET_CART_SUCCES'
export const POST_ORDER_ERROR = 'GET_CART_ERROR'


export const postOrderRequest = () => {
  return {
    type: POST_ORDER_REQUEST
  }
}

export const postOrderSuccess = (result) => {
  return {
    type: POST_ORDER_SUCCESS,
    result
  }
}

export const postOrderError = (error) => {
  return {
    type: POST_ORDER_ERROR,
    error
  }
}

export const postOrder = (produkId, customData) => {
  return function(dispatch) {
    const token = localStorage.token;
    const userId = JSON.parse(localStorage.payload)._id;
    dispatch(postOrderRequest())

    const dataSend = {
        user_id: userId,
        bumbuProduk_id: produkId
    }

    axios
      .post(`http://bumbuku.herokuapp.com/order/`, dataSend, {
        headers: {
          Authorization: 'Bearer ' + token
        }})
      .then((result) => {
          if(customData.length > 0){
            customData.forEach(item => {
                const dataCustomSend = {
                    order_id: result.data._id,
                    bumbuDasar_id: item.id,
                    gram: item.qty
                }
                axios.post('http://bumbuku.herokuapp.com/custom/', dataCustomSend, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }})
                .catch(e => dispatch(postOrderError(e)))
            })
            dispatch(postOrderSuccess(result.data))
            
          } else {
            dispatch(postOrderSuccess(result.data))
          }
        
        
        })
      .catch((error) => dispatch(postOrderError(error)))
  }
}

