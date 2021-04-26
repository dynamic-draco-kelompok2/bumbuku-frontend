import axios from 'axios'

export const GET_BUMBUPRODUK_REQUEST = 'GET_BUMBUPRODUK_REQUEST'
export const GET_BUMBUPRODUK_SUCCESS = 'GET_BUMBUPRODUK_SUCCES'
export const GET_BUMBUPRODUK_ERROR = 'GET_BUMBUPRODUK_ERROR'

export const PUT_BUMBUPRODUK_SUCCESS = 'PUT_BUMBUPRODUK_SUCCESS'

export const GET_BUMBUPRODUKBYID_REQUEST = 'GET_BUMBUPRODUKBYID_REQUEST'
export const GET_BUMBUPRODUKBYID_SUCCESS = 'GET_BUMBUPRODUKBYID_SUCCESS'
export const GET_BUMBUPRODUKBYID_ERROR = 'GET_BUMBUPRODUKBYID_ERROR'

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

export const putBumbuByIdSuccess = () => {
  return {
    type: PUT_BUMBUPRODUK_SUCCESS,
  }
}

export const getBumbuByIdRequest = () => {
  return {
    type: GET_BUMBUPRODUKBYID_REQUEST
  }
}

export const getBumbuByIdSuccess = (result) => {
  return {
    type: GET_BUMBUPRODUKBYID_SUCCESS,
    result
  }
}

export const getBumbuByIdError = (error) => {
  return {
    type: GET_BUMBUPRODUKBYID_ERROR,
    error
  }
}

export const getBumbuProduk = () => {
  return function(dispatch) {
    dispatch(getBumbuProdukRequest())

    axios
      .get("https://bumbuku.herokuapp.com/bumbuproduk")
      .then((result) => dispatch(getBumbuProdukSuccess(result.data)))
      .catch((error) => dispatch(getBumbuProdukError(error)))
  }
}

export const getBumbuById = (_id) => {
  return function(dispatch) {
    dispatch(getBumbuByIdRequest())

    axios
      .get(`https://bumbuku.herokuapp.com/bumbuproduk/${_id}`)
      .then((result) => dispatch(getBumbuByIdSuccess(result.data)))
      .catch((error) => dispatch(getBumbuByIdError(error)))
  }
}

export const putBumbuById = (_id, data) => (dispatch) => {
  dispatch(getBumbuByIdRequest())
  return axios
    .put(`https://bumbuku.herokuapp.com/bumbuproduk/${_id}`, data)
    .then((result) => {
      dispatch(putBumbuByIdSuccess())
      dispatch(getBumbuProduk())
    })
    .catch((error) => dispatch(getBumbuByIdError(error)))
}