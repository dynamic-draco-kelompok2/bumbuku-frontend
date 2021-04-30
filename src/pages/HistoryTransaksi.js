import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHistoryTransaksi } from "../redux/actions/historytransaction.actions";
import { Container, Row, Col, Pagination } from "react-bootstrap";
// import HistorybumbuProduk from "../component/HistorybumbuProduk";

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

	// Pagination
	// const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(10);

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = orders.slice(indexOfFirstPost, indexOfLastPost);

	let paginationActive = currentPage;
	let paginationItems = [];
	let paginationLastNum = Math.round(orders.length / 10)
	for (let number = 1; number <= paginationLastNum; number++) {
		paginationItems.push(
		  <Pagination.Item key={number} active={number === paginationActive} onClick={() => setCurrentPage(number)} className="pagination-bg-red pagination-color-red">
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

	return (
		<Container className="tw-mt-10 h-footer tw-pb-10">
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
					<Col className="tw-mt-10" xs={12}>
						{currentPosts.map((item, index) =>
							item.bumbuProduk_id ? (
								<Row className="mx-1" key={index}>
									<Col className="tw-w-12  tw-bg-white tw-mb-2 tw-rounded tw-shadow-2xl tw-p-2">
										<div className="tw-text-black tw-font-opensans d-flex flex-md-row w-100 flex-column">
											<div className="tw-flex tw-w-full">
												<img
													src={item.bumbuProduk_id.image}
													alt="produk"
													className="tw-w-10 tw-h-10 tw-object-cover tw-mr-3"
												/>
												<div>
												<p className="m-0 tw-font-bold">{item.bumbuProduk_id.name}</p>
												<p className="m-0">&nbsp;</p>
												</div>
											</div>
											<div className="tw-w-40 tw-border-grey md:tw-border-l mt-2 md:tw-pl-2">
											<p className="m-0">Rp. {item.bumbuProduk_id.harga}</p>
											</div>
										</div>
									</Col>
								</Row>
							) : (
								<Row className="mx-1" key={index}>
									<Col className="tw-w-12  tw-bg-white tw-mb-2 tw-rounded tw-shadow-2xl tw-p-2">
										<div className="tw-text-black tw-font-opensans d-flex flex-md-row w-100 flex-column">
											<div className="tw-flex tw-w-full">
												<img
													src={item.bumbuDasar_id.image}
													alt="produk"
													className="tw-w-10 tw-h-10 tw-object-cover tw-mr-3"
												/>
												<div>
												<p className="m-0 tw-font-bold">{item.bumbuDasar_id.name}</p>
												<p className="m-0">{item.gram} gram</p>
												</div>
											</div>
											<div className="tw-w-40 tw-border-grey md:tw-border-l mt-2 md:tw-pl-2">
											<p className="m-0">Rp. {item.bumbuDasar_id.harga}</p>
											
											</div>
										</div>
									</Col>
								</Row>
							)
						)}
					</Col>
					<Col className="d-flex justify-content-center">
					<Pagination>
							<Pagination.Prev className="pagination-color-red" onClick={() => paginate(-1)} />
							{paginationItems}
							<Pagination.Next className="pagination-color-red" onClick={() => paginate(1)} />
						</Pagination>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default HistoryTransaksi;
