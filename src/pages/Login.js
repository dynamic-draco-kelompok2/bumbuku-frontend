import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Spinner, Form, Button, Image } from 'react-bootstrap';

import { loginAction } from '../redux/actions/auth.actions';

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const registerLoading = useSelector(state => state.auth)

  const [login, setLogin] = useState({
    name: "",
    password: ""
  })

  const handleChange= (e) => {
    setLogin({
        ...login,
        [e.target.name] : e.target.value
    })
  }

  return (
    <>
    <Container fluid className="d-flex flex-row justify-content-between h-100 bg-white position-relative">
        <Row className="justify-content-center w-100">
            <Col md={7} className="mt-5">
                <div>
                    <Link to="/">
                      <Image src={require('../assets/images/Logo-Red.svg').default} alt="Logo Bumbuku" width="250"/>
                    </Link>
                </div>
                <div className="mt-5">
                    <h3>Masuk ke akun anda!</h3>
                    <div className="mt-5 text-grey">
                      <div>Login dan kreasikan pilihan bumbumu sekarang</div>
                    </div>
                </div>
                <div className="mt-5">
                    {registerLoading.isLoading === true ?
                    <div className="text-center">
                        <Spinner className="mt-3" animation="border" />
                    </div>
                    :
                    <Form onSubmit={(e) => dispatch(loginAction(login, e, history, setLogin))}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required 
                          type="text" 
                          placeholder="Your username"
                          value={login.name} onChange={handleChange} name="name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required  
                          type="password" 
                          placeholder="Password"
                          value={login.password} onChange={handleChange} name="password"/>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="mt-3 w-100 tw-bg-base tw-border-base tw-shadow-base">
                        Login
                    </Button>
                    </Form>
                    }
                    <div className="tw-pt-12 text-center">
                      <p className="font-opensans text-m text-grey">
                        Belum mempunyai akun Bumbu KU ?
                        <Link to='/register/'>
                          <b className="font-opensans text-md text-base ml-1 tw-text-basic"> 
                            Register
                          </b>
                        </Link>
                      </p>  
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="tw-bg-base w-100 d-none d-lg-block position-static">
            
        </Row>
        <div className="position-absolute tw-bottom-0 tw-right-0 d-none d-lg-block tw-w-7/12">
           <Image className="img-fluid object-fit-cover" src={require('../assets/images/Register-image.png').default} alt="Logo Bumbuku" height="100%"/>
        </div>
        
    </Container>


    <div className="flex flex-col justify-center items-center h-screen lg:flex-row bg-white dr">
      <div className="lg:w-1/3">
        <div className="font-opensans p-5">
          <p className="font-opensans font-bold text-3xl pb-16">Login</p>
          <p className="font-opensans font-regular text-3xl pb-2">Login to your account</p>     
          <div className="text-grey">
            <p className="font-opensans text-sm py-5 font-light pb-10">
              Thank you for get back bumbu KU, lets access our the best seasoning recommendation for you
            </p>
          </div>
          <form onSubmit={(e) => dispatch(loginAction(login, e, history, setLogin))}>
            <div className="mb-4">
              <label 
                className="font-opensans text-sm font-regular mb-5 text-grey"
              >
                Username
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:border-base bg-grey" 
                id="username" 
                type="text" 
                placeholder="Your username"
                name="name"
                value={login.name} onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label 
                className="font-opensans text-sm font-regular mb-5 text-grey"
              >
                Password
              </label>
                <input 
                  className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-te" 
                  id="password" 
                  type="password" 
                  placeholder="Password"
                  name="password"
                  value={login.password} onChange={handleChange}
                />
            </div>
          <div className="pt-5 lg:w-40">
            <button type="submit" className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full">Sign In</button>
          </div>
          </form>
          <div className="pt-12 items-center">
            <p className="font-opensans text-m text-grey">
              Don’t have an account yet?
              <Link to='/register/'>
                <b className="font-opensans text-md text-base ml-1"> 
                  Register
                </b>
              </Link>
            </p>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
