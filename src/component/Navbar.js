import React from 'react'
import Logo from '../assets/images/Logo bumbukuok-01.png'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
  const token = localStorage.getItem("payload")
  const handleLogOut = () => {
    window.localStorage.clear()
    window.location.reload();
  }

  return (
    <div className="">
      <Navbar 
        className="tw-bg-base d-flex justify-content-between" 
        expand="lg" 
        variant="dark"
      >
        <Navbar.Brand href="#home" className="d-lg-none">
          <img src={Logo} alt="logo" className="tw-h-8 tw-w-36"/>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse 
          id="basic-navbar-nav"
          className="d-flex justify-content-lg-between"
        > 
          <Navbar.Brand className="d-none d-lg-block">
            <Link to="/">
              <img 
                src={Logo} 
                alt="logo" 
                className="tw-h-8 tw-w-36"
              />
            </Link>
          </Navbar.Brand>
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
            <Link 
              to="/cart" 
              className="tw-text-white tw-my-3 lg:tw-mx-3 my-lg-0"
            >
              Cart
            </Link>
            {token
            ? 
              <button 
                className="tw-text-white tw-my-3 lg:tw-mx-2 my-lg-0"
                onClick={handleLogOut}
              >
                Logout
              </button>
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
