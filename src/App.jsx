import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Style
import useStyle from './Components/Style/Theme';
import './App.css'
// Components
import Navbar from './Components/Navbar';
import About from './Components/About';
import Cart from './Components/Cart';
import FAQ from './Components/FAQ';
import Home from './Components/Home';
import Login from './Components/Login';
// Material-ui
import { CssBaseline } from '@material-ui/core';

export default function App()
{
  const classes = useStyle();

  return (
    <BrowserRouter>
      {/* Normalizing App's CSS */}
      <CssBaseline />

      <div className={classes.theme}>

        {/* Website's navbar */}
        <Navbar />

        {/* Change the site content base on each route that lead to its component */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Home' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Cart' component={Cart} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/Login' component={Login} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}