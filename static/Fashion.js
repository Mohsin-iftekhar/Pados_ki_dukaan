import React from 'react'
import { Link } from 'react-router-dom'
import '../fashion.css'
export const Fashion = () => {
  return (
    <div>
    <head>
        <title>THE FASHION HUB</title>
    </head>

    <body>

      <section class="firstsec background">
          <div class="boxmain">
              <div class="firsthalf">
        <p class="textbig">THE FASHION HUB</p>
             <p class="textsmall">
              WELCOME TO THE FASHION SECTION.
              GET THE LATEST TRENDS AND PREMIUM QUALITY <br/>
              CLOTHS IN ONE GO!!!
             </p>
           
              </div>
              <div class="secondhalf">
         <img class="imag" src={require("../images/cloth.jpg")}/>
              </div>
          </div>
      </section>
      <section class="section" id="services">
          <div class="par">
          <p class="sectag textbig ">NEXT  GENERATION  FASHION  STORE</p>

          <p class="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum.</p>
              <br/>
              <Link to='grocstore'> <button href="#" class="fashion">CLICK TO VIEW THIS STORE </button></Link>
             </div>
               <div class="thumbnail">
                   <img src={require("../images/shop4.jpg")} class="imageflid1"/>
          </div>

      </section>
      <section class="section" id="services">
          <div class="par">
          <p class="sectag textbig ">ULTIMATE FASHION STORE </p>

          <p class="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum.</p>
              <br/>
              <Link to='grocstore'> <button href="#" class="fashion">CLICK TO VIEW THIS STORE </button></Link>
             </div>
               <div class="thumbnail">
                   <img src={require("../images/shop1.jpg")} class="imageflid1"/>
          </div>

      </section>
      <section class="section" id="services">
          <div class="par">
          <p class="sectag textbig ">MEGA MART FASHION HUB</p>

          <p class="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum.</p>
              <br/>
              <Link to='grocstore'> <button href="#" class="fashion">CLICK TO VIEW THIS STORE </button></Link>
             </div>
               <div class="thumbnail">
                   <img src={require("../images/shop2.jpg")} class="imageflid1"/>
          </div>

      </section>
    <hr/>
    <footer class="background">
        <p class="textfooter">
        Copyright &copy; 2027-All rights reserverd</p>

    </footer>
    </body>
        </div>
  )
}
