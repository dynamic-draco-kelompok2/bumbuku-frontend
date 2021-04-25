import React from 'react'
import Instagram from '../assets/icons/Instagram'

const Footer = () => {
  return (
    <div className="tw-bg-base tw-w-full">
      <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between p-4">
        <div>
          <h1 className="tw-font-opensans tw-text-white tw-text-base">
            Social Media
          </h1>
          <Instagram />
        </div>
        <div className="tw-mt-2 tw-flex tw-flex-col md:tw-mt-0">
          <h1 className="tw-font-opensans tw-text-white tw-text-base">
            Informasi:
          </h1>
          <span className="tw-font-opensans tw-text-white tw-text-sm">
            Jl. Haji Mamat Blok A4 No. 40
          </span>
          <span className="tw-font-opensans tw-text-white tw-text-sm">
            Whatsapp: 0812345678
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
