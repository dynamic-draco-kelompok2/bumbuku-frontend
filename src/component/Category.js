import React from 'react'

const Category = ({paramsCategory, handleFilterButton, handleAllButton}) => {
  return (
    <div className="">
      <button onClick={handleAllButton}>
        All
      </button>
      {paramsCategory.map((category, index) => {
        return (
          <div key={index}>
            <button onClick={() => handleFilterButton(category)}>
              {category}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Category
