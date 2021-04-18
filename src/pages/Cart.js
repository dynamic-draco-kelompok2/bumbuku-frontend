import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../redux/actions/cart.action";
import { Container, Row, Col, Button } from "react-bootstrap";

function Cart() {
	const dataOrder = useSelector((state) => state.handleCart.data);
	const totalHargaCustom = useSelector((state) => state.handleCart.totalCustom);
	const CustomItem = useSelector((state) => state.handleCart.custom);
	const dispatch = useDispatch();

	//Get Per Custom Item
	// console.log(totalHargaCustom)

	// console.log("ini data order ", dataOrder);

	useEffect(() => {
		const User = JSON.parse(localStorage.payload)._id;

		dispatch(getCart(User));
		// console.log("data order dlm use uffect ", dataOrder);
	}, [dispatch]);

	//Total Harga all Base Item
	const totalHargaBase = dataOrder.reduce(
		(total, value) => total + value.bumbuProduk_id.harga,
		0
	);
	// console.log('Ini harga Total base semua item', totalHargaBase);

	return (
		<>
			{dataOrder.length === 0 ? (
				<div>No Order</div>
			) : (
				<Container>
					<Row className="tw-pt-40 mx-2">
						<Col>
							<div>
								<p className="tw-font-opensans tw-font-bold titleCart tw-m-0">
									Cart
								</p>
								<p className="tw-font-opensans tw-font-regular subTitleCart tw-m-0">
									Pesanan Anda
								</p>
								<div>
									<p className="textSubCart tw-lg:w-1/2">
										Terimakasih sudah memesan di bumbu Ku! berikut ini
										adalah rincian pesanan anda:
									</p>
								</div>
							</div>
						</Col>
					</Row>

					{dataOrder.map((order, index) => (
						<>
							<Row>
								<Col className="tw-bg-white borderCustom mr-5 mb-5 tw-ml-8">
									<div key={index}>
										<div className="" key="1">
											<div className="">
												<img
													src={order.bumbuProduk_id.image}
													alt="gambar"
													className="tw-rounded tw-w-full tw-h-52 tw-object-cover tw-lg:max-w-lg "
												/>
												<h4 className="tw-text-lg tw-font-opensans tw-font-bold textBase">
													Base : {order.bumbuProduk_id.name}
												</h4>
												<p className="tw-py-1 tw-font-opensans tw-font-regular textHargaBase">
													Harga : Rp. {order.bumbuProduk_id.harga}
												</p>
												<div className="tw-grid tw-divide-y tw-text-grey">
													<p className="tw-font-opensans tw-font-semibold descriptionTitle tw-text-black tw-m-0">
														Description
													</p>
													<p className="tw-pt-4 tw-font-opensans tw-font-regular">
														{order.bumbuProduk_id.description}
													</p>
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col className="tw-mx-4 tw-mb-2">
									<h4 className="tw-font-opensans tw-font-bold titleTextCustom">
										Custom:{" "}
									</h4>
									{!!order.custom &&
										order.custom.map((custom, index) => (
											<div
												key={index}
												className="tw-flex tw-m-2 tw-shadow-2xl tw-p-4 borderCustom"
											>
												<img
													src={custom.bumbuDasar_id.image}
													alt="gambar custom"
													className="tw-rounded-lg  tw-w-20 tw-h-20 tw-object-cover tw-lg:max-w-lg "
												/>
												<div>
													<p className="tw-y-1 tw-font-opensans tw-font-bold textCustomBumbu">
														{custom.bumbuDasar_id.name}
													</p>
													<p className="textCustomGram">{custom.gram} Gram </p>
												</div>
											</div>
										))}
								</Col>
								<div></div>
							</Row>
							<div className="lineListOrder">
								{/* <p >INI LINE PER ITEM</p> */}
							</div>
						</>
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
						
							{/* <p className="tw-pb-2 tw-font-opensans tw-font-regular">
								Total Harga Custom: Rp. {totalHargaCustom}
							</p>
							<p className="tw-pb-2 tw-font-opensans tw-font-regular">
								Total Item Custom: {CustomItem.length} Item
							</p>
							<p className="tw-text-xl tw-font-bold tw-font-regular">
								Total Harga: Rp. {totalHargaBase + totalHargaCustom}
							</p> */}
						</Col>
					</Row>
					<div className="linePlaceOrder">
						{/* <p >INI LINE PER ITEM</p> */}
					</div>
					<Row className="tw-pb-40">
						<Button
							type="submit"
							variant="primary"
							className="mx-4 mt-3 tw-rounded-lg tw-py-2 tw-w-full tw-bg-base tw-border-base tw-shadow-base btnPlaceOrder"
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
