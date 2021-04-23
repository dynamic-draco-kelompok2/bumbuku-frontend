/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Logo from "../assets/images/Logo bumbukuok-01.png";
import { Nav, Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/auth.actions";

import { getCart, cleanCart } from "../redux/actions/cart.action";

const NavbarMenu = () => {
	const dataOrder = useSelector((state) => state.handleCart.data);
	const history = useHistory();
	const isLogin = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleLogOut = () => {
		localStorage.clear();
		dispatch(logoutAction());
		dispatch(cleanCart());
		history.push("/");
	};

	useEffect(() => {
		if (localStorage.payload) {
			dispatch(getCart(JSON.parse(localStorage.payload)._id));
		}
	}, [dispatch]);

	return (
		<div className="">
			<Navbar
				className="tw-bg-base d-flex justify-content-between px-4"
				expand="lg"
				variant="dark"
			>
				<Navbar.Brand href="/" className="d-lg-none">
					<img src={Logo} alt="logo" className="tw-h-8 tw-w-36" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-lg-between"
				>
					<div className="tw-flex tw-text-center tw-items-center">
						<Navbar.Brand className="d-none d-lg-block">
							<Link to="/">
								<img src={Logo} alt="logo" className="tw-h-8 tw-w-36" />
							</Link>
						</Navbar.Brand>
						{/* {isLogin.isLogged && (
              <span className="tw-font-opensans tw-text-white lg:tw--ml-2 tw-text-base">
                Hi, {JSON.parse(localStorage.payload).name} 
              </span>
            )} */}
					</div>
					<Form className="tw-hidden lg:tw-flex lg:tw-w-1/2">
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2 focus:tw-outline-none tw-font-opensans"
						/>
						<button className="tw-bg-icon tw-text-white tw-py-1 tw-px-4 tw-text-md tw-rounded tw-font-opensans">
							Search
						</button>
					</Form>
					<Nav className="tw-font-opensans align-items-lg-center">
						<Link to="/category" className="tw-text-white tw-my-3 lg:tw-mx-3">
							Category
						</Link>
						<div className="tw-flex tw-flex-row">
							<Link to="/cart" className="tw-text-white tw-my-3 lg:tw-mx-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-bag-check-fill"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
									/>
								</svg>{" "}
							</Link>
							<div className="tw-bg-icon tw-flex tw-rounded-full tw-w-5 tw-h-5 tw-mt-1 tw--ml-1 lg:tw--ml-4 tw-items-center tw-text-center">
								<span className="tw-text-xs tw-text-white tw-mx-auto">
									{dataOrder.length}
								</span>
							</div>
						</div>
						<div className="horizontal-line d-none d-lg-block tw-bg-white tw-h-10"></div>
						{isLogin.isLogged ? (
							<NavDropdown
								title={JSON.parse(localStorage.payload).name}
								id="basic-nav-dropdown"
								className="navDropDown"
							>
								<NavDropdown.Item href="/profile-user">
									Profile
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#" onClick={handleLogOut}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							// <div>
							//   <button
							//     className="tw-text-white tw-my-3 lg:tw-mx-2 my-lg-0"
							//     onClick={handleLogOut}
							//   >
							//     Logout
							//   </button>
							// </div>
							<Link
								to="/login"
								className="tw-text-white tw-my-3 lg:tw-mx-2 my-lg-0"
							>
								Login
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarMenu;
