import axios from 'axios'
import { getCart } from './cart.action'

export const ORDER_REQUEST = 'ORDER_REQUEST'
export const ORDER_ERROR = 'ORDER_ERROR'
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS'

export const ORDER_BUMBUDASAR_REQUEST = 'ORDER_BUMBUDASAR_REQUEST'
export const ORDER_BUMBUDASAR_SUCCESS = 'ORDER_BUMBUDASAR_SUCCESS'
export const ORDER_BUMBUDASAR_ERROR = 'ORDER_BUMBUDASAR_ERROR'

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

export const postOrderError = (error, setShow) => {
  setShow({
    valid: true,
    title: "Error",
    text: "Gagal masukkan ke keranjang!",
  })
  return {
    type: ORDER_ERROR,
    error
  }
}

export const postOrderBumbuDasarRequest = () => {
  return {
    type: ORDER_BUMBUDASAR_REQUEST
  }
}

export const postOrderBumbuDasarSuccess = (result) => {
  return {
    type: ORDER_BUMBUDASAR_SUCCESS,
    result
  }
}

export const postOrderBumbuDasarError = (error) => {
  return {
    type: ORDER_BUMBUDASAR_ERROR,
    error
  }
}

export const postOrder = (produkId, customData, setShow, setAddCustom, setTotalItemCustom, history, isLogin) => {
  return function(dispatch) {
    // console.log(JSON.parse(localStorage.payload)._id)
    if(!isLogin){
      history.push("/login");
    } else {

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
            customData.forEach((item, index, array) => {
                const dataCustomSend = {
                    order_id: result.data._id,
                    bumbuDasar_id: item.id,
                    gram: item.qty
                }
                axios.post('https://bumbuku.herokuapp.com/custom/', dataCustomSend, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }})
                .catch(e => dispatch(postOrderError(e, setShow)))
                if(index === array.length -1){
                  dispatch(postOrderSuccess(result.data))
                  dispatch(getCart(JSON.parse(localStorage.payload)._id))
                  setShow({
                    valid: true,
                    title: "Add Cart",
                    text: "Berhasil masukkan ke keranjang!",
                  });
                  setAddCustom([]);
                  setTotalItemCustom([]);
                }
            })
          } else {
            dispatch(postOrderSuccess(result.data))
            dispatch(getCart(JSON.parse(localStorage.payload)._id))
              setShow({
                valid: true,
                title: "Add Cart",
                text: "Berhasil masukkan ke keranjang!",
              });
              setAddCustom([]);
              setTotalItemCustom([]);
          }
        })
      .catch((error) => {
        dispatch(postOrderError(error, setShow));
      })
    }
  }
}

export const postOrderBumbuDasar = (bumbuDasar, setShow, setTotalItemBumbuDasar, history, isLogin) => {
  // console.log(bumbuDasar)

  if(!isLogin){
    history.push("/login");
  } else {

  return function(dispatch) {
    const token = localStorage.token;
    const userId = JSON.parse(localStorage.payload)._id;
    dispatch(postOrderBumbuDasarRequest())

    bumbuDasar.forEach((item) => {
      const sendDataOrder = {
        user_id: userId,
        bumbuDasar_id: item._id,
        gram: item.quantity
      }
      axios
        .post('https://bumbuku.herokuapp.com/order/', sendDataOrder, {
          headers: {
            Authorization: 'Bearer' + token
          }
        })
        .then((result) => {
          dispatch(postOrderBumbuDasarSuccess(result.data));
          dispatch(getCart(JSON.parse(localStorage.payload)._id))
          setShow({
            valid: true,
            title: "Add Cart",
            text: "Berhasil masukkan ke keranjang!",
          });
          setTotalItemBumbuDasar([]);
        })
        .catch((error) => {
          dispatch(postOrderError(error));
          setShow({
            valid: true,
            title: "Error",
            text: "Gagal masukkan ke keranjang!",
          });
        })
    })
  }
}
}

