import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBumbuById } from "../redux/actions/bumbuproduk.actions";
import { getCustomBumbu } from "../redux/actions/custombumbu.actions";
import DisplayCustomBumbu from "../component/DisplayCustomBumbu";
import CustomBumbu from "../component/CustomBumbu";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { Helmet } from 'react-helmet'

import { postOrder } from "../redux/actions/order.action";

function ProductDetails() {
	const [customPage, setCustomPage] = useState(false);
	const [addCustom, setAddCustom] = useState([]);
	const [totalItemCustom, setTotalItemCustom] = useState([]);
	const dispatch = useDispatch();
	const customBumbu = useSelector((state) => state.handleCustomBumbu.data);
	const bumbuProduk = useSelector((state) => state.handleBumbuProduk.dataById);
	const [show, setShow] = useState(false);

	let { id } = useParams();

	const handleCustomBumbu = () => {
		setCustomPage(!customPage);
	};

	const itemPrice = totalItemCustom.reduce(
		(accumulation, currentItem) =>
			accumulation + currentItem.hargaBumbu * currentItem.qty,
		0
	);

	const totalprice = bumbuProduk.harga + itemPrice;

	const addCart = () => {
		dispatch(postOrder(id, addCustom));

	};

	useEffect(() => {
		dispatch(getBumbuById(id));
		dispatch(getCustomBumbu());
	}, [dispatch, id]);

	
	return (
		<>
		<Helmet>
			<meta charSet="utf-8"/>
			<title>Bumbuku - Details Product</title>
			<meta name="description" content="about"/>
      	</Helmet>
			<Container>
				<Row className="d-flex justify-content-center">
				<Toast className="my-toast" onClose={() => setShow(false)} show={show} delay={9000} autohide>
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
							className="tw-rounded tw-w-full tw-h-48 tw-object-cover md:tw-h-96 lg:tw-max-w-md lg:tw-h-72"
						/>
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
