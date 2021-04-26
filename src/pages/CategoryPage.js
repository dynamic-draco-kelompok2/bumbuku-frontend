/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryBumbu } from '../redux/actions/categorybumbu.actions'
import { getBumbuProduk } from '../redux/actions/bumbuproduk.actions'
import Category from '../component/Category'
import CardProduct from '../component/CardProduct'
import ListBumbuCategory from '../component/ListBumbuCategory'
import SearchCategoryProduct from '../component/SearchCategoryProduct'
import SearchAllProduct from '../component/SearchAllProduct'

const CategoryPage = () => {
  const dispatch = useDispatch()
  const categoryBumbu = useSelector((state) => state.handleCategory.data)
  const bumbuProduk = useSelector((state) => state.handleBumbuProduk.data)
  const [allBumbu, setAllBumbu] = useState(true)
  const [bumbuCategory,setBumbuCategory] = useState(false)
  const paramsCategory = [...new Set(categoryBumbu.map(item => item.category))]
  const [products, setProducts] = useState(categoryBumbu)
  const [searchCategoryProduk, setSearchCategoryProduk] = useState("")
  const [searchAllProduk, setSearchAllProduk] = useState("")
  const [showSearchAll, setShowSearchAll] = useState(true)
  const [showSearchCategory, setShowSearchCategory] = useState(false)

  const handleAllButton = () => {
    setAllBumbu(true)
    setBumbuCategory(false)
    setShowSearchCategory(false)
    setShowSearchAll(true)
  }

  const handleFilterButton = (category) => {
    const newItem = categoryBumbu.filter((item) => item.category === category)
    setAllBumbu(false)
    setBumbuCategory(true)
    setProducts(newItem)
    setShowSearchCategory(true)
    setShowSearchAll(false)
  }
  
  useEffect(() => {
    dispatch(getCategoryBumbu())
    dispatch(getBumbuProduk())
  }, [dispatch])

  return (
    <div className="tw-p-4">
      <div className="tw-mx-auto">
        {showSearchCategory && (
          <SearchCategoryProduct 
            searchCategoryProduk={searchCategoryProduk}
            setSearchCategoryProduk={setSearchCategoryProduk}
          />
        )}
        {showSearchAll && (
          <SearchAllProduct 
            searchAllProduk={searchAllProduk}
            setSearchAllProduk={setSearchAllProduk}
          />
        )}
      </div>
      <Category 
        paramsCategory={paramsCategory} 
        handleFilterButton={handleFilterButton}
        handleAllButton={handleAllButton}
      />
      {allBumbu && (
        <div className="tw-mx-auto tw-flex tw-flex-col tw-flex-wrap md:tw-flex-row tw-py-4">
          {bumbuProduk.filter((bumbu) => {
            if(searchAllProduk === "") {
              return bumbu
            } else if(bumbu.name.toLowerCase().includes(searchAllProduk.toLowerCase())) {
              return bumbu
            }
            return null
          }).map((bumbu) => (
            <CardProduct 
              bumbu={bumbu} 
              key={bumbu._id}
            />
          ))}
        </div>
      )}
      {console.log(products)}
      {bumbuCategory && (
        <div className="tw-mx-auto tw-flex tw-flex-col tw-flex-wrap md:tw-flex-row tw-py-4">
          {products.filter((item) => {
            if(searchCategoryProduk === "") {
              return item
            } else if(item.name.toLowerCase().includes(searchCategoryProduk.toLowerCase())) {
              return item
            }
            return null
          }).map((item) => (
            <ListBumbuCategory 
              categoryBumbu={item} 
              key={item._id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPage
