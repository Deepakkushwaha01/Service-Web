import React from "react";
import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoCallSharp, IoTimeOutline } from "react-icons/io5";

import { ImHome } from "react-icons/im";
import Social from "./Social";

const F1 = () => {
  return (
    <Fone>
   
        <div className="footerdiv one">

          <h3 className="onehead"><span><ImHome /></span>  INDIAN SERVICE CENTER</h3>
          
          <p align="justify" className="para">
            We Repair & Service all Brands & Models Sterio with 100% accurate
            diagnosis & resolution. Sterio Repair with genuine Spare Parts and
            affordable Services. Quality Professionals. Prodiving Our Services
            in all over India
          </p>

          <h3 className="onefollow">Follow Us On</h3>

         <div className="social">
          <Social/>
         </div>

        </div>


{/*-------------------------------------------- Second div --------------------------------------------------------------------- */}
        <div className="footerdiv two">
        <h2 className="twohead"> Contact Us </h2>

        <div className="twospace">
          <span>
            <FaLocationArrow />
          </span>
          <p>Shop no 555, Lajpat Rai Market, Chandni Chowk, Delhi, 110006</p>
        </div>


        <div  className="twospace">
          <span>
            <TfiEmail />
          </span>
          <p>
            <a href="mailto:isc555lajpatnagar@gmail.com">
              isc555lajpatnagar@gmail.com
            </a>
          </p>
        </div>


        <div className="twospace" >
          <span >
            <IoCallSharp />
          </span>
          <p>
            <a href="tel:+917678486507">+91 7678486507</a>
          </p>
        </div>

        <div className="twospace" >
          <span >
            <IoTimeOutline />
          </span>
          <p>11am - 7pm</p>
        </div>
        </div>

{/*-------------------------------------------- third div---------------------------------------------------------- */}

        <div className="footerdiv third">
        <h2 className="thirdhead">Lets Find Us On</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.08183408203!2d77.23355857538192!3d28.65726827565128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd43f9054927%3A0x8a66ff3c768cb612!2sISC555!5e0!3m2!1sen!2sin!4v1685989669914!5m2!1sen!2sin"
          className="thirdmap"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>

    </Fone>
  );
};

const Fone = styled.section`
  background-color: ${({ theme }) => theme.colors.footerlight};
 display: grid;
 padding: 2rem 2rem;
 grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
gap: 3rem;
justify-content: center;
align-items: center;
color: #fff;

a{
  color: #fff;
}

.footerdiv{
  height: auto;
}

/*----------------------------------- First Footer Div ----------------------------------------------------------------- */
.one{
padding:2rem;

.para{
  font-size: 1.6rem;
}
.onehead{
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  font-size: 2rem;
}

.onefollow{
  margin:2rem 0;
  font-size: 1.7rem;
}

.social{
  margin-left: 2.5rem;
  font-size: 3rem;
  display: flex;
  gap: 1rem;
}
}
/* ----------------------------------------- End First Footer------------------------------------------------------ */

/*---------------------------------------- Second Footer Div ---------------------------------------------------*/
.two{
padding: 2rem;

.twohead{
  margin-bottom: 2rem;
  font-size: 2.7rem;
}

.twospace{
  display: flex;
  gap: 2rem;
  font-size: 1.6rem;
  margin: 2rem 0;
}  
}
/*---------------------------------------- End Second Footer Div ---------------------------------------------------*/

/*---------------------------------------- Third Footer Div ---------------------------------------------------*/
.third{
  padding: 2rem;
  
  .thirdhead{
    margin-bottom: 2rem;
  font-size: 2.6rem;
  }

  .thirdmap{
    height: 20rem;
    max-width: 90%;
    border-radius: 1rem;
  }
}

/*---------------------------------------- End Third Footer Div ---------------------------------------------------*/


@media (max-width:${({theme})=>theme.media.mobile} ) {
grid-template-columns: none;
grid-template-rows: block;
}

@media (max-width:320px) {
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  .one{
padding:1rem 0;

.para{
  font-size: 1rem;
}
.onehead{
  font-size: 1.5rem;
}
p{
  font-size: 1.2rem;
}
.onefollow{
  font-size: 1.7rem;
}

.social{
  font-size: 2rem;
}
}

.two{
padding: 1rem;

.twohead{
  margin-bottom: 2rem;
  font-size: 1.7rem;
}

.twospace{
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
  margin: 2rem 0;
}  
}

}



`;

export default F1;
