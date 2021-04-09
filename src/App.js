import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App bg-desktop">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/productdetails">
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
