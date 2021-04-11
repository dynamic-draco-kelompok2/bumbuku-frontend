import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App bg-desktop h-screen">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productdetails/:id">
            <ProductDetails />
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
