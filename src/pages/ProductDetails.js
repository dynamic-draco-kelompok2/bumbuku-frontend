import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBumbuById } from "../redux/actions/bumbuproduk.actions";
import { getCustomBumbu } from "../redux/actions/custombumbu.actions";
import { postOrder } from "../redux/actions/order.action";
import CustomBumbu from "../component/CustomBumbu";
import { Image, Container, Row, ListGroup, Col, Figure, Table } from "react-bootstrap";

function ProductDetails() {
	const [customPage, setCustomPage] = useState(false);
	const [addCustom, setAddCustom] = useState([]);
	const [totalItemCustom, setTotalItemCustom] = useState([]);
	const dispatch = useDispatch();
	const customBumbu = useSelector((state) => state.handleCustomBumbu.data);
	const bumbuProduk = useSelector((state) => state.handleBumbuProduk.dataById);
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
		<Container className="flex flex-col lg:flex-row lg:justify-content-center lg:items-center lg:px-10 xl:px-14">
			<Row>
				<Col>
					<img
						src={bumbuProduk.image}
						alt="gambar"
						className="rounded w-full lg:max-w-lg"
					/>
				</Col>
			</Row>
			<Row className="flex flex-col lg:flex-row lg:justify-content-center lg:items-center lg:px-10 xl:px-14">
				<Col className="lg:ml-28" key={bumbuProduk._id}>
					<div className="">
						<div className="pt-20">
							<p className="font-opensans font-bold textTitle m-0">
								{bumbuProduk.name}
							</p>
							<p className="font-opensans font-regular textHarga text-grey m-0">
								Rp.{bumbuProduk.harga}
							</p>
							<div className="grid divide-y text-grey">
								<p className="font-opensans font-semibold descriptionTitle text-black m-0">
									Description
								</p>
								<p className="font-opensans font-light textDescription">
									{bumbuProduk.description}
								</p>
							</div>
							<div className="lg:w-40 py-6">
								<button
									className="bg-icon rounded-xl py-2 px-4 uppercase font-opensans font-bold cursor-pointer tracking-wider text-white  textBtnCustom"
									onClick={handleCustomBumbu}
								>
									Add Custom
								</button>
							</div>

							<div className="pb-4 pt-2 px-4 bg-white rounded shadow-2xl">
		
								<Table className="w-full text-left borderless" >
									{/* <div> */}
										<thead>
											<tr className="font-opensans font-semibold text-basic">
												<th>Image</th>
												<th>Item</th>
												<th>Harga</th>
												<th>Berat</th>

											</tr>
												{/* <hr className="hr w-full"/> */}
										</thead>
										{/* <div >
											<hr className="hr"/>
										</div> */}
										{!!addCustom &&
											addCustom.map((item) => (
												<tbody key={item.id}>
													<tr>
														<td>
															<img
																src={item.imageBumbu}
																alt="gambar"
																className="w-10 h-10 object-cover mr-2"
															/>
														</td>
														<td className="text-sm font-medium">
															{item.namaBumbu}
														</td>
														<td className="text-sm font-medium">
															Rp. {item.hargaBumbu}
														</td>
														<td className="text-sm font-medium">
															{item.qty} gram
														</td>
													</tr>
												</tbody>
											))}
									{/* </div> */}
								</Table> 
							</div>
						</div>
					</div>

					<div>
						<h1 className="titleSubtotal font-semibold font-opensans">
							Subtotal:
						</h1>
						<div className="flex ">
							<h1 className="flex textSubtotal">Harga {bumbuProduk.name}: Rp. {bumbuProduk.harga}</h1>
						</div>
						{totalItemCustom.length >= 1 ? (
							<div>
								<h1 className="flex textSubtotal">Harga total custom bumbu: Rp. {!!itemPrice && itemPrice}</h1>
							</div>
						) : null}
						<div className="flex textSubtotal">
							<h1 className="flex textSubtotal">Total Harga: Rp. {totalprice}</h1>
						</div>
					</div>
					<div className="lg:w-40">
						<button
							onClick={addCart}
							className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full textBtnCustomRed"
						>
							Add to cart
						</button>
					</div>
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
				</Col>
			</Row>
		</Container>
	);
}

export default ProductDetails;
