import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DisplayCustomBumbu from "../component/DisplayCustomBumbu";
import CustomBumbu from "../component/CustomBumbu";
import { Container, Row, Col, Button, Toast, Spinner, Pagination } from "react-bootstrap";
import { RatingStar } from "rating-star";
import { Helmet } from 'react-helmet'
import CommentReview from '../component/CommentReview';

import { postOrder } from "../redux/actions/order.action";
import { getBumbuById } from "../redux/actions/bumbuproduk.actions";
import { getCustomBumbu } from "../redux/actions/custombumbu.actions";
import { getComment } from '../redux/actions/commentproduk.actions';

function ProductDetails() {
	const [customPage, setCustomPage] = useState(false);
	const [addCustom, setAddCustom] = useState([]);
	const [totalItemCustom, setTotalItemCustom] = useState([]);
	const dispatch = useDispatch();
	const customBumbu = useSelector((state) => state.handleCustomBumbu.data);
	const bumbuProduk = useSelector((state) => state.handleBumbuProduk.dataById);
	const orderLoading = useSelector((state) => state.handleOrder);
	const commentProduk = useSelector((state) => state.commentProduk);

	const [show, setShow] = useState({
        valid: false,
        title: "",
        text: "",
    });
	let { id } = useParams();

	const handleCustomBumbu = () => {
		// const data = ["asd","qwe","kkk","bbb"]
		// const promise = new Promise((resolve) => {
        //     console.log("inside");
		// 	resolve();
		// })
		// promise.then(() => {
		// 	console.log("done");
		// })

		// data.forEach((item, index, array) => {
		// 	console.log(item);
		// 	if(index === array.length -1) console.log("done")
		// })
		
		setCustomPage(!customPage);
	};

	const itemPrice = totalItemCustom.reduce(
		(accumulation, currentItem) =>
			accumulation + currentItem.hargaBumbu * currentItem.qty, 0
	);

	const totalprice = bumbuProduk.harga + itemPrice;

	const addCart = () => {
		dispatch(postOrder(id, addCustom, setShow, setAddCustom, setTotalItemCustom));
	};

	useEffect(() => {
		dispatch(getBumbuById(id));
		dispatch(getCustomBumbu());
		dispatch(getComment(id));
	}, [dispatch, id]);


	// Pagination
	// const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(5);

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = commentProduk.data.slice(indexOfFirstPost, indexOfLastPost);

	let paginationActive = currentPage;
	let paginationItems = [];
	let paginationLastNum = Math.round(commentProduk.data.length / 5)
	for (let number = 1; number <= paginationLastNum; number++) {
		paginationItems.push(
		  <Pagination.Item key={number} active={number === paginationActive} onClick={() => setCurrentPage(number)}>
			{number}
		  </Pagination.Item>,
		);
	  }

	const paginate = (item) => {
		console.log(item)
		const num = currentPage + item

		if(num <= paginationLastNum && num > 0){
			setCurrentPage(num);
		}
	}

	// console.log(currentPosts);
	// console.log(commentProduk.data.length)
	
	return (
		<>
		<Helmet>
			<meta charSet="utf-8"/>
			<title>Bumbuku - Details Product</title>
			<meta name="description" content="about"/>
      	</Helmet>
		  {orderLoading.isLoading &&
            <div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex tw-z-30">
                <div className="h-100 d-flex align-items-center justify-content-center">
					<Spinner className="" animation="border" variant="warning"/>
                </div>
            </div>
        	}
			<Container>
				<Row className="d-flex justify-content-center">
				<Toast className="my-toast" onClose={() => setShow({...show,valid:false})} show={show.valid} delay={9000} autohide>
				<Toast.Header className="tw-bg-base text-white">
					<img
					src="holder.js/20x20?text=%20"
					className="rounded mr-2"
					alt=""
					/>
					<strong className="mr-auto">{show.title}</strong>
				</Toast.Header>
				<Toast.Body className="f-bold">{show.text}</Toast.Body>
				</Toast>
				</Row>
				<Row className="mx-2 tw-mt-10">
					<Col xs={12} lg={6}>
						<img
							src={bumbuProduk.image}
							alt="gambar"
							className="tw-rounded tw-w-full tw-h-48 tw-object-cover md:tw-h-96 lg:tw-max-w-mdz lg:tw-h-72"
						/>
						<div className="d-flex justify-content-between mt-3">
							<div className="tw-font-opensans tw-font-bold p-2">Rating</div>
							<div className="">
								<RatingStar
								clickable={false}
								maxScore={5}
								id={bumbuProduk._id ? bumbuProduk._id : `0`}
								rating={ bumbuProduk.overal_star ? bumbuProduk.overal_star : 0}
								/>
							</div>
							
						</div>
					</Col>
					<Col xs={12} lg={6}>
						<div>
							<h3 className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">
								{bumbuProduk.name}
							</h3>
							<span className="tw-font-opensans">
								Rp. {bumbuProduk.harga}
							</span>
						</div>
						<Button
							className="mb-4 d-flex align-items-center justify-content-center tw-bg-icon tw-rounded-xl tw-mt-2 tw-py-2 tw-px-4 tw-font-opensans tw-cursor-pointer tw-tracking-wider tw-text-white tw-border-icon tw-shadow-icon"
							onClick={handleCustomBumbu}
						>
							+ Tambah Bumbu
						</Button>
						<div className="tw-flex tw-flex-col tw-border-t tw-border-grey tw-mt-4 tw-py-2">
							<span className="tw-font-opensans tw-font-bold">
								Description:
							</span>
							<span className="tw-font-opensans">
								{bumbuProduk.description}
							</span>
						</div>
						<DisplayCustomBumbu addCustom = {addCustom}/>
						<div className="tw-border-t tw-border-grey">
							<h1 className="tw-font-bold tw-font-opensans tw-mt-2 tw-text-base">
								Subtotal:
							</h1>
							<div className="tw-flex tw--mt-1">
								<h1 className="tw-font-semibold tw-font-opensans tw-text-base mr-1">
									Harga {bumbuProduk.name}: 
								</h1>
								<span className="tw-font-opensans">
									Rp. {bumbuProduk.harga}
								</span>
							</div>
							{totalItemCustom.length >= 1 ? (
								<div className="tw-flex">
									<h1 className="tw-font-semibold tw-font-opensans tw-text-base mr-1">
										Harga Custom Bumbu:
									</h1>
									<span className="tw-font-opensans tw-text-base">
										Rp. {itemPrice}
									</span>
								</div>
							) : null}
							<div className="tw-flex tw-flex-row">
								<h1 className="tw-font-semibold tw-font-opensans tw-text-base mr-1">
									Total Harga: 
								</h1>
								<span className="tw-font-opensans">
									Rp. {totalprice}
								</span>
							</div>
						</div>
						<div className="tw-mt-2">
							<Button
								onClick={addCart}
								className="tw-bg-base tw-px-4 tw-rounded-xl tw-py-2 tw-text-md tw-font-opensans tw-cursor-pointer tw-text-white tw-border-base tw-shadow-base"
							>
								+ Keranjang
							</Button>
						</div>
					</Col>
					{/* <Col xs={12} className="mt-3">
						<RatingStar
							clickable={false}
							maxScore={5}
							id="123"
							rating={ bumbuProduk.overal_star ? bumbuProduk.overal_star : 0}
						/>
					</Col> */}
					{commentProduk.data.length === 0 ? 
					<Col xs={11} className="mt-5 text-center pt-5">
						No review yet
					</Col>
					:
					<>
					<Col xs={11} className="mt-5">
						<h3 className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">Review</h3>
						<hr></hr>
					</Col>
					<CommentReview item={currentPosts} />
					<Col xs={11} className="justify-content-center d-flex">
						<Pagination>
							<Pagination.Prev onClick={() => paginate(-1)} />
							{paginationItems}
							<Pagination.Next onClick={() => paginate(1)} />
						</Pagination>
					</Col>
					</>
					}
					{/* {commentProduk.data.map((item, index) => (<CommentReview key={index} item={item} />))} */}
					
				</Row>
			</Container>
			{customPage && (
					<CustomBumbu
						customBumbu={customBumbu}
						setCustomPage={setCustomPage}
						addCustom={addCustom}
						setAddCustom={setAddCustom}
						totalItemCustom={totalItemCustom}
						setTotalItemCustom={setTotalItemCustom}
					/>
			)}
		</>
	)
}

export default ProductDetails;
