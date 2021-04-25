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

export const getcommentSuccess = (data) => {
    return {
        type: GET_COMMENT_SUCCESS,
        payload: data
    };
};

export const postcommentSuccess = (data) => {
    return {
        type: POST_COMMENT_SUCCESS,
        payload: data
    };
};

export const commentFailed = (err) => {
    return {
        type: COMMENT_FAILED,
        err,
    };
};

export const postComment = (event, data) => (dispatch) => {
    event.preventDefault();
    dispatch(commentRequest());
    
    return axios
    .post("https://bumbuku.herokuapp.com/comment/", data)
    .then(result => {
        dispatch(commentSuccess());
    })
    .catch(err => {
        dispatch(commentFailed(err))
    })
};
