import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Spinner, Form, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
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
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Bumbuku - Login</title>
      <meta name="description" content="about"/>
    </Helmet>
    <Container fluid className="d-flex flex-row justify-content-between h-100 bg-white position-relative">
        {registerLoading.isLoading === true ?
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
        <div className="position-absolute tw-bottom-0 tw-right-0 d-none d-lg-block tw-w-7/12 tw-z-10 tw-overflow-hidden">
           <Image className="img-fluid object-fit-cover" src={require('../assets/images/Register-image.png').default} alt="Logo Bumbuku" width="100%"/>
        </div>
        
    </Container>
    </>
  )
}

export default Login
