import React, { useState } from 'react'
import Banner1 from '../assets/banner/banner1.png'
import Banner2 from '../assets/banner/banner2.png'
import LeftArrow from '../assets/icons/LeftArrow'
import RightArrow from '../assets/icons/RightArrow'

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [banners, setBanners] = useState([
    {
      id: 0,
      img: Banner1
    },
    {
      id: 1,
      img: Banner2
    }
  ])
  const lengthBanner = banners.length

  const prevSlide = () => {
    if(current === 0) {
      setCurrent(lengthBanner - 1)
    } else {
      setCurrent(current -1)
    }
  }

  const nextSlide = () => {
    if(current === lengthBanner - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  if(!Array.isArray(banners) || lengthBanner <= 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden hidden md:flex">
      <div>
        {banners.map((banner, index) => (
          <div className="my-1" key={index}>
            {index === current && (
              <div>
                <img src={banner.img} alt="banner"/>
                <div className="z-10">
                  <div 
                    className="rounded-full bg-icon w-10 h-10 absolute top-64 left-10 cursor-pointer"
                    onClick={prevSlide}
                  >
                    <div className="ml-1 mt-1.5">
                      <LeftArrow />
                    </div>
                  </div>
                  <div 
                    className="rounded-full bg-icon w-10 h-10 absolute top-64 right-10 cursor-pointer"
                    onClick={nextSlide}
                  >
                    <div className="ml-2 mt-1.5">
                      <RightArrow />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
