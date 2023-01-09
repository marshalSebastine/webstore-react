/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { checkUserSession } from './store/user/user-action-types';
import Home from './routes/home/home-component';
import Navigation from './routes/navigation/navigation-component';
import Shop from './routes/shop/shop-component';
import Authorization from './routes/authorization/authorisarion.component';
import CartComponent from './routes/cart/cart-component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
        <Route element={<Shop />} path={'/shop/*'} />
        <Route element={<Authorization />} path="/authorization" />
        <Route element={<CartComponent />} path="/checkout" />
      </Route>
    </Routes>
  );
};

export default App;
