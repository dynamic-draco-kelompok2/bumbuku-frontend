import React from 'react'
import BumbuNasgor from '../assets/images/bumbu-nasigoreng.jpg'

function CardProduct() {
  return (
    <div className="flex flex-row justify-around px-10 m-10 ">
      <div className="px-5">
        <div className="bg-white rounded overflow-hidden shadow-lg"> 
          <img 
              src={BumbuNasgor}
              alt="Logo"
              className="w-full"
            />
          <div className="font-opensans p-5">
            <p className="font-opensans font-bold text-xl pb-2">Fried Rice Seasoning</p>
            <p className="font-opensans text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="bg-white rounded overflow-hidden shadow-lg"> 
          <img 
              src={BumbuNasgor}
              alt="Logo"
              className="w-full"
            />
          <div className="font-opensans p-5">
            <p className="font-opensans font-bold text-xl pb-2">Fried Rice Seasoning</p>
            <p className="font-opensans text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="bg-white rounded overflow-hidden shadow-lg"> 
          <img 
              src={BumbuNasgor}
              alt="Logo"
              className="w-full"
            />
          <div className="font-opensans p-5">
            <p className="font-opensans font-bold text-xl pb-2">Fried Rice Seasoning</p>
            <p className="font-opensans text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="bg-white rounded overflow-hidden shadow-lg"> 
          <img 
              src={BumbuNasgor}
              alt="Logo"
              className="w-full"
            />
          <div className="font-opensans p-5">
            <p className="font-opensans font-bold text-xl pb-2">Fried Rice Seasoning</p>
            <p className="font-opensans text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>

   

    
      
    </div>
  )
}

export default CardProduct