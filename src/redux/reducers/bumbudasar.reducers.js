import {
  GET_BUMBUDASAR_REQUEST,
  GET_BUMBUDASAR_SUCCESS,
  GET_BUMBUDASAR_ERROR,
  GET_BUMBUDASARBYID_REQUEST,
  GET_BUMBUDASARBYID_SUCCESS,
  GET_BUMBUDASARBYID_ERROR
} from '../actions/bumbudasar.actions'

const initialState = {
  dataById:[],
  data: [],
  isLoading : false,
  error: null
}

const handleBumbuDasar = (state = initialState, action) => {
  switch(action.type) {
    case GET_BUMBUDASAR_REQUEST:
      console.log("data bumbu dasar");
      return {
        ...state,
        isLoading: true
      }
    case GET_BUMBUDASAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result
      }
    case GET_BUMBUDASAR_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case GET_BUMBUDASARBYID_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_BUMBUDASARBYID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataById: action.result
      }
    case GET_BUMBUDASARBYID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default handleBumbuDasar