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
        className="tw-flex tw-flex-row tw-justify-between tw-mx-4 tw-pt-4 tw-pb-2"
      >
        <div>
          <h1 className="tw-font-opensans tw-font-bold tw-text-base tw--mb-0">{name}</h1>
          <span className="tw-font-opensans tw-font-regular">Rp. {harga} / gram </span>
        </div>
        <div>
          <img 
            src={image} 
            alt="gambar_custom" 
            className="tw-w-24 tw-h-24 tw-object-cover tw-rounded"
          />
        </div>
      </div>
      <div className="tw-flex tw-justify-end tw-mx-4 tw-border-b tw-border-grey tw-pb-2 tw-mb-1">
        {addCounter 
          ? 
            <div className="tw-pt-2">
              <div className="tw-items-center tw-flex tw-justify-center">
                <div 
                  className="tw-bg-base tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-cursor-pointer tw-items-center"
                  onClick={() => handleCounter(-1)}
                >
                  <span className="tw-text-sm tw-mx-auto tw--mt-1 tw-text-white">-</span>
                </div>
                <input 
                  className="tw-w-10 tw-h-5 tw-mx-2 tw-rounded tw-text-center tw-text-xs tw-font-opensans"
                  type="string"
                  value={counter}
                  onChange={(e) => setCounter(e.target.value)}
                  readOnly
                />
                <div 
                  className="tw-bg-base tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-cursor-pointer tw-items-center"
                  onClick={() => handleCounter(1)}
                >
                  <span className="tw-text-sm tw-mx-auto tw--mt-1 tw-text-white">+</span>
                </div>
              </div>
            </div>
          : 
            <button 
              className="tw-text-white focus:tw-outline-none tw-bg-base tw-w-24 tw-rounded tw-text-xs tw-p-1 tw-mt-2 tw-font-opensans"
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
