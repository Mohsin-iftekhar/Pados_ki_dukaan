import React from 'react'
import { CartState } from '../context/Context'

import '../styles.css'
import Filters from './Filters';
import { Header } from './Header';
import SingleProduct from './SingleProduct';

export const Home = () => {
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

