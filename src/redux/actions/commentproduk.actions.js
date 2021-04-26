import axios from 'axios';

export const COMMENT_REQUEST = "COMMENT_REQUEST";
export const COMMENT_FAILED = "COMMENT_FAILED";
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";

export const commentRequest = () => {
    return {
        type: COMMENT_REQUEST,
    };
};

export const getcommentSuccess = (result) => {
    return {
        type: GET_COMMENT_SUCCESS,
        result
    };
};

export const postcommentSuccess = (result) => {
    return {
        type: POST_COMMENT_SUCCESS,
        result
    };
};

export const commentFailed = (err) => {
    return {
        type: COMMENT_FAILED,
        err,
    };
};

export const postComment = (data) => (dispatch) => {
    dispatch(commentRequest());
    
    return axios
    .post("https://bumbuku.herokuapp.com/comment/", data)
    .then(result => {
        dispatch(postcommentSuccess(result.data));
    })
    .catch(err => {
        dispatch(commentFailed(err))
    })
};

export const getComment = (product_id) => (dispatch) => {
    dispatch(commentRequest());

    return axios
    .get(`https://bumbuku.herokuapp.com/comment/product/${product_id}`)
    .then(result => {
        dispatch(getcommentSuccess(result.data));
    })
    .catch(err => {
        dispatch(commentFailed(err))
    })
}