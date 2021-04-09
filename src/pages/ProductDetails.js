import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getBumbuById } from '../redux/actions/bumbuproduk.actions'

function ProductDetails() {
  const dispatch = useDispatch()
  const bumbuProduk = useSelector((state) => state.handleBumbuProduk.dataById)

  let {id} = useParams()
  useEffect(() => {
    dispatch(getBumbuById(id))
  }, [dispatch])
  
  return (
    <div className="">
      {bumbuProduk.map((product) => (
        <div key={product._id} className="p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-10 xl:px-14">
          <img 
            src={product.image} 
            alt="gambar" 
            className="rounded w-full lg:max-w-lg"
          />
          <div className="lg:w-1/3">
          <div className="pt-2">
            <p className="font-opensans font-bold text-2xl pb-2">{product.name}</p>
            <p className="font-opensans font-bold text-3xl pb-12">{product.harga}</p>
            <div className="pb-12 lg:w-40">
              <button 
                className="bg-icon rounded-xl py-2 uppercase text-xs font-opensans font-bold cursor-pointer tracking-wider text-white w-full"
              >
                Add Custom
              </button>
            </div>
            <div className="grid divide-y text-grey">
              <p 
                className="font-opensans uppercase text-sm font-semibold pb-2 text-black"
              >
                Description
              </p>
              <p className="font-opensans text-sm py-5 font-light">{product.description}</p>
            </div>
            <div className="pt-5 lg:w-40">
              <button 
                className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails
