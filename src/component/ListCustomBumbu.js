import React, { useState } from 'react'

const ListCustomBumbu = ({name, harga, image}) => {
  const [addCounter, setAddCounter] = useState(false)
  const handleAddButton = () => {
    setAddCounter(true)
  }
  return (
    <div 
      className="flex flex-row justify-between mx-4 pt-4 pb-2 mb-1 border-b border-grey"
    >
      <div>
        <h1 className="font-opensans">{name}</h1>
        <span className="font-opensans">Rp. {harga} / gram</span>
      </div>
      <div>
        <img 
          src={image} 
          alt="gambar_custom" 
          className="w-16 h-16 object-cover"
        />
        {addCounter 
        ? 
          <div className="pt-2">
            <div className="items-center flex justify-center">
              <div className="bg-base rounded-full w-4 h-4 flex">
                <span className="text-sm mx-auto -mt-1 text-white">-</span>
              </div>
              <input 
                className="w-4 h-4 mx-2 rounded text-center text-xs font-opensans"
                type="number"
                placeholder="1"
              />
              <div className="bg-base rounded-full w-4 h-4 flex">
                <span className="text-sm mx-auto -mt-1 text-white">+</span>
              </div>
            </div>
          </div>
        : 
          <button 
            className="text-white focus:outline-none bg-base w-full rounded text-xs p-1 mt-2 font-opensans"
            onClick={handleAddButton}
          >
            Add
          </button> 
        }
      </div>
    </div>
  )
}

export default ListCustomBumbu
