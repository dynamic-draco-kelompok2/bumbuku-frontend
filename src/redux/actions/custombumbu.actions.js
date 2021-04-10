import axios from 'axios';

export const GET_CUSTOMBUMBU_REQUEST = 'GET_CUSTOMBUMBU_REQUEST'
export const GET_CUSTOMBUMBU_SUCCESS = 'GET_CUSTOMBUMBU_SUCCESS'
export const GET_CUSTOMBUMBU_ERROR = 'GET_CUSTOMBUMBU_ERROR'

export const getCustomBumbuRequest = () => {
  return {
    type: GET_CUSTOMBUMBU_REQUEST
  }
}

export const getCustomBumbuSuccess = (result) => {
  return {
    type: GET_CUSTOMBUMBU_SUCCESS,
    result
  }
}

export const getCustomBumbuError = (error) => {
  return {
    type: GET_CUSTOMBUMBU_ERROR,
    error
  }
}

export const getCustomBumbu = () => {
  return function(dispatch) {
    dispatch(getCustomBumbuRequest())

    axios
      .get("http://bumbuku.herokuapp.com/bumbudasar")
      .then((result) => dispatch(getCustomBumbuSuccess(result.data)))
      .catch((error) => dispatch(getCustomBumbuError(error)))
  }
}