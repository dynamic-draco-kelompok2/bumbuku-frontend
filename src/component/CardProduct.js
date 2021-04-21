import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct(bumbu) {
  const itemBumbu = bumbu.bumbu
  
  return (
    <div className="tw-bg-desktop">
      <div className="tw-flex tw-flex-col tw-w-full tw-flex-wrap tw-items-center md:tw-flex-row">
        <Link  
          to={`/productdetails/${itemBumbu._id}`}
        >
          <div 
            className="tw-w-56 tw-h-72 tw-bg-white tw-m-2 tw-rounded tw-shadow-2xl"
          >
            <img 
              src={itemBumbu.image} 
              alt="produk"
              className="tw-w-full tw-h-48 tw-object-cover tw-rounded tw-p-2"
            />
            <div className="tw-p-2">
              <h4 className="tw-text-black tw-font-opensans">{itemBumbu.name}</h4>
              <span className="tw-text-black tw-font-opensans">Rp. {itemBumbu.harga}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CardProduct