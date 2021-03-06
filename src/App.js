import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './component/Navbar'
import { useSelector } from 'react-redux';
import './App.css'

// Page
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import BumbuDasarDetails from './pages/BumbuDasarDetails'
import Cart from './pages/Cart'
import ProfileUser from './pages/ProfileUser';
import CategoryPage from './pages/CategoryPage';
import Checkout from './pages/Checkout';
import ReviewProdukPage from './pages/ReviewProdukPage';
import Footer from './component/Footer'
import HistoryTransaksi from './pages/HistoryTransaksi';

function App() {
  const isLogin = useSelector(state => state.auth.isLogged);

  return (
    <div className="tw-bg-desktop tw-min-h-screen position-relative flex-column d-flex">
      <Router>
      <Switch>
          <Route path="/register">
          </Route>
          <Route path="/login">
          </Route>
          <Route path="/">
            <Navbar/>
          </Route>
      </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {!isLogin ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
            {!isLogin ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/cart">
            {isLogin ? <Cart /> : <Redirect to="/login" />}
          </Route>
          <Route path="/productdetails/:id">
            <ProductDetails />
          </Route>
          <Route path="/bumbudasardetails/">
            <BumbuDasarDetails />
          </Route>
          <Route path="/category">
            <CategoryPage />
          </Route>
          <Route path="/history">
            {isLogin ? <HistoryTransaksi /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/profile-user">
            {!isLogin ? <Redirect to="/"/> : <ProfileUser />}
          </Route>
          <Route path="/checkout">
            {isLogin ? <Checkout /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/review-produk/:id">
            {isLogin ? <ReviewProdukPage /> : <Redirect to="/login"/>}
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Switch>
            <Route path="/register">
            </Route>
            <Route path="/login">
            </Route>
            <Route path="/">
              <Footer />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
