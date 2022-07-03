import React, { createContext, useContext, useReducer } from 'react';
// import faker from "faker";
// import * as faker from '@faker-js/faker';
import { faker } from '@faker-js/faker';
// var faker = require('faker');
import { cartReducerfash, productReducerfash } from './Reducerfash';
const Cart=createContext();
faker.seed(99);
const Contextfash = ({children}) => {
    const product = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.city(),
        // inStock: faker.random.arrayElement([0,3,5,6,7]),
        inStock:faker.helpers.arrayElements([1, 2, 3, 4, 5], 2),
        fastDelivery:faker.datatype.boolean(),
       ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5], 2)
    
        }));
        const [state, dispatch] = useReducer(cartReducerfash, {
            product:product,
            cart:[]
        });
        const [productState, productDispatch] = useReducer(productReducerfash, {
            byStock:false,
            byFastDelivery:false,
            byRating:0,
            searchQuery:"",
        });
  return (
   <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
   {children}
   </Cart.Provider>
  )
}

export default Contextfash;
export const CartStatee=()=>{
    return useContext(Cart);
};