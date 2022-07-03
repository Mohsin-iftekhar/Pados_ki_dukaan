import React from 'react'
import { Link } from 'react-router-dom'
import '../vegetable.css'
import {useEffect} from 'react'

export const Vegetable = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
  <div>
        <head>
            <title>VEGETABLE</title>
        </head>
    
        <body>
    
          <section className="firstsec background">
              <div className="boxmain">
                  <div className="firsthalf">
            <p className="textbig">VEGETABLE AND FRUITS SECTION</p>
                 <p className="textsmall">
                  WELCOME TO THE VEGETABLE AND FRUITS SECTION<br/>
                  GET FRESH AND HEALTHY VEGETABLES AND FRUITS HERE.<br/>
                  EXPLORE VARIOUS SHOPS AROUND YOU BELOW!!!
                 </p>
                  </div>
                  <div className="secondhalf">
             <img className="imag" src={require("../images/veg2.jpg")}/>
                  </div>
              </div>
          </section>
          <section className="section" id="services">
              <div className="par">
              <p className="sectag textbig ">SUNFLOWER VEGETABLES AND FRUITS</p>
    
              <p className="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                   unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem Ipsum.</p>
                  <br/>
                  <Link to='grocstore'> <button href="#" class="fashion">CLICK TO VIEW THIS STORE </button></Link>
                 </div>
                   <div className="thumbnail">
                       <img src={require("../images/shop1.jpg")} className="imageflid1"/>
              </div>
    
          </section>
          <section className="section" id="services">
              <div className="par">
              <p className="sectag textbig ">LOCAL VEGETABLES AND FRUITS SHOP </p>
    
              <p className="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                   unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem Ipsum.</p>
                  <br/>
                  <Link to='grocstore'> <button href="#" class="fashion">CLICK TO VIEW THIS STORE </button></Link>
                 </div>
                   <div className="thumbnail">
                       <img src={require("../images/shop2.jpg")} className="imageflid1"/>
              </div>
    
          </section>
          <section className="section" id="services">
              <div className="par">
              <p className="sectag textbig ">THE VEGGY</p>
    
              <p className="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                   unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                   PageMaker including versions of Lorem Ipsum.</p>
                  <br/>
                  <Link to='grocstore'> <button href="#" class="fashion">CLICK TO VIEW THIS STORE </button></Link>
                 </div>
                   <div className="thumbnail">
                       <img src={require("../images/shop3.jpg")} className="imageflid1"/>
              </div>
    
          </section>
        <hr/>
        <footer className="background">
            <p className="textfooter">
            Copyright &copy; 2027-All rights reserverd</p>
    
        </footer>
        </body>
        </div>
    
  )
}
