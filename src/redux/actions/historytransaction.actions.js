import axios from "axios";

export const GET_DATA_HISTORYTRANSAKSI_REQUEST = 'GET_DATA_HISTORYTRANSAKSI_REQUEST';
export const GET_DATA_HISTORYTRANSAKSI_SUCCESS = 'GET_DATA_HISTORYTRANSAKSI_SUCCESS';
export const GET_DATA_HISTORYTRANSAKSI_ERROR = 'GET_DATA_HISTORYTRANSAKSI_ERROR';

export const getDataHistoryRequest = () => {
  return {
    type: GET_DATA_HISTORYTRANSAKSI_REQUEST 
  }
}

export const getDataHistorySuccess = (result) => {
  return {
    type: GET_DATA_HISTORYTRANSAKSI_SUCCESS,
    result
  }
}

export const getDataHistoryError = (error) => {
  return {
    type: GET_DATA_HISTORYTRANSAKSI_ERROR,
    error
  }
}

export const getHistoryTransaksi = () => {
  return function(dispatch) {
    dispatch(getDataHistoryRequest())

    axios
      .get("https://bumbuku.herokuapp.com/history-transaksi/")
      .then((result) => dispatch(getDataHistorySuccess(result.data)))
      .catch((error) => dispatch(getDataHistoryError(error)))
  }
}
