import React from 'react'

const Category = ({paramsCategory, handleFilterButton, handleAllButton}) => {
  return (
    <div className="d-flex flex-column flex-md-row w-100 justify-content-center">
      <button 
        onClick={handleAllButton}
        className="tw-mx-5 tw-text-basic tw-font-opensans"
      >
        All
      </button>
      {paramsCategory.map((category, index) => {
        return (
          <div key={index} className="text-center pt-2 pt-md-0">
            <button 
              onClick={() => handleFilterButton(category)} 
              className="tw-mx-5 tw-text-basic tw-font-opensans"
            >
              {category}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Category
