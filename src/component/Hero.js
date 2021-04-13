import React, { useState } from 'react'
import Banner1 from '../assets/banner/banner1.png'
import Banner2 from '../assets/banner/banner2.png'
import LeftArrow from '../assets/icons/LeftArrow'
import RightArrow from '../assets/icons/RightArrow'

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [banners] = useState([
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
                <img src={banner.img} alt="banner" className="relative object-cover"/>
                <div className="z-10">
                  <div 
                    className="rounded-full bg-icon w-7 h-7 absolute top-24 left-3 cursor-pointer lg:top-36 xl:top-44 2xl:top-52"
                    onClick={prevSlide}
                  >
                    <div className="ml-1 mt-1.5">
                      <LeftArrow />
                    </div>
                  </div>
                  <div 
                    className="rounded-full bg-icon w-7 h-7 absolute top-24 right-3 cursor-pointer lg:top-36 xl:top-44 2xl:top-52"
                    onClick={nextSlide}
                  >
                    <div className="ml-1.5 mt-1.5">
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
