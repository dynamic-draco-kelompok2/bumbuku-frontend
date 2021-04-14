import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../redux/actions/cart.action";
import CartDetail from '../component/CartDetail'

function Cart() {
	const dataOrder = useSelector((state) => state.handleCart.data);
	const dispatch = useDispatch();

	// console.log("ini data order ", dataOrder);

	useEffect(() => {
		const User = JSON.parse(localStorage.payload)._id;

		dispatch(getCart(User));

	}, [dispatch]);

	const totalHarga = () => {
		let harga = 0;

		if(dataOrder.length !== 0){
			dataOrder.forEach(item => {
				harga += item.bumbuProduk_id.harga;
				if(item.custom){
					item.custom.forEach(item2 => {
						harga += (item2.bumbuDasar_id.harga * item2.gram)
					})
				}
			})
			return harga
		}

		return 0
	}

	return (
		<>
			{dataOrder.length === 0 ? (
				<div>No Order</div>
			) : (
				<div className="flex flex-col justify-center items-center lg:flex-row bg-white dr pt-40">
					<div className="lg:w-1/3 md:w-1/2">
						<div className="font-opensans p-5">
							<p className="font-opensans font-bold text-3xl pb-10 ">Cart</p>
							<p className="font-opensans font-regular text-3xl pb-2 pt-10">
								Your Order
							</p>
							<div className="text-grey">
								<p className="font-opensans text-sm py-5 font-light pb-10">
									Here your summary order
								</p>
							</div>

							{dataOrder.map((order, index) => (
								<div
									className="flex flex-col w-full flex-wrap items-center pb-10"
									key={index}
								>
									<div
										className="w-full h-18 bg-base rounded shadow-2xl"
										key="1"
									>
										<div className="pl-7 py-3 text-white">
											<h4 className="text-lg font-opensans font-bold">
												BASE : {order.bumbuProduk_id.name}
											</h4>
											<p className="py-1 font-opensans">Harga : Rp. {order.bumbuProduk_id.harga}</p>
											<h4 className="text-lg font-opensans font-bold pt-5">CUSTOM: </h4>
											 {!!order.custom && order.custom.map((custom, index) => (
												 <div key={index} className="flex">
													 <span className="py-1 font-opensans">Name: {custom.bumbuDasar_id.name}, {custom.gram} Gram </span>
												 </div>
											))}
										</div>
									</div>
									<div className="w-full h-22" key="2">
										<div className="p-7 text-black">
                    <img 
                      src={order.bumbuProduk_id.image} 
                      alt="base produk"
                      className="w-full h-48 object-cover rounded-t"
                    />
											<p className="pt-5 font-opensans font-regular">{order.bumbuProduk_id.description}</p>
											<div className="grid divide-y text-grey">
												<p className="font-opensans uppercase text-sm font-semibold pb-2 text-grey"></p>
												<p className="font-opensans text-sm font-light"></p>
											</div>
										</div>					
									</div>
								</div>
							))}

							{/* {console.log('data order luar', dataOrder)} */}

							<div className="flex">
								<div
									className="w-full h-42 bg-white rounded shadow-2xl"
									key="3"
								>
									<div className="p-7 grid grid-flow-col auto-cols-max">
					<div>
					<h4 className="text-lg font-semibold font-opensans">Ringkasan Belanja :</h4>
						<table>
							<tbody>
								{dataOrder.map((item, index, dataOrder) => {
									return <CartDetail key={index} item={item}/>
								})}
								<tr>
									<td className="text-xl font-bold font-regular">Total Harga</td>
									<td className="text-xl font-bold font-regular">Rp. {totalHarga()}</td>
								</tr>
							</tbody>
						</table>
					</div>
                    {/* <div>
                      <h4 className="text-lg font-semibold font-opensans">Ringkasan Belanja </h4>
                      <p className="py-2 font-opensans font-regular">Total Harga</p>
                      <p className="pb-2 font-opensans font-regular">Total Item</p>

                      <p className="text-xl font-bold font-regular">Total Harga</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold font-opensans">:</h4>
                      <p className="py-2 font-opensans font-regular">Rp.</p>
                      <p className="pb-2 font-opensans font-regular">{dataOrder.length} Item</p>
                      <p className="text-xl font-bold font-regular">Rp. {totalHarga()}</p>
                    </div> */}

									</div>

                      <div className="grid divide-y text-grey px-7">
                        <p className="font-opensans uppercase text-sm font-semibold pb-2 text-black"></p>
                        <p className="font-opensans text-sm font-light"></p>
                      </div>
                      <div className="p-7 lg:w-1/2" >
                        <div className="grid divide-y text-grey w-full"></div>
                        <button className="bg-base rounded-xl py-2 px-4 text-md font-semibold font-opensans cursor-pointer text-white filter drop-shadow-base w-full">
                          Place Order
                        </button>
                      </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Cart;
