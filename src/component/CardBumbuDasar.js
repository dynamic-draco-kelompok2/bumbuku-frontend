import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function CardBumbuDasar(bumbuDasar) {
	const productBumbuDasar = bumbuDasar.bumbuDasar;
	console.log("productBumbuDasar", productBumbuDasar);

  const [totalItemBumbuDasar, setTotalItemBumbuDasar] = useState([])
  // const newCustom = {
  //   id: _id,
  //   namaBumbuDasar: name,
  //   hargaBumbuDasar: harga,
  //   imageBumbuDasar: image,
  //   qty: counter
  // }

  // useEffect(() => {
  //   productBumbuDasar.forEach(item => {
  //     // if(item._id === item._id){
  //     //   return item.id
  //     //   // setAddCounter(true);
  //     //   // setCounter(item.qty)
  //     // }
  //     console.log(item._id)
  //   })
  // }, [])

  
  const handleAddButton = (bumbu) => {
    // console.log("tes");
    
    console.log("idBumbuDasar", bumbu);
    
    // setTotalItemBumbuDasar([...totalItemBumbuDasar, {...newCustom, qty: counter}])
    setTotalItemBumbuDasar([bumbu,...totalItemBumbuDasar])
    // setAddCounter(true)
    // setCounter(counter)
  }
  console.log("total item BumbuDasar", totalItemBumbuDasar);

	return (
		<Container>
			<div className="tw-flex tw-flex-col tw-w-full tw-flex-wrap tw-items-center md:tw-flex-row mt-5 ">
				{productBumbuDasar.map((bumbu, index) => (
          
					// <Link key={index} to={`/productdetails/${bumbu._id}`}>
						<Row className="mx-2" key={index} >
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
									<button
										className="tw-text-white focus:tw-outline-none tw-bg-base tw-w-24 tw-rounded tw-text-xs tw-p-1 tw-mt-2 tw-font-opensans"
										onClick={() => handleAddButton(bumbu)}
									>
										Add
									</button>
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