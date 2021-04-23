import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { postOrderBumbuDasar } from "../redux/actions/order.action";


function CardBumbuDasar(bumbuDasar) {
	const dispatch = useDispatch()

	const productBumbuDasar = bumbuDasar.bumbuDasar;
	// console.log("productBumbuDasar", productBumbuDasar);

	const [counter, setCounter] = useState(1);

	const [totalItemBumbuDasar, setTotalItemBumbuDasar] = useState([]);
	
	const handleCounter = (accumNumber, id) => {
		const deleteBumbu = totalItemBumbuDasar.filter((item) => item._id !== id);
		const bumbu = totalItemBumbuDasar.find((item) => item._id === id);
		if (accumNumber === -1) {
			if (bumbu.quantity === 1) {
				setTotalItemBumbuDasar(deleteBumbu);
			} else {
				const updateQtyCustom = totalItemBumbuDasar.map((item) => {
					if (item._id === id) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				});
				setTotalItemBumbuDasar(updateQtyCustom);
			}
		} else if (accumNumber === 1) {
			const updateQtyCustom = totalItemBumbuDasar.map((item) => {
				if (item._id === id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setTotalItemBumbuDasar(updateQtyCustom);
		}
	};

	const handleAddButton = (bumbu) => {
		let bumbuToAdd = {...bumbu, quantity: bumbu.quantity+1}
		// console.log(bumbuToAdd);

		setTotalItemBumbuDasar([bumbuToAdd, ...totalItemBumbuDasar]);
		setCounter(counter);
	};
	console.log("total item BumbuDasar", totalItemBumbuDasar);

	const addCart = (id) => {
		// console.log("kiriman ke cart", itemBumbuDasar);
		dispatch(postOrderBumbuDasar(id, totalItemBumbuDasar));
		console.log(totalItemBumbuDasar);
	};

	const itemPrice = totalItemBumbuDasar.reduce(
		(accumulation, currentItem) =>
			accumulation + currentItem.harga * currentItem.quantity,
		0
	);

	const jmlQuantity = totalItemBumbuDasar.reduce(
		(accumulation, currentItem) =>
			accumulation + currentItem.quantity,
		0
	);

	return (
		<>
			<Container>
				<div className="tw-flex tw-flex-col tw-w-full tw-flex-wrap tw-items-center md:tw-flex-row mt-5 ">
					{productBumbuDasar.map((bumbu, index) => (
						<Row className="mx-2" key={index}>
							<Col className="tw-w-56  tw-bg-white tw-m-2 tw-rounded tw-shadow-2xl">
								<Row>
									<div className="" key={bumbu._id}>
										<img
											src={bumbu.image}
											alt="produk"
											className="tw-w-full tw-h-48 tw-object-cover tw-rounded tw-p-2"
										/>
									</div>
								</Row>
								<Row className="tw-p-2" key={index}>
									<div>
										<h4 className="tw-text-black tw-font-opensans">
											{bumbu.name}
										</h4>
										<span className="tw-text-black tw-font-opensans">
											Rp. {bumbu.harga} / gram
										</span>
									</div>
								</Row>
								<Row className="tw-pl-2">
									<div className="tw-flex tw-justify-end tw-pb-2 tw-mb-1">
										{totalItemBumbuDasar.find(
											(item) => item._id === bumbu._id
										) ? (
											<div className="tw-pt-2">
												<div className="tw-items-center tw-flex tw-justify-center">
													<div
														className="tw-bg-base tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-cursor-pointer tw-items-center"
														onClick={() => handleCounter(-1, bumbu._id)}
													>
														<span className="tw-text-sm tw-mx-auto tw--mt-1 tw-text-white">
															-
														</span>
													</div>
													<input
														className="tw-w-10 tw-h-5 tw-mx-2 tw-rounded tw-text-center tw-text-xs tw-font-opensans"
														type="string"
														value={
															totalItemBumbuDasar.find(
																(item) => item._id === bumbu._id
															).quantity
														}
														onChange={(e) => setCounter(e.target.value)}
														readOnly
													/>
													<div
														className="tw-bg-base tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-cursor-pointer tw-items-center"
														onClick={() => handleCounter(1, bumbu._id)}
													>
														<span className="tw-text-sm tw-mx-auto tw--mt-1 tw-text-white">
															+
														</span>
													</div>
												</div>
											</div>
										) : (
											<button
												className="tw-text-white focus:tw-outline-none tw-bg-base tw-w-24 tw-rounded tw-text-xs tw-p-1 tw-mt-2 tw-font-opensans"
												onClick={() => handleAddButton(bumbu)}
											>
												Add
											</button>
										)}
									</div>
								</Row>
							</Col>
						</Row>
					))}
				</div>
			</Container>
			<Container className="tw-mt-10">
			<Row className="lineListOrder">
						{/* <p >INI LINE PER ITEM</p> */}
					</Row>

			<Row>
						<Col className="tw-ml-4">
				
							<Row>
								<Col>
									<p className="tw-pb-1 tw-font-opensans tw-font-regular">
										Total Item Bumbu Dasar:
									</p>
								</Col>
								<Col>
									<p className="tw-pb-1 tw-font-opensans tw-font-regular">
									{totalItemBumbuDasar.length} Item
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="tw-pb-1 tw-font-opensans tw-font-regular">
										Total Quantity:
									</p>
								</Col>
								<Col>
									<p className="tw-pb-1 tw-font-opensans tw-font-regular">
									{jmlQuantity} gram
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
										Rp. {itemPrice}
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
							onClick={()=> addCart(totalItemBumbuDasar)}
							className="mt-3 tw-rounded-lg tw-py-2 tw-w-full tw-bg-base tw-border-base tw-shadow-base btnPlaceOrder"
						>
							Add To Cart
						</Button>
					</Row>
			</Container>
		</>
	);
}

export default CardBumbuDasar;
