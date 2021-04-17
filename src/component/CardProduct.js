import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct(bumbuProduk) {
  const productBumbu = bumbuProduk.bumbuProduk
  
  return (
    <div className="tw-bg-desktop">
      <div className="tw-flex tw-flex-col tw-w-full tw-flex-wrap tw-items-center md:tw-flex-row">
        {productBumbu.map((bumbu, index) => (
          <Link 
            key={index} 
            to={`/productdetails/${bumbu._id}`}
          >
            <div 
              className="tw-w-56 tw-h-72 tw-bg-white tw-m-2 tw-rounded tw-shadow-2xl"
              key={bumbu._id}
            >
              <img 
                src={bumbu.image} 
                alt="produk"
                className="tw-w-full tw-h-48 tw-object-cover tw-rounded tw-p-2"
              />
              <div className="tw-p-2">
                <h4 className="tw-text-black tw-font-opensans">{bumbu.name}</h4>
                <span className="tw-text-black tw-font-opensans">Rp. {bumbu.harga}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CardProduct