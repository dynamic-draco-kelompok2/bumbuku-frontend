import React, { useEffect } from "react";
import CardProduct from "../component/CardProduct";
import Hero from "../component/Hero";
import { getBumbuProduk } from "../redux/actions/bumbuproduk.actions";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import gbrBumbuDasar from "../assets/images/beli-bumbu-dasar-saja.jpg";
import { Helmet } from "react-helmet";
import Footer from '../component/Footer'

const Home = () => {
	const dispatch = useDispatch();
	const bumbuProduk = useSelector((state) => state.handleBumbuProduk.data);

	useEffect(() => {
		dispatch(getBumbuProduk());
	}, [dispatch]);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Bumbuku - Home Page</title>
				<meta name="description" content="about" />
			</Helmet>
			<Container fluid className="tw-bg-desktop tw-h-full">
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
					<div className="tw-mx-auto tw-flex tw-flex-col tw-flex-wrap md:tw-flex-row">
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
									<span className="tw-text-black tw-font-opensans tw-font-bold tw-text-2xl text-center">
										Beli Bumbu Dasar Saja
									</span>
								</div>
							</div>
						</Link>
						{bumbuProduk.map((bumbu) => (
							<CardProduct bumbu={bumbu} key={bumbu._id} />
						))}
					</div>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default Home;
