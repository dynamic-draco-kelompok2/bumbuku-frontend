import {
  UPDATE_ALAMAT_USER_REQUEST,
  UPDATE_ALAMAT_USER_SUCCESS,
  UPDATE_ALAMAT_USER_ERROR
} from '../actions/user.actions'

const initialState = {
  error: null
}

const handleUser = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_ALAMAT_USER_REQUEST: 
      return {
        ...state
      }
    case UPDATE_ALAMAT_USER_SUCCESS: 
      return {
        ...state,
        data: action.result
      }
    case UPDATE_ALAMAT_USER_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: 
      return state
  }
}

export default handleUser