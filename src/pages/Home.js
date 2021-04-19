import React, { useEffect } from 'react'
import CardProduct from '../component/CardProduct'
import Hero from '../component/Hero'
import { getBumbuProduk } from '../redux/actions/bumbuproduk.actions'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Spinner } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch()
  const bumbuProduk = useSelector((state) => state.handleBumbuProduk)
  
  useEffect(() => {
    dispatch(getBumbuProduk())
  }, [dispatch])

  return (
    <Container fluid className="tw-bg-desktop md:tw-h-screen">
      <Row>
        {bumbuProduk.isLoading === true ?
          <>
            <div className="text-center tw-w-screen tw-h-screen tw-bg-black tw-opacity-50 tw-fixed tw-top-0 tw-left-0 tw-z-20">
            </div>
            <Row className="position-absolute justify-content-center w-100 h-100 align-content-center align-items-center tw-z-30">
              <Spinner className="" animation="border" variant="warning"/>
            </Row>
          </>
          :
            null
        }
        <Hero />
        <CardProduct bumbuProduk={bumbuProduk.data}/>
      </Row>
    </Container>
  )
}

export default Home
