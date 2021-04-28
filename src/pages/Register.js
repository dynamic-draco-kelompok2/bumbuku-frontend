import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Spinner, Form, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import { registerAction } from '../redux/actions/auth.actions';

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const registerLoading = useSelector(state => state.auth)

  const [validasi, setValidasi] = useState({
    name: false,
    email: false,
    password: false,
  })

  const [register, setRegister] = useState({
      name: "",
      email: "",
      password: "",
      alamat: ""
  })

  const checkValidAll = (pattern, value, input) => {
    if(pattern.test(value)){
      setValidasi({
        ...validasi,
        [input] : true
      })
    } else {
      setValidasi({
        ...validasi,
        [input] : false
      })
    }
  }
  // console.log(validasi)

  const handleChange= (e) => {
      setRegister({
          ...register,
          [e.target.name] : e.target.value
        })
        let passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let usernameRegex = /^.{4,}$/

        switch(e.target.name){
          case 'email': 
            checkValidAll(emailRegex, e.target.value, e.target.name);
            break
          case 'password':
            checkValidAll(passRegex, e.target.value, e.target.name);
            break
          case 'name':
          checkValidAll(usernameRegex, e.target.value, e.target.name);
          break
          default:
        }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validasi);

    if( validasi.email && validasi.name && validasi.password){
      dispatch(registerAction(register, e, history, setRegister))
    }
  }

  useEffect(() => {
  
  }, [register])

  return (
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Bumbuku - Register</title>
      <meta name="description" content="about"/>
    </Helmet>
    <Container fluid className="d-flex flex-row justify-content-between bg-white position-relative vh-100">
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
                    <h3>Daftar ke Bumbu KU!</h3>
                    <div className="mt-5 text-grey">
                      <div>Daftar untuk membuat bumbu anda sendiri bersama bumbu KU</div>
                      <div>pilih bumbu dan kreasikan menurut selera anda</div>
                    </div>
                </div>
                <div className="mt-5">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email <span className="tw-text-basic tw-font-opensans">*</span></Form.Label>
                      <Form.Control required type="email" placeholder="Enter email" 
                      className="rounded-3xl" 
                      value={register.email} onChange={handleChange} 
                      name="email"/>
                          {validasi.email === false ? 
                          (register.email === '' ? (
                            <></>
                          ) : ( <Form.Text id="text-muted" muted>
                          <span className="tw-text-basic tw-font-opensans">
                          alamat email belum benar
                          </span>
                          </Form.Text>))
                          :
                          (<></>)
                          }           
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username <span className="tw-text-basic tw-font-opensans">*</span></Form.Label>
                        <Form.Control required 
                          type="text" 
                          placeholder="Your username"
                          value={register.name} onChange={handleChange} name="name"
                          autoComplete="username"/>
                          {validasi.name === false ? 
                          (register.name === '' ? (
                            <Form.Text className="text-muted">
                            Minimal 4 karakter.
                          </Form.Text>
                          ) : ( <Form.Text id="text-muted" muted>
                          <span className="tw-text-basic tw-font-opensans">
                          masukkan minimal 4 karakter
                          </span>
                          </Form.Text>))
                          :
                          (<></>)
                          }
                 
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password <span className="tw-text-basic tw-font-opensans">*</span></Form.Label>
                        <Form.Control required 
                          type="password" 
                          placeholder="Password"
                          value={register.password} onChange={handleChange} name="password"
                          autoComplete="current-password"/>
                          {validasi.password === false ? 
                          (register.password === '' ? (
                            <Form.Text id="passwordHelpBlock" muted>
                            Minimal 8 karakter terdiri dari huruf kapital angka dan simbol.

                            </Form.Text>
                          ) : ( <Form.Text id="passwordHelpBlock" muted>
                          <span className="tw-text-basic tw-font-opensans">
                          password belum sesuai format
                          </span>
                          </Form.Text>))
                          :
                          (<></>)
                          }
                
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
                    <div className="tw-pt-12 text-center">
                      <p className="font-opensans text-m text-grey">
                        Sudah mempunyai akun Bumbu KU ?
                        <Link to='/login/'>
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
