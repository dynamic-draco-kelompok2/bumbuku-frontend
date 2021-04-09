import React, { useEffect } from 'react'
import CardProduct from '../component/CardProduct'
import Hero from '../component/Hero'
import { getBumbuProduk } from '../redux/actions/bumbuproduk.actions'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const bumbuProduk = useSelector((state) => state)
  
  useEffect(() => {
    dispatch(getBumbuProduk())
  }, [dispatch])

  console.log(bumbuProduk)
  return (
    <div>
      <Hero />
      <CardProduct />
    </div>
  )
}

export default Home
