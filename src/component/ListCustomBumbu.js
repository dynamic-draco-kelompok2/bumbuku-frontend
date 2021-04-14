import React, { useState, useEffect } from 'react'

const ListCustomBumbu = ({_id, name, harga, image, addCustom, setAddCustom, totalItemCustom, setTotalItemCustom}) => {
  const [addCounter, setAddCounter] = useState(false)
  const [counter, setCounter] = useState(1)
  const newCustom = {
    id: _id,
    namaBumbu: name,
    hargaBumbu: harga,
    imageBumbu: image,
    qty: counter
  }

  useEffect(() => {
    totalItemCustom.forEach(item => {
      if(item.id === _id){
        setAddCounter(true);
        setCounter(item.qty)
      }
    })
  }, [_id, totalItemCustom])

  const handleAddButton = () => {
    setTotalItemCustom([...totalItemCustom, {...newCustom, qty: counter}])
    setAddCounter(true)
    setCounter(counter)
  }
  
  const handleCounter = (accumNumber) => {
    const deleteCustom = totalItemCustom.filter((item) => item.id !== _id)
    if(counter === 1 && accumNumber === -1) {
      setTotalItemCustom(deleteCustom)
      setAddCounter(false)
    } else if(accumNumber === 1) {
      const updateQtyCustom = totalItemCustom.map((item) => {
        if(item.id === _id) {
          return {...item, qty: counter + 1}
        } 
        return item
      })
      setTotalItemCustom(updateQtyCustom)
      setCounter(counter + 1)
    } else {
      const updateQtyCustom = totalItemCustom.map((item) => {
        if(item.id === _id) {
          return {...item, qty: counter -1}
        }
        return item
      })
      setCounter(counter - 1)
      setTotalItemCustom(updateQtyCustom)
    }
  }
  
  return (
    <>
      <div 
        className="flex flex-row justify-between mx-4 pt-4 pb-2"
      >
        <div>
          <h1 className="font-opensans">{name}</h1>
          <span className="font-opensans">Rp. {harga} / gram</span>
        </div>
        <div>
          <img 
            src={image} 
            alt="gambar_custom" 
            className="w-20 h-20 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-end mx-4 border-b border-grey pb-2 mb-1">
        {addCounter 
          ? 
            <div className="pt-2">
              <div className="items-center flex justify-center">
                <div 
                  className="bg-base rounded-full w-5 h-5 flex cursor-pointer items-center"
                  onClick={() => handleCounter(-1)}
                >
                  <span className="text-sm mx-auto -mt-1 text-white">-</span>
                </div>
                <input 
                  className="w-10 h-5 mx-2 rounded text-center text-xs font-opensans"
                  type="string"
                  value={counter}
                  onChange={(e) => setCounter(e.target.value)}
                  readOnly
                />
                <div 
                  className="bg-base rounded-full w-5 h-5 flex cursor-pointer items-center"
                  onClick={() => handleCounter(1)}
                >
                  <span className="text-sm mx-auto -mt-1 text-white">+</span>
                </div>
              </div>
            </div>
          : 
            <button 
              className="text-white focus:outline-none bg-base w-20 rounded text-xs p-1 mt-2 font-opensans"
              onClick={handleAddButton}
            >
              Add
            </button> 
        }
      </div>
    </>
  )
}

export default ListCustomBumbu
