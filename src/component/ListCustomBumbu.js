import React, { useState, useEffect } from 'react'

// {name, harga, image, addCustom, setAddCustom, totalItemCustom, setTotalItemCustom}
const ListCustomBumbu = (props) => {
  const [initNum, setInitNum] = useState(1)
  const checkData = () => {
    // console.log(addCustom[name])
    if(props.addCustom[props.name] === undefined){
      return false
    } else {
      return true
    }
  }

  useEffect(() => {
    if(props.addCustom[props.name] !== undefined)
      setInitNum(props.addCustom[props.name])
  }, [props.addCustom, props.name])

  const [addCounter, setAddCounter] = useState(checkData())

  const handleAddButton = () => {
    props.setTotalItemCustom(props.totalItemCustom+1);
    props.setAddCustom({
      ...props.addCustom,
      [props.name]: initNum
    })
    setAddCounter(true)
  }

  const handlecounter = (calNum) => {
    props.setAddCustom({
      ...props.addCustom,
      [props.name]: initNum+calNum
    })
    // setInitNum(initNum+calNum);
    console.log(props.name);
    if(initNum + calNum === 0){
      let { [props.name]: remove, ...rest } = props.addCustom;
      console.log("ini rest ", rest);
      props.setAddCustom(rest);
      props.setTotalItemCustom(props.totalItemCustom-1);
      setAddCounter(false);
      // delete addCustom[name];
    }
  }


  return (
    <>
    <div 
      className="flex flex-row justify-between mx-4 pt-4 pb-2"
    >
      <div>
        <h1 className="font-opensans">{props.name}</h1>
        <span className="font-opensans">Rp. {props.harga} / gram</span>
      </div>
      <div>
        <img 
          src={props.image} 
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
              <div onClick={() => handlecounter(-1)} className="bg-base rounded-full w-5 h-5 flex cursor-pointer items-center">
                <span className="text-sm mx-auto -mt-1 text-white">-</span>
              </div>
              <input 
                className="w-10 h-5 mx-2 rounded text-center text-xs font-opensans"
                type="string"
                value={initNum}
                readOnly
              />
              <div onClick={() => handlecounter(1)} className="bg-base rounded-full w-5 h-5 flex cursor-pointer items-center">
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
