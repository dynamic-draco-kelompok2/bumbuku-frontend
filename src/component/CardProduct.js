import React, { useState } from 'react'
import BumbuNasgor from '../assets/images/bumbu-nasigoreng.jpg'

function CardProduct() {
  const [products, setProducts] = useState([
    {
      id:0,
      img: BumbuNasgor,
      title: 'Fried Rice Seasoning',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      id:1,
      img: BumbuNasgor,
      title: 'Fried Rice Seasoning',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      id:2,
      img: BumbuNasgor,
      title: 'Fried Rice Seasoning',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      id:3,
      img: BumbuNasgor,
      title: 'Fried Rice Seasoning',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    }
  ])
  return (
    <div className="flex flex-col flex-wrap p-4 md:flex-row md:justify-center lg:justify-between lg:px-5 xl:px-10">
      {products.map((product) => (
        <div className="py-4 px-1 w-72 md:px-4 lg:w-80" key={product.id}>
          <div className="bg-white rounded overflow-hidden shadow-lg"> 
            <img 
                src={product.img}
                alt="Logo"
                className="w-full"
              />
            <div className="font-opensans p-5">
              <p className="font-opensans font-bold text-xl pb-2">{product.title}</p>
              <p className="font-opensans text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardProduct