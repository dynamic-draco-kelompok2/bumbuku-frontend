import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct(bumbuProduk) {
  const productBumbu = bumbuProduk.bumbuProduk
  console.log(productBumbu)
  return (
    <div className="flex flex-col w-full flex-wrap items-center md:flex-row">
      {productBumbu.map((bumbu) => (
        <div 
          className="w-56 h-72 bg-white m-4 rounded shadow-2xl"
          key={bumbu._id}
        >
          <img 
            src={bumbu.image} 
            alt="produk"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-2">
            <h4>{bumbu.name}</h4>
            <span>Rp. {bumbu.harga}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardProduct