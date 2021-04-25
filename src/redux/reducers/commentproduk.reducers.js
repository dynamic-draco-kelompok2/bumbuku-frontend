import { bindActionCreators } from 'redux';
import { COMMENT_REQUEST, COMMENT_FAILED, GET_COMMENT_SUCCESS, POST_COMMENT_SUCCESS, } from '../actions/commentproduk.actions'

const initialState = {
    data: [],
    isLogged: true,
    isLoading : false,
    error: false,
}

const upload = (state = initialState, action) => {
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
        
        case COMMENT_SUCCESS:
            return{
                isLoading: false,
                data: action.result
            };

        default:
            return  state;
    }
}

export default upload;