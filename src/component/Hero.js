import React, { useState } from 'react'
import Banner1 from '../assets/banner/banner1.png'
import Banner2 from '../assets/banner/banner2.png'
import { Carousel } from 'react-bootstrap'

const Hero = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
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

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      className=""
    >
      {banners.map((banner => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.img}
            alt="First slide"
          />
        </Carousel.Item>
      )))}
    </Carousel>
  )
}

export default Hero
