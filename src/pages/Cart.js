import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../redux/actions/cart.action";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import arrowDropdown from "../assets/icons/arrow-dropdown.svg";

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

	return (
		<>
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
							<Row>
								<Col
									className="tw-bg-white borderCustom mr-5 mb-5 tw-ml-8"
									sm={10}
									lg={6}
									md={10}
								>
									<div key={index}>
										<div className="" key="1">
											<div className="">
												<img
													src={order.bumbuProduk_id.image}
													alt="gambar"
													className="tw-rounded tw-w-full tw-object-cover tw-lg:max-w-lg imgBaseCart"
												/>
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
									</div>
								</Col>

								<Col className="tw-mx-4 tw-mb-2">
									{order.custom ? (
										<Accordion defaultActiveKey="0">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Row className="align-items-center ">
														<Col className="tw-font-opensans tw-font-bold titleTextCustom">Custom</Col>
														<Col className="">
															<img
																src={arrowDropdown}
																alt="gambar custom"
																className="tw-w-5 tw-h-5 tw-m-5 tw-pr-0 ml-auto"
															/>
														</Col>
													</Row>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														{!!order.custom &&
															order.custom.map((custom, index) => (
																<div
																	key={index}
																	className="tw-flex tw-shadow-2xl borderCustomList "
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

							<Row className="lineListOrder">
								{/* <p >INI LINE PER ITEM</p> */}
							</Row>
						</div>
					))}

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
							Place Order
						</Button>
					</Row>
				</Container>
			)}
		</>
	);
}

export default Cart;
