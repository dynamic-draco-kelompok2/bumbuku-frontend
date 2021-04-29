import {
  GET_DATA_HISTORYTRANSAKSI_REQUEST,
  GET_DATA_HISTORYTRANSAKSI_SUCCESS,
  GET_DATA_HISTORYTRANSAKSI_ERROR
} from '../actions/historytransaction.actions.js'

const initialState = {
  data: []
}

const handleHistoryTransaksi = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_HISTORYTRANSAKSI_REQUEST:
      return {
        ...state
      }
    case GET_DATA_HISTORYTRANSAKSI_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_DATA_HISTORYTRANSAKSI_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleHistoryTransaksi;