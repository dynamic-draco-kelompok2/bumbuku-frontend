import { 
    UPLOAD_REQUEST, 
    UPLOAD_FAILED, 
    UPLOAD_SUCCESS,
    POST_HISTORY_TRANSAKSI_REQUEST,
    POST_HISTORY_TRANSAKSI_SUCCESS,
    POST_HISTORY_TRANSAKSI_ERROR
} from '../actions/upload.actions'

const initialState = {
    transaction: true,
    isLogged: true,
    isLoading : false,
    error: false,
    data: []
}

const upload = (state = initialState, action) => {
    switch (action.type){
        case UPLOAD_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };

        case UPLOAD_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        
        case UPLOAD_SUCCESS:
            return{
                isLoading: false,
            };
        case POST_HISTORY_TRANSAKSI_REQUEST:
            return {
                ...state,
                transaction: true
            }
        case POST_HISTORY_TRANSAKSI_SUCCESS:
            return {
                ...state,
                data: action.result,
                transaction: true
            }
        case POST_HISTORY_TRANSAKSI_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return  state;
    }
}

export default upload;