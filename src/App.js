import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './component/Navbar'
import { useSelector } from 'react-redux';
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import './App.css'
import ProfileUser from './pages/ProfileUser';

function App() {
  const isLogin = useSelector(state => state.auth.isLogged);

  return (
    <div className="tw-bg-desktop tw-h-screen">
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
          <Route path="/profile-user">
            {!isLogin ? <Redirect to="/"/> : <ProfileUser />}
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
