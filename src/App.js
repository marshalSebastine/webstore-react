import './App.css';
import React from "react";
import Home from './routes/home/home-component.jsx'
import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation-component';
import Shop from './routes/shop/shop-component';
import Authorization from './routes/authorization/authorisarion.component';



const App = () => {


  return (
    <Routes>
         <Route element={<Navigation/>} path={'/'}>
           <Route index element = {<Home/>}/>
           <Route element={<Shop/>} path = {'/shop'}/>
           <Route element={<Authorization/>} path = {'/authorization'}/>
         </Route>
    </Routes>
  );


}

export default App;
