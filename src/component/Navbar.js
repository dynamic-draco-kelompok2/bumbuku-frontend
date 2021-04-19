import React from 'react'
import Logo from '../assets/images/Logo bumbukuok-01.png'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/auth.actions';

const NavbarMenu = () => {
  const dataUser = localStorage.getItem("payload")
  const user = JSON.parse(dataUser)
  const dataOrder = useSelector((state) => state.handleCart.data)
  const history = useHistory();
  const isLogin = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log(user.name)

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logoutAction());
    history.push('/');
  }

  return (
    <div className="">
      <Navbar 
        className="tw-bg-base d-flex justify-content-between" 
        expand="lg" 
        variant="dark"
      >
        
          <Navbar.Brand href="/" className="d-lg-none">
            <img src={Logo} alt="logo" className="tw-h-8 tw-w-36"/>
          </Navbar.Brand>
    
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse 
          id="basic-navbar-nav"
          className="justify-content-lg-between"
        > 
          <div className="tw-flex tw-text-center tw-items-center">
            <Navbar.Brand className="d-none d-lg-block">
              <Link to="/">
                <img 
                  src={Logo} 
                  alt="logo" 
                  className="tw-h-8 tw-w-36"
                />
              </Link>
            </Navbar.Brand>
            {user && (
              <span className="tw-font-opensans tw-text-white tw--ml-2 tw-text-base">
                Hi, {user.name}
              </span>
            )}
          </div>
          <Form className="tw-hidden lg:tw-flex lg:tw-w-1/2">
            <FormControl 
              type="text" 
              placeholder="Search" 
              className="mr-sm-2 focus:tw-outline-none tw-font-opensans" 
            />
            <button className="tw-bg-icon tw-text-white tw-py-1 tw-px-4 tw-text-md tw-rounded tw-font-opensans">Search</button>
          </Form>
          <Nav className="tw-font-opensans">
            <Link 
              to="/category" 
              className="tw-text-white tw-my-3 lg:tw-mx-3 my-lg-0"
            >
              Category
            </Link>
            <div>
              <div className="tw-absolute tw-bg-icon tw-w-5 tw-h-5 tw-rounded-full tw-flex tw-items-center tw--mt-2 tw-ml-6 tw-top-24 lg:tw-mt-0 lg:tw-top-2 lg:tw-right-20">
                <span className="tw-text-xs tw-text-white tw-mx-auto">{dataOrder.length}</span>
              </div>
              <Link 
                to="/cart" 
                className="tw-text-white tw-my-3 lg:tw-mx-3 my-lg-0"
              >
                Cart
              </Link>
            </div>
            {isLogin.isLogged
            ? 
              <div>
                <button 
                  className="tw-text-white tw-my-3 lg:tw-mx-2 my-lg-0"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            :
              <Link 
                to="/login" 
                className="tw-text-white tw-my-3 lg:tw-mx-2 my-lg-0"
              >
                Login
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarMenu
