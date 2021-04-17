import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../redux/actions/cart.action";
import { Container, Row, Col} from "react-bootstrap";

function Cart() {
  const dataOrder = useSelector((state) => state.handleCart.data);
  const totalHargaCustom = useSelector((state) => state.handleCart.totalCustom);
  const CustomItem = useSelector((state) => state.handleCart.custom);
  const dispatch = useDispatch();

  //Get Per Custom Item
  // console.log(totalHargaCustom)

  console.log("ini data order ", dataOrder);

  useEffect(() => {
    const User = JSON.parse(localStorage.payload)._id;

    dispatch(getCart(User));
    // console.log("data order dlm use uffect ", dataOrder);
  }, [dispatch]);

  //Total Harga all Base Item
  const totalHargaBase = dataOrder.reduce(
    (total, value) => total + value.bumbuProduk_id.harga,
    0
  );
  // console.log('Ini harga Total base semua item', totalHargaBase);

  return (
    <>
      {dataOrder.length === 0 ? (
        <div>No Order</div>
      ) : (
        <Container>
          <Row className="tw-pt-40">
            <Col>
              <div>
                <p className="tw-font-opensans tw-font-bold titleCart tw-m-0">Cart</p>
                <p className="tw-font-opensans tw-font-regular subTitleCart tw-m-0">
                  Pesanan Anda
                </p>
                <div className="tw-text-grey">
                  <p className="textSubCart tw-lg:w-1/2">
                    Terimakasih User sudah memesan di bumbu Ku! berikut
                    ini adalah rincian pesanan anda:
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          {dataOrder.map((order, index) => (
            <Row>
              <Col>
              <div
                className=""
                key={index}
              >
                <div
                  className=""
                  key="1"
                >
                  <div className="">
                  <img
                    src={order.bumbuProduk_id.image}
                    alt="gambar"
                    className="tw-rounded tw-w-full tw-h-52 tw-object-cover tw-lg:max-w-lg "
                  /> 
                    <h4 className="tw-text-lg tw-font-opensans tw-font-bold textBase">
                      Base : {order.bumbuProduk_id.name}
                    </h4>
                    <p className="tw-py-1 tw-font-opensans tw-font-regular textHargaBase">Harga : Rp. {order.bumbuProduk_id.harga}</p>
										<div className="tw-grid tw-divide-y tw-text-grey">
											<p className="tw-font-opensans tw-font-semibold descriptionTitle tw-text-black tw-m-0">
												Description
											</p>
											<p className="tw-pt-4 tw-font-opensans tw-font-regular">{order.bumbuProduk_id.description}</p>
										</div>
					
                  </div>

                </div>
              </div>
              </Col>
              <Col>
                    <h4 className="tw-font-opensans tw-font-bold titleTextCustom">Custom: </h4>
                    {!!order.custom && order.custom.map((custom, index) => (
                      <div key={index} className="tw-flex tw-bg-white tw-m-2 tw-rounded tw-shadow-2xl">
                        <span className="ptw-y-1 tw-font-opensans">Name: {custom.bumbuDasar_id.name}, {custom.gram} Gram </span>
                      </div>
                    ))}
              </Col>
            </Row>
          ))}

            <Row>
          

              <Col>
                <p className="tw-font-opensans tw-font-bold titleCart tw-m-0">Kolom Harga</p>
              </Col>
            </Row>

        </Container>
      )}
    </>
  );
}

export default Cart;

