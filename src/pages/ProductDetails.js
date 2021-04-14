import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getBumbuById } from '../redux/actions/bumbuproduk.actions'
import { getCustomBumbu } from '../redux/actions/custombumbu.actions'
import { postOrder } from '../redux/actions/order.action';
import CustomBumbu from '../component/CustomBumbu'

function ProductDetails() {
  const [customPage, setCustomPage] = useState(false)
  const [addCustom, setAddCustom] = useState([])
  const [totalItemCustom, setTotalItemCustom] = useState([])
  const dispatch = useDispatch()
  const customBumbu = useSelector((state) => state.handleCustomBumbu.data)
  const bumbuProduk = useSelector((state) => state.handleBumbuProduk.dataById)
  let {id} = useParams()

  const handleCustomBumbu = () => {
    setCustomPage(!customPage)
  }

  const itemPrice = totalItemCustom.reduce((accumulation, currentItem) => 
    accumulation + currentItem.hargaBumbu * currentItem.qty, 0
  )

  const totalprice = bumbuProduk.harga + itemPrice

  const addCart = () => {
    dispatch(postOrder(id, addCustom));
  }

  useEffect(() => {
    dispatch(getBumbuById(id))
    dispatch(getCustomBumbu())
  }, [dispatch, id])

  return (
    <div className="" key={bumbuProduk._id}>
      <div className="p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-10 xl:px-14">
        <img 
          src={bumbuProduk.image} 
          alt="gambar" 
          className="rounded w-full lg:max-w-lg"
        />
        <div className="lg:w-1/3">
          <div className="pt-2">
            <p className="font-opensans font-bold text-2xl">{bumbuProduk.name}</p>
            <p className="font-opensans font-medium text-xl text-grey">Rp.{bumbuProduk.harga}</p>
            <div className="lg:w-40 py-4">
              <button 
                className="bg-icon rounded-xl py-2 uppercase text-xs font-opensans font-bold cursor-pointer tracking-wider text-white w-full"
                onClick={handleCustomBumbu}
              >
                Add Custom
              </button>
            </div>
            <div className="pb-4">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Harga</th>
                    <th>Berat</th>
                  </tr>
                </thead>
                {!!addCustom && addCustom.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <th>
                        <img src={item.imageBumbu} alt="gambar" className="w-10 h-10 object-cover"/>
                      </th>
                      <th className="text-sm font-medium">{item.namaBumbu}</th>
                      <th className="text-sm font-medium">Rp. {item.hargaBumbu}</th>
                      <th className="text-sm font-medium">{item.qty} gram</th>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="grid divide-y text-grey">
              <p 
                className="font-opensans uppercase text-sm font-semibold pb-2 text-black"
              >
                Description
              </p>
              <p className="font-opensans text-sm py-5 font-light">{bumbuProduk.description}</p>
            </div>
            <div>
              <h1>Subtotal:</h1>
              <div className="flex">
                <h1>Harga {bumbuProduk.name}:</h1>
                <span className="ml-1">Rp. {bumbuProduk.harga}</span>
              </div>
              {totalItemCustom.length >= 1 
                ? 
                  <div className="flex">
                    <h1>Harga total custom bumbu:</h1>
                    <span className="ml-1">Rp. {!!itemPrice && itemPrice}</span>
                  </div>
                : null
              }
              <div className="flex my-2">
                <h1>Total Harga:</h1>
                <span className="ml-1">Rp. {totalprice}</span>
              </div>
            </div>
            <div className="lg:w-40">
              <button 
                onClick={addCart}
                className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full"
              >
                Add To Cart
              </button>
            </div>
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
  )
}

export default ProductDetails
