import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct(bumbuProduk) {
  const productBumbu = bumbuProduk.bumbuProduk
  
  return (
    <div className="flex flex-col w-full flex-wrap items-center md:flex-row">
      {productBumbu.map((bumbu, index) => (
        <Link 
          key={index} 
          to={`/productdetails/${bumbu._id}`}
        >
          <div 
            className="w-56 h-72 bg-white m-2 rounded shadow-2xl"
            key={bumbu._id}
          >
            <img 
              src={bumbu.image} 
              alt="produk"
              className="w-full h-48 object-cover rounded p-2"
            />
            <div className="p-2">
              <h4 className="text-black font-opensans">{bumbu.name}</h4>
              <span className="text-black font-opensans">Rp. {bumbu.harga}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CardProduct