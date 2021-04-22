import { UPLOAD_REQUEST, UPLOAD_FAILED, UPLOAD_SUCCESS, } from '../actions/upload.actions'

const initialState = {
    isLogged: true,
    isLoading : false,
    error: false,
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

        default:
            return  state;
    }
}

export default upload;