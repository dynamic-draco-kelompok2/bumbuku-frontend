import axios from 'axios'

export const GET_BUMBUDASAR_REQUEST = 'GET_BUMBUDASAR_REQUEST'
export const GET_BUMBUDASAR_SUCCESS = 'GET_BUMBUDASAR_SUCCES'
export const GET_BUMBUDASAR_ERROR = 'GET_BUMBUDASAR_ERROR'

export const GET_BUMBUDASARBYID_REQUEST = 'GET_BUMBUDASARBYID_REQUEST'
export const GET_BUMBUDASARBYID_SUCCESS = 'GET_BUMBUDASARBYID_SUCCESS'
export const GET_BUMBUDASARBYID_ERROR = 'GET_BUMBUDASARBYID_ERROR'

export const getBumbuDasarRequest = () => {
  // console.log('tes');
  return {
    type: GET_BUMBUDASAR_REQUEST
  }
}

export const getBumbuDasarSuccess = (result) => {
  return {
    type: GET_BUMBUDASAR_SUCCESS,
    result
  }
}

export const getBumbuDasarError = (error) => {
  return {
    type: GET_BUMBUDASAR_ERROR,
    error
  }
}

export const getBumbuDasarByIdRequest = () => {
  return {
    type: GET_BUMBUDASARBYID_REQUEST
  }
}

export const getBumbuDasarByIdSuccess = (result) => {
  return {
    type: GET_BUMBUDASARBYID_SUCCESS,
    result
  }
}

export const getBumbuDasarByIdError = (error) => {
  return {
    type: GET_BUMBUDASARBYID_ERROR,
    error
  }
}

export const getBumbuDasar = () => {
  return function(dispatch) {
    dispatch(getBumbuDasarRequest())

    axios
      .get("https://bumbuku.herokuapp.com/bumbuDasar/")
      .then((result) => dispatch(getBumbuDasarSuccess(result.data)))
      .catch((error) => dispatch(getBumbuDasarError(error)))
  }
}

// export const getBumbuById = (_id) => {
//   return function(dispatch) {
//     dispatch(getBumbuByIdRequest())

//     axios
//       .get(`https://bumbuku.herokuapp.com/bumbuDASAR/${_id}`)
//       .then((result) => dispatch(getBumbuDasarByIdSuccess(result.data)))
//       .catch((error) => dispatch(getBumbuDasarByIdError(error)))
//   }
// }