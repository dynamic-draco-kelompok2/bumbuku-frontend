import axios from 'axios';

export const REQUEST = 'REQUEST'
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS'
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS'
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

export const deleteReviewSuccess = (id) => {
  return {
    type: DELETE_REVIEW_SUCCESS,
    id
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

export const deleteReview = (id) => {
  return function(dispatch) {
    dispatch(getReviewRequest())

    axios
      .delete(`https://bumbuku.herokuapp.com/review/${id}`)
      .then((result) => dispatch(deleteReviewSuccess(id)))
      .catch((error) => dispatch(getReviewFailed(error)))
  }
}