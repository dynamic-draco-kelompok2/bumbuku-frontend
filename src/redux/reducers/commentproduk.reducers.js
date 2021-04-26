import { COMMENT_REQUEST, COMMENT_FAILED, GET_COMMENT_SUCCESS, POST_COMMENT_SUCCESS, } from '../actions/commentproduk.actions'

const initialState = {
    data: [],
    isLogged: true,
    isLoading : false,
    error: false,
}

const commentProduk = (state = initialState, action) => {
    switch (action.type){
        case COMMENT_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };

        case COMMENT_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        
        case GET_COMMENT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.result
            };

        case POST_COMMENT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: [...state.data,
                    action.result]
            };

        default:
            return  state;
    }
}

export default commentProduk;