import axios from 'axios';
import { postComment } from './commentproduk.actions';
import { putBumbuById } from './bumbuproduk.actions';

export const REQUEST = 'REQUEST'
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS'
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS'
export const FAILED = 'FAILED'
export const REVIEWBYID = 'REVIEWBYID'

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

export const getReviewByIDSuccess = (data) => {
  return {
    type: REVIEWBYID,
    data
  }
}

export const getReviewByID = (id) => {
  return function(dispatch) {
    dispatch(getReviewRequest())

    axios
      .get(`https://bumbuku.herokuapp.com/review/${id}`)
      .then((result) => dispatch(getReviewByIDSuccess(result.data)))
      .catch((error) => dispatch(getReviewFailed(error)))
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

export const deleteReview = (id, setShow, dataComment, idProduk, dataBumbu) => {
  return function(dispatch) {
    dispatch(getReviewRequest())

    axios
      .delete(`https://bumbuku.herokuapp.com/review/${id}`)
      .then((result) => {
        dispatch(postComment(dataComment));
        dispatch(putBumbuById(idProduk, dataBumbu));
        dispatch(deleteReviewSuccess(id));
        setShow({
          valid: true,
          title: "Success",
          text: "Review anda telah dikirim",
      })
      })
      .catch((error) => {
        dispatch(getReviewFailed(error))
        setShow({
          valid: true,
          title: "Error",
          text: "Failed to submit review",
      })
      })
  }
}