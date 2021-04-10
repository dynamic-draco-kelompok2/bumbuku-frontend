import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getBumbuById } from '../redux/actions/bumbuproduk.actions'
import { getCustomBumbu } from '../redux/actions/custombumbu.actions'
import CustomBumbu from '../component/CustomBumbu'

function ProductDetails() {
  const [customPage, setCustomPage] = useState(false)
  const dispatch = useDispatch()
  const customBumbu = useSelector((state) => state.handleCustomBumbu.data)
  const bumbuProduk = useSelector((state) => state.handleBumbuProduk.dataById)
  let {id} = useParams()

  const handleCustomBumbu = () => {
    setCustomPage(!customPage)
  }

  useEffect(() => {
    dispatch(getBumbuById(id))
    dispatch(getCustomBumbu())
  }, [dispatch, id])
  
  return (
    <div className="">
      <div key={bumbuProduk._id} className="p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-10 xl:px-14">
        <img 
          src={bumbuProduk.image} 
          alt="gambar" 
          className="rounded w-full lg:max-w-lg"
        />
        <div className="lg:w-1/3">
          <div className="pt-2">
            <p className="font-opensans font-bold text-2xl pb-2">{bumbuProduk.name}</p>
            <p className="font-opensans font-bold text-3xl pb-12">{bumbuProduk.harga}</p>
            <div className="pb-12 lg:w-40">
              <button 
                className="bg-icon rounded-xl py-2 uppercase text-xs font-opensans font-bold cursor-pointer tracking-wider text-white w-full"
                onClick={handleCustomBumbu}
              >
                Add Custom
              </button>
            </div>
            <div>
              {customPage && customBumbu.map((custom) => (
                <CustomBumbu custom={custom}/>
              ))}
            </div>
            <div className="grid divide-y text-grey">
              <p 
                className="font-opensans uppercase text-sm font-semibold pb-2 text-black"
              >
                Description
              </p>
              <p className="font-opensans text-sm py-5 font-light">{bumbuProduk.description}</p>
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
    </div>
  )
}

export default ProductDetails
