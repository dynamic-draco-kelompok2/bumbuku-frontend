import axios from 'axios';

export const UPLOAD_REQUEST = "UPLOAD_REQUEST";
export const UPLOAD_FAILED = "UPLOAD_FAILED";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";

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

export const uploadAction = (image, event, setShow, setProgressBar, dataCheckout, history) => (dispatch) => {
    event.preventDefault();
    dispatch(uploadRequest());

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
        dataCheckout.forEach(item => {
            axios.delete(`https://bumbuku.herokuapp.com/order/${item._id}`)
            .then(() => {
                if(item.custom){
                    item.custom.forEach(itemCustom => {
                        axios.delete(`https://bumbuku.herokuapp.com/custom/${itemCustom._id}`)
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

        setShow({
            valid: true,
            title: "Success",
            text: "Upload berhasil, pesanan anda sedang diproses!"
        });
        setProgressBar(0);
        
        dispatch(uploadSuccess());
        setTimeout(function(){ window.location.href = "./"},5000);
    })
    .catch(err => {
        setShow({
            valid: true,
            title: "Error",
            text: "Upload gagal!"
        });
        setProgressBar(0);
        console.log(err);
        dispatch(uploadFailed(err))
    })
};