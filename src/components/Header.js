import React, { useState } from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {BrowserRouter, Link } from 'react-router-dom';
import {AiFillDelete} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import '../App.css';
import { CartState } from '../context/Context';
export const Header = () => {
    const [col,setcol]=useState(
        <div className='backgroundd' >
        <h2 >"WELCOME!!!"</h2>
    <Button type='button'
    variant='success'
    className='hi'

    >CLICK HERE TO ENTER THE PAGE</Button>
    </div>
    )
 const{
    state:{cart},
     dispatch
 }  = CartState ();
  return (
    
   
    <Link to='/' className='opp' onClick={()=>setcol(
        <Navbar className=' background'  style={{height:80}}>
        <Container>
        <Navbar.Brand>
        <Link to='/' className='opp'>PADOS KI DUKAAN</Link>
       
        </Navbar.Brand>
        <Navbar.Text className='search'>
        <FormControl className='m-auto' style={{width:500}} placeholder='Search a product' />
        </Navbar.Text> 
        <Nav>
        <Dropdown  >
        <Dropdown.Toggle variant='success'>
        <MdOutlineShoppingCart color="white" fontSize="25px"/>
        
        </Dropdown.Toggle>
        
        
        <Dropdown.Menu style={{minwidht:370}}
        align={{ lg: 'end' }}
        >
        {cart.length>0?(
   <>
   {
       cart.map((prod)=>(
   <span className='cartitem' key={prod.id}>
   <img src={prod.image} className='cartItemImg' alt={prod.name}/>
   <div className='cartItemDetail'>
   <span>{prod.name}</span>
   <span>$ {prod.price}</span>
   </div>
   <AiFillDelete
    fontSize="20px" 
    style={{cursor:"pointer"}}
    onClick={()=>
       dispatch({
           type:"REMOVE_FROM_CART",
           payload:prod,
       })
    }
    />
    </span>
       )
       )   
   }
   <Link to="/cart">
   <Button style={{width:"95%",margin:"0 10px"}}>
   Go to Cart
   </Button>
   
   </Link>
   </>
        ):(
            <span style={{padding:10}}>Cart is Empty</span>
        )}
        
        </Dropdown.Menu>
        </Dropdown>
       </Nav>
       
       </Container>
       </Navbar>
     )}
    >{col}</Link>
    )
        }
