import axios from 'axios'

export const ORDER_REQUEST = 'ORDER_REQUEST'
export const ORDER_ERROR = 'ORDER_ERROR'
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS'

export const postOrderRequest = () => {
  return {
    type: ORDER_REQUEST
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
    type: ORDER_ERROR,
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
      .post(`https://bumbuku.herokuapp.com/order/`, dataSend, {
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
                axios.post('https://bumbuku.herokuapp.com/custom/', dataCustomSend, {
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

