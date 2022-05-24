import './App.css';
import React from "react";
import Home from './routes/home/home-component.jsx'
import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation-component';
import Shop from './routes/Shop/Shop-component';
import Authorization from './routes/authorization/authorisarion.component';
import CartComponent from './routes/cart/cart-component';


const App = () => {


  return (
    <Routes>
         <Route element={<Navigation/>} path={'/'}>
           <Route index element = {<Home/>}/>
           <Route element={<Shop/>} path = {'/shop/*'}/>
           <Route element={<Authorization/>} path = {'/authorization'}/>
           <Route element={<CartComponent/>} path = {`/checkout`}/>
         </Route>
    </Routes>
  );


}

export default App;
