import React from 'react'
import { CartState } from '../context/Context'

import '../styles.css'
import Filters from './Filters';
import { Header } from './Header';
import SingleProduct from './SingleProduct';
import { useEffect } from 'react';
export const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 const {
     state:{products},
    } =   CartState();
  return (
    <div className='home'>
    
    { <Filters/>}
    
    <div className='productContainer'>
    {
        products.map((prod)=>{
        return <SingleProduct prod={prod} key={prod.id} />
        })
    }
    </div>
    </div>
  );
};

