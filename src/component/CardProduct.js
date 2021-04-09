import React, { useState } from 'react'
// import BumbuNasgor from '../assets/images/bumbu-nasigoreng.jpg'
import { Link } from 'react-router-dom'

function CardProduct(bumbuProduk) {
  const isiBumbu = bumbuProduk.bumbuProduk

  // console.log(bumbuProduk);
  console.log(isiBumbu);

  return (

    <div className="flex flex-col flex-wrap p-4 md:flex-row md:justify-center lg:justify-between lg:px-5 xl:px-10">
      { isiBumbu.map((items) => (
        <Link to={`/productdetails/${items._id}`}>
          <div className="py-4 px-1 w-72 md:px-4 lg:w-80" key={items._id}>
            <div className="bg-white rounded overflow-hidden shadow-lg" >
                <img 
                  src={items.image}
                  alt="Logo"
                  className="w-full h-48 "
                />
            
              <div className="font-opensans p-5">
                <p className="font-opensans font-bold text-xl pb-2">{items.harga}</p>
                <p className="font-opensans text-sm">{items.name}</p>
              </div>
            </div>
          </div>
        </Link> 
      ))}
    </div>
  )
}

export default CardProduct