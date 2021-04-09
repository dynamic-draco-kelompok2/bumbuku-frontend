import { useState } from 'react'
import BumbuNasgor from '../assets/images/bumbu-nasigoreng.jpg'

function ProductDetails() {
  const [productDetail, setProductDetail] = useState({
    id:0,
    title: 'Bumbu Nasi Goreng',
    harga: 'Rp 9.800',
    img: BumbuNasgor,
    descriptionText: 'Detail base seasoning, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type'
  })

  return (
    <div className="flex flex-col justify-center items-center h-screen lg:flex-row ">
        <div className="py-4" key={productDetail.id} >
          <img 
          src={productDetail.img}
          alt="produkdetail"
          className="w-full relative lg:w-20"
          />
        </div>
        <div className="lg:w-1/3">
          <div className="font-opensans p-5">
            <p className="font-opensans font-bold text-2xl pb-2">{productDetail.title}</p>
            <p className="font-opensans font-bold text-3xl pb-12">{productDetail.harga}</p>
            <div className="pb-12 lg:w-40">
              <button className="bg-icon rounded-xl py-2 uppercase text-xs font-opensans font-bold cursor-pointer tracking-wider text-white w-full">ADD CUSTOM</button>
            </div>
            <div className="grid divide-y text-grey">

            <p className="font-opensans uppercase text-sm font-semibold pb-2 text-black">Description</p>
            <p className="font-opensans text-sm py-5 font-light">{productDetail.descriptionText}</p>
            </div>
            <div className="pt-5 lg:w-40">
              <button className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full">Add To Cart</button>
            </div>
          </div>
        </div>
      <div>
        
      </div>
    </div>
  )
}

export default ProductDetails
