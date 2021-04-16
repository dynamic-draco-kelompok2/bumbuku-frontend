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
      <Navbar className="bg-base d-flex justify-content-between" expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="d-lg-none">
          <img src={Logo} alt="logo" className="h-8 w-36"/>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="bg-icon"
        />
        <Navbar.Collapse 
          id="basic-navbar-nav"
          className="flex justify-content-lg-between"
        > 
          <Navbar.Brand href="#home" className="d-none d-lg-block">
            <img src={Logo} alt="logo" className="h-8 w-36"/>
          </Navbar.Brand>
          <Form className="hidden lg:flex lg:w-1/2">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 focus:outline-none font-opensans" />
            <button className="bg-icon text-white py-1 px-2 text-md rounded font-opensans">Search</button>
          </Form>
          <Nav className="font-opensans">
            <Link 
              to="/category" 
              className="text-white my-3 lg:mx-3 my-lg-0"
            >
              Category
            </Link>
            <Link 
              to="/category" 
              className="text-white my-3 lg:mx-2 my-lg-0"
            >
              Cart
            </Link>
            {token
            ? 
              <button 
                className="text-white my-3 lg:mx-2 my-lg-0"
                onClick={handleLogOut}
              >
                Logout
              </button>
            :
              <Link 
                to="/login" 
                className="text-white my-3 lg:mx-2 my-lg-0"
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
