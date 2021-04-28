import axios from 'axios';

export const UPLOAD_REQUEST = "UPLOAD_REQUEST";
export const UPLOAD_FAILED = "UPLOAD_FAILED";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const POST_HISTORY_TRANSAKSI_REQUEST = "POST_HISTORY_TRANSAKSI_REQUEST"
export const POST_HISTORY_TRANSAKSI_SUCCESS = "POST_HISTORY_TRANSAKSI_SUCCESS"
export const POST_HISTORY_TRANSAKSI_ERROR = "POST_HISTORY_TRANSAKSI_ERROR"


export const uploadRequest = () => {
    return {
        type: UPLOAD_REQUEST,
    };
};

export const uploadSuccess = (data) => {
    return {
        type: UPLOAD_SUCCESS,
        payload: data
    };
};

export const uploadFailed = (err) => {
    return {
        type: UPLOAD_FAILED,
        err,
    };
};

export const postHistoryTransaksiRequest = () => {
    return {
        type: POST_HISTORY_TRANSAKSI_REQUEST
    }
}

export const postHistoryTransaksiSuccess = (result) => {
    return {
        type: POST_HISTORY_TRANSAKSI_SUCCESS,
        result
    }
}

export const postHistoryTransaksiError = (error) => {
    return {
        type: POST_HISTORY_TRANSAKSI_ERROR,
        error
    }
}

export const uploadAction = (image, event, setShow, setProgressBar, dataCheckout, history) => (dispatch) => {
    event.preventDefault();
    dispatch(uploadRequest());

    const userId = JSON.parse(localStorage.payload)._id;
    const token = localStorage.token;
    const fd = new FormData();
    fd.append('file', image);
    fd.append('upload_preset', 'krwxcfvb');
    
    return axios
    .post("https://api.cloudinary.com/v1_1/bumbuku/image/upload/", fd, {
        onUploadProgress: ProgressEvent => {
            setProgressBar(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
        }
    })
    .then(result => {
        dataCheckout.forEach((item, index, arr) => {

            const endTransaction = {
                status_transaction: false
            }

            if(item.bumbuProduk_id === undefined){      
                axios.put(`https://bumbuku.herokuapp.com/order/${item._id}`, endTransaction, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }})
                    .then(() => {
                        if(item.custom){
                            item.custom.forEach(itemCustom => {
                                dispatch(deleteCustomBumbuProduk(itemCustom, setShow, setProgressBar))
                            })
                        }
                    })
                    .catch(err => {
                        setShow({
                            valid: true,
                            title: "Failed",
                            text: "Kesalahan pada sistem"
                        });
                        setProgressBar(0);
                        console.log(err);
                        dispatch(uploadFailed(err))
                    })
            } else{

            const dataReview = {
                user_id: userId,
                bumbuProduk_id: item.bumbuProduk_id._id
            }

            axios.post('https://bumbuku.herokuapp.com/review/', dataReview, {
                headers: {
                    Authorization: 'Bearer ' + token
                }})
                .then(() => {

                    axios.put(`https://bumbuku.herokuapp.com/order/${item._id}`, endTransaction, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }})
                    .then(() => {
                        if(item.custom){
                            item.custom.forEach(itemCustom => {
                                dispatch(deleteCustomBumbuProduk(itemCustom, setShow, setProgressBar))
                            })
                        }
                    })
                    .catch(err => {
                        setShow({
                            valid: true,
                            title: "Failed",
                            text: "Kesalahan pada sistem"
                        });
                        setProgressBar(0);
                        console.log(err);
                        dispatch(uploadFailed(err))
                    })

                })
                .catch(err => {
                    setShow({
                        valid: true,
                        title: "Failed",
                        text: "Kesalahan pada sistem"
                    });
                    setProgressBar(0);
                    console.log(err);
                    dispatch(uploadFailed(err))
                })
            }

            if(index === arr.length-1){
                setShow({
                    valid: true,
                    title: "Success",
                    text: "Upload berhasil, pesanan anda sedang diproses!"
                });
                setProgressBar(0);
                dispatch(uploadSuccess());

                dataCheckout.forEach((items) => {
                    const dataHistory = {
                        orders_id: items._id,
                        user_id: userId
                    }
                    axios
                    .post('https://bumbuku.herokuapp.com/history-transaksi', dataHistory, {
                        headers: {
                            Authorization: 'Bearer' + token
                        }
                    })
                    .then((result) => dispatch(postHistoryTransaksiSuccess(result.data)))
                    .catch((error) => dispatch(postHistoryTransaksiError(error)))
                })
                // setTimeout(function(){ window.location.href = "./"},5000);
            }
        })
        
    })
    .catch(err => {
        setShow({
            valid: true,
            title: "Error",
            text: "Upload gagal!"
        });
        setProgressBar(0);
        console.log(err)
        dispatch(uploadFailed(err))
    })
};