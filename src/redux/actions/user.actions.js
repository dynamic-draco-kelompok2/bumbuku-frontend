import axios from "axios"

export const UPDATE_ALAMAT_USER_REQUEST = 'UPDATE_ALAMAT_USER'
export const UPDATE_ALAMAT_USER_SUCCESS = 'UPDATE_ALAMAT_USER_SUCCESS'
export const UPDATE_ALAMAT_USER_ERROR = 'UPDATE_ALAMAT_USER_ERROR'

export const updateAlamatRequest = () => {
  return {
    type: UPDATE_ALAMAT_USER_REQUEST
  }
}

export const updateAlamatSuccess = (result) => {
  return {
    type: UPDATE_ALAMAT_USER_SUCCESS,
    result
  }
}

export const updateAlamatError = (error) => {
  return {
    type: UPDATE_ALAMAT_USER_ERROR,
    error
  }
}

export const editAlamatUser = ({_id, newAlamatUser}) => {
  return function(dispatch) {
    dispatch(updateAlamatRequest())
    axios
      .put(`http://bumbuku.herokuapp.com/user/${_id}`, newAlamatUser)
      .then((result) => dispatch(updateAlamatSuccess(result)))
      .catch((error) => dispatch(updateAlamatError(error)))
  }
}