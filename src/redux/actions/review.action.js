import axios from 'axios';

export const REQUEST = 'REQUEST'
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS'
export const FAILED = 'FAILED'

export const getReviewRequest = () => {
  return {
    type: REQUEST
  }
}

export const getReviewSuccess = (result) => {
  return {
    type: REVIEW_SUCCESS,
    result
  }
}

export const getReviewFailed = (error) => {
  return {
    type: FAILED,
    error
  }
}

export const getReview = (userId) => {
  return function(dispatch) {
    dispatch(getReviewRequest())

    axios
      .get(`https://bumbuku.herokuapp.com/review/user/${userId}`)
      .then((result) => dispatch(getReviewSuccess(result.data)))
      .catch((error) => dispatch(getReviewFailed(error)))
  }
}