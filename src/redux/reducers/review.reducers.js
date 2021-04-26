import {
    REQUEST,
    REVIEW_SUCCESS,
    DELETE_REVIEW_SUCCESS,
    FAILED,
    REVIEWBYID
  } from '../actions/review.action'
  
  const initialState = {
    data: [],
    dataByID: {},
    isLoading: true,
    isLoadingByID: true,
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
      case DELETE_REVIEW_SUCCESS:
        const newData = state.data.filter(item => item._id !== action.id)
        return {
          ...state,
          isLoading: false,
          data: newData
        }
      case FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      case REVIEWBYID:
        return {
          ...state,
          dataByID: action.data,
          isLoadingByID: false,
        }
      
      default: 
        return state
    }
  }
  
  export default handleReview