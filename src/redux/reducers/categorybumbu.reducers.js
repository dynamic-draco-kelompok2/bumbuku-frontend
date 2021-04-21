import {
  GET_CATEGORY_BUMBU_REQUEST,
  GET_CATEGORY_BUMBU_SUCCESS,
  GET_CATEGORY_BUMBU_ERROR
} from '../actions/categorybumbu.actions'

const initialState = {
  data: [],
  error: null
}
const handleCategory = (state = initialState, action) => {
  switch(action.type) {
    case GET_CATEGORY_BUMBU_REQUEST:
      return {
        ...state
      }
    case GET_CATEGORY_BUMBU_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_CATEGORY_BUMBU_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}


export default handleCategory