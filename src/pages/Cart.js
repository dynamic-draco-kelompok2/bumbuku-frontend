import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import arrowDropdown from "../assets/icons/arrow-dropdown.svg";
import { Helmet } from 'react-helmet'

import { getCart, deleteCart } from "../redux/actions/cart.action";

function Cart() {
	const dataOrder = useSelector((state) => state.handleCart.data);
	const totalHargaCustom = useSelector((state) => state.handleCart.totalCustom);
	const CustomItem = useSelector((state) => state.handleCart.custom);
	const dispatch = useDispatch();

	useEffect(() => {
		const User = JSON.parse(localStorage.payload)._id;
		dispatch(getCart(User));
	}, [dispatch]);

	const totalHargaBase = dataOrder.reduce(
		(total, value) => total + value.bumbuProduk_id.harga,
		0
	);

	const deleteCartHandle = (order) => {
		dispatch(deleteCart(order));
	}

	return (
		<>
			<Helmet>
        <meta charSet="utf-8"/>
        <title>Bumbuku - Cart</title>
        <meta name="description" content="about"/>
      </Helmet>
			{dataOrder.length === 0 ? (
				<Container>
					<Row className="tw-pt-40 mx-2">
						<p className="tw-font-opensans tw-font-bold titleCart tw-m-0 tw-text-basic">
							No Order Found
						</p>
					</Row>
				</Container>
			) : (
				<Container className="tw-mt-10">
					<Row className="mx-2">
						<Col lg={6} md={9}>
							<div>
								<p className="tw-font-opensans tw-font-regular subTitleCart tw-m-0 ">
									Pesanan Anda
								</p>
								<div>
									<p className="textSubCart tw-lg:w-1/2">
										Terimakasih sudah memesan di bumbu Ku! berikut ini adalah
										rincian pesanan anda:
									</p>
								</div>
							</div>
						</Col>
					</Row>

					{dataOrder.map((order, index) => (
						<div key={index}>
							<Row className="lineListOrder">
								{/* <p >INI LINE PER ITEM</p> */}
							</Row>
							<Row>
								<Col
									className="mr-5 mb-5 tw-ml-8"
									sm={10}
									lg={6}
									md={10}
								>
									<div key={index} className="tw-bg-white borderCustom tw-shadow-xl">
										<img
											src={order.bumbuProduk_id.image}
											alt="gambar"
											className="tw-rounded tw-w-full tw-object-cover tw-lg:max-w-lg imgBaseCart tw-rounded-b-none"
										/>
										<div className="px-3">
											<h4 className="tw-text-lg tw-font-opensans tw-font-bold textBase">
												{order.bumbuProduk_id.name}
											</h4>
											<p className="tw-pt-1 tw-font-opensans tw-font-regular textHargaBase">
												Rp. {order.bumbuProduk_id.harga}
											</p>
											<div className="tw-grid tw-divide-y tw-text-grey">
												<p className="tw-font-opensans tw-font-semibold descriptionTitle tw-text-black tw-m-0">
													Description
												</p>
												<p className="tw-pt-1 tw-font-opensans tw-font-regular deskripsiText">
													{order.bumbuProduk_id.description}
												</p>
											</div>
										</div>
										
									</div>
								</Col>

								<Col className="tw-mx-4 tw-mb-2">
									<div className="justify-content-center d-flex mb-3">
										<div className="tw-cursor-pointer" onClick={() => deleteCartHandle(order)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
											<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
											</svg>
										</div>	
									</div>
									{order.custom ? (
										<Accordion defaultActiveKey="0" className="tw-shadow-xl tw-rounded-md">
											<Card className="tw-rounded-md">
												<Accordion.Toggle as={Card.Header} eventKey="0" className="tw-cursor-pointer">
													<div className="d-flex align-items-center justify-content-between">
														<div className="tw-font-opensans tw-font-bold titleTextCustom">Custom</div>
														<div className="">
															<img
																src={arrowDropdown}
																alt="gambar custom"
																className="tw-w-5 tw-h-5 tw-m-5 tw-pr-0 ml-auto"
															/>
														</div>
													</div>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body className="cartCustomBody">
														{!!order.custom &&
															order.custom.map((custom, index) => (
																<div
																	key={index}
																	className="tw-flex borderCustomList "
																>
																	<img
																		src={custom.bumbuDasar_id.image}
																		alt="gambar custom"
																		className="tw-rounded-lg tw-w-14 tw-h-14 tw-object-cover tw-lg:max-w-lg "
																	/>
																	<div>
																		<p className="tw-y-1 tw-font-opensans tw-font-bold textCustomBumbu">
																			{custom.bumbuDasar_id.name}
																		</p>
																		<p className="textCustomGram">
																			{custom.gram} Gram{" "}
																		</p>
																	</div>
																</div>
															))}
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									) : (
										<></>
									)}
								</Col>
							</Row>

						</div>
					))}

					<Row className="lineListOrder">
						{/* <p >INI LINE PER ITEM</p> */}
					</Row>

					<Row>
						<Col className="tw-ml-4 tw-mb-6">
							<h4 className="text-lg font-semibold font-opensans">
								Ringkasan Belanja
							</h4>
						</Col>
					</Row>

					<Row>
						<Col className="tw-ml-4">
							<Row>
								<Col>
									<p className="tw-pyb-2 tw-font-opensans tw-font-regular">
										Total Harga base:
									</p>
								</Col>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										Rp. {totalHargaBase}
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										Total Item:
									</p>
								</Col>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										{dataOrder.length} Item
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										Total Harga Custom:
									</p>
								</Col>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										Rp. {totalHargaCustom}
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										Total Item Custom:
									</p>
								</Col>
								<Col>
									<p className="tw-pb-2 tw-font-opensans tw-font-regular">
										{CustomItem.length} Item
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="tw-font-opensans tw-font-bold txtTotalHarga">
										Total Harga:
									</p>
								</Col>
								<Col>
									<p className="tw-font-opensans tw-font-bold txtTotalHarga">
										Rp. {totalHargaBase + totalHargaCustom}
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
					<div className="linePlaceOrder">
						{/* <p >INI LINE PER ITEM</p> */}
					</div>
					<Row className="tw-pb-40">
						<Button
							type="submit"
							variant="primary"
							className="mt-3 tw-rounded-lg tw-py-2 tw-w-full tw-bg-base tw-border-base tw-shadow-base btnPlaceOrder"
						>
							Beli
						</Button>
					</Row>
				</Container>
			)}
		</>
	);
}

export default Cart;
