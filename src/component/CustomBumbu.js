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
      <div className="tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 hidden md:flex"></div>
      <div className="tw-flex tw-justify-center tw-z-50">
        <div className="tw-bg-desktop tw-w-full tw-h-full tw-flex tw-flex-col tw-rounded tw-fixed tw-top-0 md:tw-top-20 md:tw-max-w-xl md:tw-h-4/5 lg:tw-max-w-3xl">
          <div 
            className="tw-pt-5 tw-flex tw-justify-between tw-px-4"
          >
            <div></div>
            <div className="tw-bg-icon tw-w-8 tw-h-8 tw-rounded-full tw-cursor-pointer">
              <div 
                className="tw-flex tw-justify-center" 
                style={{marginTop: '2px'}}
                onClick={closeModal}
              >
                <span className="tw-text-xl tw-text-white tw-font-medium">
                  X
                </span>
              </div>
            </div>
          </div>
          <div className="tw-px-4">
            <h1 className="tw-font-opensans tw-pb-1 tw-font-bold tw-text-base">
              Add Custom
            </h1>
            <input 
              type="text" 
              placeholder="Cari bumbu..."
              className="tw-rounded tw-pl-1 tw-w-full tw-py-1 tw-font-opensans tw-border-2 tw-border-base focus:outline-none"
              value={searchCustomBumbu}
              onChange={(e) => setSearchCustomBumbu(e.target.value)}
            />
          </div>
          <div className="tw-overflow-hidden tw-overflow-y-scroll tw-flex-1 tw-h-full md:tw-h-3/5">
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
            className="tw-flex-none tw-sticky tw-w-full tw-h-20 tw-items-center tw-bottom-0 tw-flex tw-flex-row tw-justify-between tw-p-4 tw-bg-desktop tw-z-10 tw-shadow-xl md:tw-mt-10"
          >
            <div className="tw-flex tw-flex-row">
              <h1 
                className="tw-mr-1 tw-font-opensans tw-font-bold tw-text-base"
              >
                {totalItemCustom.length}
              </h1>
              <span 
                className="tw-font-opensans"
              >
                {totalItemCustom > 1 ? 'Item' : 'Items'}
              </span>
            </div>
            <button 
              onClick={applyCustomBumbu} 
              className="tw-bg-base tw-rounded tw-py-2 tw-text-md tw-font-opensans tw-cursor-pointer tw-tracking-wider tw-text-white tw-filter tw-drop-shadow-base tw-w-24 tw-h-10"
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
