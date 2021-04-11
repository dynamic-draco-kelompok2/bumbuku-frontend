import {
  GET_CUSTOMBUMBU_REQUEST,
  GET_CUSTOMBUMBU_SUCCESS,
  GET_CUSTOMBUMBU_ERROR,
} from '../actions/custombumbu.actions.js'

const initialState = {
  data: [],
  error: null
}

const handleCustomBumbu = (state = initialState, action) => {
  switch(action.type) {
    case GET_CUSTOMBUMBU_REQUEST:
      return {
        ...state
      }
    case GET_CUSTOMBUMBU_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_CUSTOMBUMBU_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleCustomBumbu