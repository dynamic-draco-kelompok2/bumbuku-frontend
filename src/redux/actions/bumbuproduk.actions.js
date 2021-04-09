import axios from 'axios'

export const GET_BUMBUPRODUK_REQUEST = 'GET_BUMBUPRODUK_REQUEST'
export const GET_BUMBUPRODUK_SUCCESS = 'GET_BUMBUPRODUK_SUCCES'
export const GET_BUMBUPRODUK_ERROR = 'GET_BUMBUPRODUK_ERROR'

export const getBumbuProdukRequest = () => {
  return {
    type: GET_BUMBUPRODUK_REQUEST
  }
}

export const getBumbuProdukSuccess = (result) => {
  return {
    type: GET_BUMBUPRODUK_SUCCESS,
    result
  }
}

export const getBumbuProdukError = (error) => {
  return {
    type: GET_BUMBUPRODUK_ERROR,
    error
  }
}

export const getBumbuProduk = () => {
  return function(dispatch) {
    dispatch(getBumbuProdukRequest())

    axios
      .get("http://bumbuku.herokuapp.com/bumbuproduk")
      .then((result) => dispatch(getBumbuProdukSuccess(result.data)))
      .catch((error) => dispatch(getBumbuProdukError(error)))
  }
}