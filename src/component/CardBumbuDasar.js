import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function CardBumbuDasar(bumbuDasar) {
	const productBumbuDasar = bumbuDasar.bumbuDasar;
	console.log("productBumbuDasar", productBumbuDasar);

	const [counter, setCounter] = useState(1);

	const [totalItemBumbuDasar, setTotalItemBumbuDasar] = useState([]);


	const handleCounter = (accumNumber, id) => {
		console.log('handle counter dpt');
	  const deleteBumbu = totalItemBumbuDasar.filter((item) => item._id !== id)
		const bumbu = totalItemBumbuDasar.find((item) => item._id === id)
	  if(accumNumber === -1) {
			
	    if(bumbu.quantity === 1 ){
				setTotalItemBumbuDasar(deleteBumbu)
			} else {
				const updateQtyCustom = totalItemBumbuDasar.map((item) => {
					if(item._id === id) {
						return {...item, quantity: item.quantity - 1}
					}
					return item
				})
				setTotalItemBumbuDasar(updateQtyCustom)
			}
	  } else if(accumNumber === 1) {
	    const updateQtyCustom = totalItemBumbuDasar.map((item) => {
	      if(item._id === id) {
	        return {...item, quantity: item.quantity + 1}
	      }
	      return item
	    })
	    setTotalItemBumbuDasar(updateQtyCustom)
	  } 
	}

	const handleAddButton = (bumbu) => {
		// console.log("tes");

		console.log("idBumbuDasar", bumbu);
		bumbu.quantity += 1
		setTotalItemBumbuDasar([bumbu, ...totalItemBumbuDasar]);
		setCounter(counter)
	};
	console.log("total item BumbuDasar", totalItemBumbuDasar);

	return (
		<Container>
			<div className="tw-flex tw-flex-col tw-w-full tw-flex-wrap tw-items-center md:tw-flex-row mt-5 ">
				{productBumbuDasar.map((bumbu, index) => (
					// <Link key={index} to={`/productdetails/${bumbu._id}`}>
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
							<Row className="tw-p-2">
								<div>
									<h4 className="tw-text-black tw-font-opensans">
										{bumbu.name}
									</h4>
									<span className="tw-text-black tw-font-opensans">
										Rp. {bumbu.harga}
									</span>
								</div>
							</Row>
							<Row className="tw-pl-2">
								<div className="tw-flex tw-justify-end tw-mx-4 tw-border-b tw-border-grey tw-pb-2 tw-mb-1">
									{totalItemBumbuDasar.find((item) => item._id === bumbu._id) ? (
										<div className="tw-pt-2">
											<div className="tw-items-center tw-flex tw-justify-center">
												<div
													className="tw-bg-base tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-cursor-pointer tw-items-center"
													onClick={() => handleCounter(-1,bumbu._id)}
												>
													<span className="tw-text-sm tw-mx-auto tw--mt-1 tw-text-white">
														-
													</span>
												</div>
												<input
													className="tw-w-10 tw-h-5 tw-mx-2 tw-rounded tw-text-center tw-text-xs tw-font-opensans"
													type="string"
													value={totalItemBumbuDasar.find((item) => item._id === bumbu._id).quantity}
													onChange={(e) => setCounter(e.target.value)}
													readOnly
												/>
												<div
													className="tw-bg-base tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-cursor-pointer tw-items-center"
													onClick={() => handleCounter(1,bumbu._id)}
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
					// </Link>
				))}
			</div>
		</Container>
	);
}

export default CardBumbuDasar;
