import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Spinner, Form, Button, Image } from 'react-bootstrap';

import { registerAction } from '../redux/actions/auth.actions';

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  const registerLoading = useSelector(state => state.auth)

  const [register, setRegister] = useState({
      name: "",
      email: "",
      password: "",
      alamat: ""
  })

  const handleChange= (e) => {
      setRegister({
          ...register,
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
                    <h3>Daftar ke Bumbu KU!</h3>
                    <div className="mt-5 text-grey">
                      <div>Daftar untuk membuat bumbu anda sendiri bersama bumbu KU</div>
                      <div>pilih bumbu dan kreasikan menurut selera anda</div>
                    </div>
                </div>
                <div className="mt-5">
                    {registerLoading.isLoading === true ?
                    <div className="text-center">
                        <Spinner className="mt-3" animation="border" />
                    </div>
                    :
                    <Form onSubmit={(e) => dispatch(registerAction(register, e, history, setRegister))}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required 
                          className="rounded-3xl" 
                          type="text" 
                          placeholder="Your email"
                          value={register.email} onChange={handleChange} name="name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required 
                          type="text" 
                          placeholder="Your username"
                          value={register.name} onChange={handleChange} name="name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required  
                          type="password" 
                          placeholder="Password"
                          value={register.password} onChange={handleChange} name="password"/>
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control required  
                          type="text" 
                          placeholder="Address"
                          value={register.alamat} onChange={handleChange} name="alamat"/>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="mt-3 w-100 tw-bg-base tw-border-base tw-shadow-base">
                        Register
                    </Button>
                    </Form>
                    }
                    <div className="tw-pt-12 text-center">
                      <p className="font-opensans text-m text-grey">
                        Sudah mempunyai akun Bumbu KU ?
                        <Link to='/register/'>
                          <b className="font-opensans text-md text-base ml-1 tw-text-basic"> 
                            Login
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
    </>
  )
}

export default Register
