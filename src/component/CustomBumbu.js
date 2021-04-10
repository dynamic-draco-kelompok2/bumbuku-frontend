import React from 'react'

const CustomBumbu = ({custom}) => {
  console.log(custom)
  return (
    <div key={custom._id}>
      <h1>{custom.name}</h1>
      <span>{custom.harga}</span>
    </div>
  )
}

export default CustomBumbu
