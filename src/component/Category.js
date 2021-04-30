import React from 'react'

const Category = ({paramsCategory, handleFilterButton, handleAllButton}) => {
  return (
    <div className="tw-flex tw-flex-row tw-w-full tw-justify-center">
      <button 
        onClick={handleAllButton}
        className="tw-mx-2 tw-text-basic tw-font-opensans"
      >
        All
      </button>
      {paramsCategory.map((category, index) => {
        return (
          <div key={index}>
            <button 
              onClick={() => handleFilterButton(category)} 
              className="tw-mx-2 tw-text-basic tw-font-opensans"
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
