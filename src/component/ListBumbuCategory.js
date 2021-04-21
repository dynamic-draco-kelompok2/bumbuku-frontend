import React from 'react'

const ListBumbuCategory = ({categoryBumbu}) => {
  return (
    <div>
      {categoryBumbu.map((item) => (
        <div key={item._id}>
          <h1>{item.bumbuProduk_id.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default ListBumbuCategory
