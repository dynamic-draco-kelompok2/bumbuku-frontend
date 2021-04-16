import React, { useState, useEffect } from 'react'
import ListCustomBumbu from './ListCustomBumbu'

const CustomBumbu = ({customBumbu, setCustomPage, addCustom, setAddCustom, totalItemCustom, setTotalItemCustom}) => {
  const [searchCustomBumbu, setSearchCustomBumbu] = useState("")
  const closeModal = () => {
    setTotalItemCustom([]);
    setCustomPage(false)
  }

  const applyCustomBumbu = () => {
    setAddCustom(totalItemCustom)
    setCustomPage(false)
  }

  useEffect(() => {
    setTotalItemCustom(addCustom)
  }, [addCustom, setTotalItemCustom])

  return (
    <div className="">
      <div className="w-screen h-screen bg-black opacity-50 fixed top-0 hidden md:flex"></div>
      <div className="flex justify-center z-10">
        <div className="bg-desktop w-full h-full flex flex-col rounded fixed top-14 md:top-28 md:max-w-xl md:h-4/5 lg:max-w-3xl">
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
            <h1 className="uppercase font-opensans pb-1 titleAddCstm font-bold">Add Custom</h1>
            <input 
              type="text" 
              placeholder="Cari bumbu..."
              className="rounded pl-1 w-full py-1 font-opensans border-2 border-gray-300"
              id="placeholerSty"
              value={searchCustomBumbu}
              onChange={(e) => setSearchCustomBumbu(e.target.value)}
            />
          </div>
          <div className="overflow-hidden overflow-y-scroll flex-1 h-4/6 md:h-3/5">
            {customBumbu.filter((custom) => {
              if(searchCustomBumbu === "") {
                return custom
              } else if(custom.name.toLowerCase().includes(searchCustomBumbu.toLowerCase())) {
                return custom
              }
              return null
            }).map((custom) => (
              <ListCustomBumbu 
                key={custom._id}
                {...custom}
                addCustom={addCustom}
                setAddCustom={setAddCustom}
                totalItemCustom={totalItemCustom}
                setTotalItemCustom={setTotalItemCustom}
              />
            ))}     
          </div>
          <div 
            className="flex-none sticky w-full items-center bottom-0 flex flex-row justify-between p-4 mt-14 bg-desktop z-10 md:mt-10"
          >
            <div className="flex flex-row">
              <h1 
                className="mr-1 font-opensans font-bold"
              >
                {totalItemCustom.length}
              </h1>
              <span 
                className="font-opensans font-bold"
              >
                {totalItemCustom > 1 ? 'Items' : 'Item'}
              </span>
            </div>
            <button 
              onClick={applyCustomBumbu} 
              className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-1/4 textBtnCustomRed"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomBumbu
