import axios from "axios";

export const GET_CATEGORY_BUMBU_REQUEST = 'GET_CATEGORY_BUMBU_REQUEST'
export const GET_CATEGORY_BUMBU_SUCCESS = 'GET_CATEGORY_BUMBU_SUCCESS'
export const GET_CATEGORY_BUMBU_ERROR = 'GET_CATEGORY_BUMBU_ERROR'

export const getCategoryBumbuRequest = () => {
  return {
    type: GET_CATEGORY_BUMBU_REQUEST
  }
}

export const getCategoryBumbuSuccess = (result) => {
  return {
    type: GET_CATEGORY_BUMBU_SUCCESS,
    result
  }
}

export const getCategoryBumbuError = (error) => {
  return {
    type: GET_CATEGORY_BUMBU_ERROR,
    error
  }
}

export const getCategoryBumbu = () => {
  return function(dispatch) {
    dispatch(getCategoryBumbuRequest())
    axios
      .get('https://bumbuku.herokuapp.com/category')
      .then((result) => dispatch(getCategoryBumbuSuccess(result.data)))
      .catch((error) => dispatch(getCategoryBumbuError(error)))
  }
}