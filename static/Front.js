import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
export const Front = () => {
  return (
      <div>
      <div>
    
     <body>
    
      <section className="firstsec background">
          <div className="boxmain">
              <div className="firsthalf">
        <p className="textbig">THE LOCAL SHOP</p>
             <p className="textsmall">
              NOW GET ALL THE STUFFS FROM YOUR LOCAL STORES<br/>
              IN ONE TAP!!!<br/>
              LOOK THROUGH ALL THE VARIOUS SHOPS AROUND YOU
              IN ONE PAGE AND MAKE THE BEST BUY!!!
             </p>
            
              </div>
              <div className="secondhalf">
         <img className="imag" src={require("../images/clip2.jpg")}/>
              </div>
          </div>
      </section>
      <section className="section" id="services">
          <div className="par">
          <p className="sectag textbig">The end of your fashion search is here</p>

          <p className="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum.</p>
              <br/>
            <Link to='fashion' >  <button href="fashion" className="fashion"  >CLICK TO VIEW NEARBY FASHION STORES </button></Link>
             </div>
               <div className="thumbnail">
                   <img src={require("../images/cloth.jpg")} className="imageflid1"/>
          </div>

      </section>
      <section className="section" id="services">
          <div className="par">
          <p className="sectag textbig">Get the best grocery items from shop next door </p>

          <p className="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum.</p>
              <br/>
          <Link to='grocery' ><button href="#" className="fashion">CLICK TO VIEW NEARBY RATION STORES </button></Link>
             </div>
               <div className="thumbnail">
                   <img src={require("../images/grocery.jpg")} className="imageflid1"/>
          </div>

      </section>
      <section className="section" id="services">
          <div className="par">
          <p className="sectag textbig">Grab fresh and local vegetables and fruits</p>

          <p className="secsub textsmall">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum.</p>
              <br/>
          <Link to='vegetable' ><button href="#" className="fashion">CLICK TO VIEW NEARBY VEGETABLE STORES </button></Link>
             </div>
               <div className="thumbnail">
                   <img src={require("../images/vegetable.jpg")} className="imageflid1"/>
          </div>

      </section>
    <hr/>
    <section className="contact" id="contact">
        <h1 className="textcenter">Contact Us</h1>
        <div className="form">
            <input className="forminput" type="text" name="name" id="name" placeholder="Enter your name"/>
            <input className="forminput" type="text" name="phone" id="phone" placeholder="Enter your number"/>
            <input className="forminput" type="text" name="email" id="email" placeholder="Enter your email"/>
            <textarea className="forminput" name="text" id="text" cols="30" rows="10" placeholder="Elaborate Your Concerns"></textarea>
            <button className="btn btndark">Submit</button>
        </div>
    </section>
    <footer className="background">
        <p className="textfooter">
        Copyright &copy; 2027-All rights reserverd</p>

    </footer>
    </body>
    </div>
    </div>
  )
}
