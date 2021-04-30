import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHistoryTransaksi } from "../redux/actions/historytransaction.actions";
import { Container, Row, Col } from "react-bootstrap";
import HistorybumbuProduk from "../component/HistorybumbuProduk";

const HistoryTransaksi = () => {
	const dispatch = useDispatch();
	const historyTransaction = useSelector(
		(state) => state.handleHistoryTransaksi.data
	);
	console.log(historyTransaction);
	useEffect(() => {
		dispatch(getHistoryTransaksi());
	}, [dispatch]);

	let orders = historyTransaction.map((orderan, index) => orderan.orders_id);
	console.log("ini data order id", orders);

	let bumbuProdukItem = orders.filter((item) => item.bumbuProduk_id);
	console.log("ini bumbu PRODUK item", bumbuProdukItem);

	let bumbuDasarItem = orders.filter((item) => item.bumbuDasar_id);
	console.log("ini bumbu DASAR item", bumbuDasarItem);

	return (
		<Container className="tw-mt-10 h-footer tw-pb-10">
			{/* <div className="p-4"> */}
				{/* <div>
					<p className="tw-font-opensans tw-font-regular subTitleCart tw-m-0 ">
						History Transaksi
					</p>
					<div>
						<p className="textSubCart tw-lg:w-1/2">
							Berikut ini adalah history pemesanan anda:
						</p>
					</div>
				</div> */}
        <Row className="mx-2">
						<Col lg={6} md={9}>
							<div>
								<p className="tw-font-opensans tw-font-regular subTitleCart tw-m-0 ">
                History Transaksi
								</p>
								<div>
									<p className="textSubCart tw-lg:w-1/2">
                  Berikut ini adalah history pemesanan anda:
									</p>
								</div>
							</div>
						</Col>
					</Row>

				<Container>
					<Row>
						<Col>
							<h5 className="tw-mt-10">bumbu Produk</h5>
							{bumbuProdukItem.map((item, index) => (
								<Row className="mx-1" key={index}>
									<Col className="tw-w-12  tw-bg-white tw-mb-2 tw-rounded tw-shadow-2xl">
										<div>
											<span className="tw-text-black tw-font-opensans">
												<p className="m-0">{item.bumbuProduk_id.name}</p>
												<img
													src={item.bumbuProduk_id.image}
													alt="produk"
													className="tw-w-10 tw-h-10 tw-object-cover"
												/>
												<p className="m-0">{item.bumbuProduk_id.harga}</p>
											</span>
										</div>
									</Col>
								</Row>
							))}
						</Col>
						<Col>
							<h5 className="tw-mt-10">bumbu Dasar</h5>

							{bumbuDasarItem.map((item, index) => (
								<Row className="mx-1" key={index}>
									<Col className="tw-w-12  tw-bg-white tw-mb-2 tw-rounded tw-shadow-2xl">
										<div>
											<span className="tw-text-black tw-font-opensans">
												<p>{item.bumbuDasar_id}</p>

												<p>Gram: {item.gram}</p>
											</span>
										</div>
									</Col>
								</Row>
							))}
						</Col>
					</Row>
				</Container>
			{/* </div> */}
		</Container>
	);
};

export default HistoryTransaksi;
