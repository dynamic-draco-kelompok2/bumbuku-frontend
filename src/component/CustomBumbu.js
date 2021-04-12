import React, { useState } from 'react'

const CustomBumbu = ({customBumbu, setCustomPage}) => {
  const [totalItemCustom, setTotalItemCustom] = useState(0)
  const [searchCustomBumbu, setSearchCustomBumbu] = useState("")

  const closeModal = () => {
    setCustomPage(false)
  }

  return (
    <div className="">
      <div className="w-screen h-screen bg-black opacity-50 fixed top-0 hidden md:flex"></div>
      <div className="flex justify-center">
        <div className="bg-desktop w-screen h-screen rounded z-10 fixed top-14 md:top-28 md:max-w-xl md:h-4/5 lg:max-w-2xl">
          <div 
            className="pt-5 flex justify-between px-4"
          >
            <div></div>
            <div className="bg-icon w-8 h-8 rounded-full cursor-pointer">
              <div 
                className="flex justify-center" 
                style={{marginTop: '2px'}}
                onClick={closeModal}
              >
                <span className="text-xl text-white font-medium">
                  X
                </span>
              </div>
            </div>
          </div>
          <div className="px-4">
            <h1 className="uppercase font-opensans pb-1">Add Custom</h1>
            <input 
              type="text" 
              placeholder="Cari bumbu..."
              className="rounded pl-1 w-full py-1 font-opensans focus:outline-none"
              value={searchCustomBumbu}
              onChange={(e) => setSearchCustomBumbu(e.target.value)}
            />
          </div>
          <div className="overflow-hidden overflow-y-scroll h-4/6 md:h-3/5">
            {customBumbu.filter((custom) => {
              if(searchCustomBumbu === "") {
                return custom
              } else if(custom.name.toLowerCase().includes(searchCustomBumbu.toLowerCase())) {
                return custom
              }
            }).map((custom) => (
              <div 
                className="flex flex-row justify-between mx-4 pt-4 pb-2 border-b border-grey"
                key={custom._id}
              >
                <div>
                  <h1 className="font-opensans">{custom.name}</h1>
                  <span className="font-opensans">Rp. {custom.harga} / gram</span>
                </div>
                <div>
                  <img 
                    src={custom.image} 
                    alt="gambar_custom" 
                    className="w-16 h-16 object-cover"
                  />
                  <button 
                    className="text-white focus:outline-none bg-base w-full rounded text-xs p-1 mt-2 font-opensans"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between px-4 py-5 md:py-8">
            <div className="flex flex-row">
              <h1 className="mr-1 font-opensans font-bold">{totalItemCustom}</h1>
              <span className="font-opensans font-bold">{totalItemCustom > 1 ? 'Items' : 'Item'}</span>
            </div>
            <button className="bg-base text-white rounded w-20 h-8 font-opensans">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomBumbu
