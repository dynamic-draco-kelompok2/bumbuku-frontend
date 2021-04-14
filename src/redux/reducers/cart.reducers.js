import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CUSTOM_REQUEST,
  GET_CUSTOM_SUCCESS,
  GET_CUSTOM_ERROR
} from '../actions/cart.action'

const initialState = {
  isLoading: false,
  custom: [],
  totalCustom: 0,
  data: [],
  error: null
}

const handleCart = (state = initialState, action) => {
  switch(action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        data: action.result,
        custom: getCustomItem(action.result), 
        totalCustom: getTotal(getCustomItem(action.result)),
        isLoading: false
      }
    case GET_CART_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case GET_CUSTOM_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_CUSTOM_SUCCESS:
      // console.log(action);
      const NewData = state.data.map(item => {
        if (item._id === action.result[0].order_id){
          return {
            ...item,
            custom: action.result
          }
        }
        return item
      })
      // console.log(NewData);

      return {
        ...state,
        data: NewData,
        custom: getCustomItem(NewData), 
        totalCustom: getTotal(getCustomItem(NewData)),
        isLoading: false
      }
    case GET_CUSTOM_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

function getCustomItem(dataOrder){
  // console.log(dataOrder)
  const getHargaCustom = dataOrder.filter((order) => {
		return order.custom !== undefined

	})
  // console.log(getHargaCustom)
  return getHargaCustom
}

function getTotal(data){
  // console.log(data)
  if(data.length > 0 ){ 
    let n = 0;
    for(let i=0; i < data.length; i++){
      // console.log(data[i])
      const totalCustomPerItem = data[i].custom.reduce((totalCustom, item) => 
          totalCustom + (item.bumbuDasar_id.harga * item.gram), 0
      )
      n += totalCustomPerItem
    }
    // console.log(n)
    return n
  } 

  return 0
}
export default handleCart