import React, { useEffect } from "react";
import CardProduct from "../component/CardProduct";
import Hero from "../component/Hero";
import { getBumbuProduk } from "../redux/actions/bumbuproduk.actions";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import gbrBumbuDasar from "../assets/images/beli-bumbu-dasar-saja.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
	const dispatch = useDispatch();
	const bumbuProduk = useSelector((state) => state.handleBumbuProduk);
	console.log(bumbuProduk);

	useEffect(() => {
		dispatch(getBumbuProduk());
	}, [dispatch]);
	// console.log(bumbuProduk)

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Bumbuku - Home Page</title>
				<meta name="description" content="about" />
			</Helmet>
			<Container className="tw-bg-desktop">
				<Row>
					{bumbuProduk.isLoading === true ? (
						<>
							<div className="text-center tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 tw-z-20"></div>
							<Row className="position-absolute justify-content-center w-100 h-100 align-content-center align-items-center tw-z-30">
								<Spinner className="" animation="border" variant="warning" />
							</Row>
						</>
					) : null}
					<Hero />
				</Row>
			</Container>

			<Container className="tw-mt-5 ">
				<Row className="justify-content-center">
					<Col lg={3}>
						<div className="">
							<Link
								// key={index}
								to={`/bumbudasardetails/`}
							>
								<div className="tw-w-56 tw-h-72 tw-bg-white tw-m-2 tw-rounded tw-shadow-2xl">
									<img
										src={gbrBumbuDasar}
										alt="produk"
										className="tw-w-full tw-h-48 tw-object-cover tw-rounded tw-p-2"
									/>
									<div className="tw-p-2">
										<span className="tw-text-black tw-font-opensans tw-font-bold tw-text-lg">
											Beli Bumbu Dasar Saja
										</span>
									</div>
								</div>
							</Link>
						</div>
					</Col>
					<Col lg={9}>
						<CardProduct bumbuProduk={bumbuProduk.data} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
