import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBumbuById } from "../redux/actions/bumbuproduk.actions";
import { getCustomBumbu } from "../redux/actions/custombumbu.actions";
import { postOrder } from "../redux/actions/order.action";
import DisplayCustomBumbu from "../component/DisplayCustomBumbu";
import CustomBumbu from "../component/CustomBumbu";
import { Helmet } from 'react-helmet'

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
		<>
			<Helmet>
        <meta charSet="utf-8"/>
        <title>Bumbuku - Details Product</title>
        <meta name="description" content="about"/>
      </Helmet>
			<div className="tw-bg-desktop">
				<div className="tw-flex tw-flex-col tw-bg-desktop p-4 lg:tw-flex-row lg:tw-justify-between lg:tw-max-w-5xl tw-mx-auto">
					<div className="my-auto">
						<img
							src={bumbuProduk.image}
							alt="gambar"
							className="tw-rounded tw-w-full tw-h-48 tw-object-cover md:tw-h-96 lg:tw-max-w-md lg:tw-h-72"
						/>
					</div>
					<div className="tw-flex tw-flex-col lg:tw-w-96">
						<div>
							<h3 className="tw-font-opensans tw-pt-2 tw-mb-1 tw-font-bold">
								{bumbuProduk.name}
							</h3>
							<span className="tw-font-opensans">
								Rp. {bumbuProduk.harga}
							</span>
						</div>
						<button
							className="d-flex align-items-center justify-content-center tw-bg-icon tw-rounded-xl tw-mt-2 tw-py-2 tw-px-4 tw-font-opensans tw-cursor-pointer tw-tracking-wider tw-text-white"
							onClick={handleCustomBumbu}
						>
							+ Tambah Bumbu
						</button>
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
							<button
								onClick={addCart}
								className="tw-bg-base tw-w-full tw-rounded-xl tw-py-2 tw-text-md tw-font-opensans tw-cursor-pointer tw-text-white"
							>
								+ Keranjang
							</button>
						</div>
					</div>
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
			</div>
		</>
	)
}

export default ProductDetails;
