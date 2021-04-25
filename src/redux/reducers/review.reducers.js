import {
    REQUEST,
    REVIEW_SUCCESS,
    FAILED
  } from '../actions/review.action'
  
  const initialState = {
    data: [],
    isLoading: false,
    error: null
  }
  
  const handleReview = (state = initialState, action) => {
    switch(action.type) {
      case REQUEST: 
        return {
          ...state,
          isLoading: true
        }
      case REVIEW_SUCCESS: 
        return {
          ...state,
          isLoading: false,
          data: action.result
        }
      case FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      default: 
        return state
    }
  }
  
  export default handleReview