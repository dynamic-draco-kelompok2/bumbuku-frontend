import {
  CART_REQUEST,
  CART_ERROR,
  GET_CART_SUCCESS,
  GET_CUSTOM_SUCCESS,
  DELETE_CART_SUCCESS,
  CLEAN_CART
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
    case CART_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case CART_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        data: action.result,
        custom: getCustomItem(action.result), 
        totalCustom: getTotal(getCustomItem(action.result)),
        isLoading: false
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
      return {
        ...state,
        data: NewData,
        custom: getCustomItem(NewData), 
        totalCustom: getTotal(getCustomItem(NewData)),
        isLoading: false
      }
    case DELETE_CART_SUCCESS:
      const newData = state.data.filter(item => (item._id !== action.order._id));
      return {
        ...state,
        data: newData,
        custom: getCustomItem(newData), 
        totalCustom: getTotal(getCustomItem(newData)),
        isLoading: false
      }
    case CLEAN_CART:
      return {
        ...state,
        data: [],
        custom: [],
        totalCustom: 0
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