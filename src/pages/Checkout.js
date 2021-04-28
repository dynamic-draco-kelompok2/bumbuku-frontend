import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Toast, Button, Form, ProgressBar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import EditProfile from '../component/EditProfile'

import { getCart } from "../redux/actions/cart.action";
import { uploadAction } from '../redux/actions/upload.actions';

function Checkout() {
    const history = useHistory();
    const [editProfile, setEditProfile] = useState(false);
    const dataCheckout = useSelector((state) => state.handleCart);
    const uploadLoading = useSelector(state => state.upload);
	const dispatch = useDispatch();
    const uploadRef = React.createRef();
    const [progressBar, setProgressBar] = useState(0);

    const [show, setShow] = useState({
        valid: false,
        title: "",
        text: "",
    });

    const handleEditProfile = () => {
        setEditProfile(!editProfile)
    }

    useEffect(() => {
		const User = JSON.parse(localStorage.payload)._id;
		dispatch(getCart(User));
	}, [dispatch]);

	const totalHargaBase = dataCheckout.data.reduce((total, value) => {
        let harga = 0;
        if(value.bumbuProduk_id){
            harga = value.bumbuProduk_id.harga;
        }else{
            harga = value.bumbuDasar_id.harga * value.gram;
        }
        return total + harga
    },0);

    const uploadHandle = (e) => {
        if(e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png"){
            dispatch(uploadAction(e.target.files[0], e, setShow, setProgressBar, dataCheckout.data, history));
        }else {
            setShow({
                valid: true,
                title: "File Salah",
                text: "File yang anda upload salah!"
            })
        }
    }

    return (
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Bumbuku - Checkout</title>
            <meta name="description" content="about"/>
        </Helmet>
        <Container className="h-footer">
            <Row className="d-flex justify-content-center">
            <Toast className="my-toast" onClose={() => setShow({...show,valid:false})} show={show.valid} delay={9000} autohide>
            <Toast.Header className="tw-bg-base text-white">
                <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
                />
                <strong className="mr-auto">{show.title}</strong>
                {/* <small>just sec ago</small> */}
            </Toast.Header>
            <Toast.Body className="f-bold">{show.text}</Toast.Body>
            </Toast>
            </Row>
            {dataCheckout.data.length === 0 ?
            <Row className="tw-pt-40 mx-2">
                <p className="tw-font-opensans tw-font-bold titleCart tw-m-0 tw-text-basic">
                    No Order Found
                </p>
            </Row>
            :
            <>
            <Row className="mx-2 tw-mt-10">
                <Col lg={6} md={9}>
					<div>
						<p className="tw-font-opensans tw-font-regular subTitleCart tw-m-0 ">
							Checkout
						</p>
					</div>
				</Col>
                <Col xs={12} className="lineListOrder"></Col>
            </Row>
            <Row className="mx-2">
                <Col xs={12} className="">
                    <div className="tw-bg-white px-3 py-2 tw-rounded-md tw-shadow-xl">
                        <p className="tw-font-opensans tw-font-regular fw-600 mb-2">Alamat Pengiriman</p>
                        <hr></hr>
                        <p className="tw-pt-1 mb-1 fw-600 tw-font-opensans tw-font-regular deskripsiText">{JSON.parse(localStorage.payload).name}</p>
                        <p className="tw-pt-1 mb-1 tw-font-opensans tw-font-regular deskripsiText">{JSON.parse(localStorage.payload).email}</p>
                        <p className="tw-pt-1 mb-1 tw-font-opensans tw-font-regular deskripsiText">{JSON.parse(localStorage.payload).alamat}</p>
                        <div className="d-flex justify-content-end pb-3">
                            <Button 
                            onClick={handleEditProfile}
                            variant="primary"
							className="mt-3 tw-rounded-lg tw-py-2 tw-w-full tw-bg-base tw-border-base tw-shadow-base btnPlaceOrder">
                                Edit Alamat
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mx-2">
                <Col xs={12} className="lineListOrder"></Col>
                <Col xs={12} className="tw-ml-4 tw-mb-6">
					<h4 className="text-lg font-semibold font-opensans">
						Ringkasan Pembayaran :
					</h4>
				</Col>
                <Col xs={11} className="tw-ml-4 ">
                    <div className="d-flex justify-content-sm-between flex-column flex-sm-row">
                        <p className="tw-pb-0 pb-lg-2 mb-1 mb-sm-3 tw-font-opensans tw-font-regular fw-600">
							Metode Pembayaran :
						</p>
                        <p className="tw-pb-2 tw-font-opensans tw-font-regular">
							Transfer BCA (123456)
						</p>
                    </div>
                    <div className="d-flex justify-content-sm-between flex-column flex-sm-row">
                    <p className="tw-pb-0 pb-lg-2 mb-1 mb-sm-3 tw-font-opensans tw-font-regular fw-600">
							Total ongkos kirim :
						</p>
                        <p className="tw-pb-2 tw-font-opensans tw-font-regular">
							Rp. 10.000
						</p>
                    </div>
                    <div className="d-flex justify-content-sm-between flex-column flex-sm-row">
                    <p className="tw-pb-0 pb-lg-2 mb-1 mb-sm-3 tw-font-opensans tw-font-regular fw-600">
							Total harga pesanan :
						</p>
                        <p className="tw-pb-2 tw-font-opensans tw-font-regular">
							Rp. {(totalHargaBase + dataCheckout.totalCustom).toLocaleString().replaceAll(",", ".")}
						</p>
                    </div>
                    <div className="d-flex justify-content-sm-between flex-column flex-sm-row">
                    <p className="tw-pb-0 pb-lg-2 mb-1 mb-sm-3 tw-font-opensans tw-font-regular fw-600">
							Total harga :
						</p>
                        <p className="tw-font-opensans tw-font-bold txtTotalHarga">
							Rp. {(totalHargaBase + dataCheckout.totalCustom + 10000).toLocaleString().replaceAll(",", ".")}
						</p>
                    </div>
                </Col>
                <Col xs={12} className="linePlaceOrder">
					{/* <p >INI LINE PER ITEM</p> */}
				</Col>
                <Col xs={12}>
                    <div className="tw-pb-20">
                        <div className="d-none">
                            <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input ref={uploadRef} onChange={uploadHandle} required accept="image/png,image/jpeg"/>
                            <Form.File.Label data-browse="Browse">
                                Choose File
                            </Form.File.Label>
                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Must be image .jpg or .png!</Form.Control.Feedback>
                            </Form.File>
                        </div>  
                        <Button 
                        onClick={() => uploadRef.current.click()}
                        className="mt-3 tw-rounded-lg tw-w-full tw-py-2 tw-bg-base tw-border-base tw-shadow-base btnPlaceOrder uploadBtn">
                            Upload Bukti Pembayaran
                        </Button>
                    </div>
                    
                </Col>
            </Row>
            </>
            }
        </Container>
        {uploadLoading.isLoading &&
            <div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <ProgressBar animated striped variant="primary" className="my-progress-base w-50" now={progressBar} />
                </div>
            </div>
        }
        <EditProfile 
            editProfile={editProfile}
            setEditProfile={setEditProfile}
        />
        </>
    )
}

export default Checkout
