import './App.css';
import React from "react";
import Home from './routes/home/home-component.jsx'
import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation-component';
import Shop from './routes/shop/shop-component';
import SignIn from './routes/sign-in/sign-in.component';


const App = () => {

  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    }
  ];

  return (
    <Routes>
         <Route element={<Navigation/>} path={'/'}>

           <Route index element = {<Home/>}/>
           <Route element={<Shop/>} path = {'/shop'}/>
           <Route element={<SignIn/>} path = {'/signin'}/>
         </Route>
    </Routes>
  );


}

export default App;
