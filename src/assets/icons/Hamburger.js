import React from 'react'

const Hamburger = () => {
  return (
    <div className="flex md:hidden cursor-pointer pt-4">
      <svg viewBox="0 0 100 80" width="30" height="30" fill="#FFFFFF">
        <rect width="80" height="12"></rect>
        <rect y="30" width="80" height="12"></rect>
        <rect y="60" width="80" height="12"></rect>
      </svg>
    </div>
  )
}

export default Hamburger
