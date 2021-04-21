/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryBumbu } from '../redux/actions/categorybumbu.actions'
import { getBumbuProduk } from '../redux/actions/bumbuproduk.actions'
import Category from '../component/Category'
import CardProduct from '../component/CardProduct'
import ListBumbuCategory from '../component/ListBumbuCategory'

const CategoryPage = () => {
  const dispatch = useDispatch()
  const categoryBumbu = useSelector((state) => state.handleCategory.data)
  const bumbuProduk = useSelector((state) => state.handleBumbuProduk.data)
  const [allBumbu, setAllBumbu] = useState(true)
  const [bumbuCategory,setBumbuCategory] = useState(false)
  const paramsCategory = [...new Set(categoryBumbu.map(item => item.category))]
  const [products, setProducts] = useState(categoryBumbu)

  const handleAllButton = () => {
    setAllBumbu(true)
    setBumbuCategory(false)
  }

  const handleFilterButton = (category) => {
    const newItem = categoryBumbu.filter((item) => item.category === category)
    setAllBumbu(false)
    setBumbuCategory(true)
    setProducts(newItem)
  }
  
  useEffect(() => {
    dispatch(getCategoryBumbu())
    dispatch(getBumbuProduk())
  }, [dispatch])

  return (
    <div>
      <Category 
        paramsCategory={paramsCategory} 
        handleFilterButton={handleFilterButton}
        handleAllButton={handleAllButton}
      />
      {allBumbu && (
        <div>
          {bumbuProduk.map((bumbu) => (
            <CardProduct 
              bumbu={bumbu} 
              key={bumbu._id}
            />
          ))}
        </div>
      )}
      {bumbuCategory && (
        <ListBumbuCategory categoryBumbu={products}/>
      )}
    </div>
  )
}

export default CategoryPage
