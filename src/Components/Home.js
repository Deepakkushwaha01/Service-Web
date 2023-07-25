import React from "react";
import styled from "styled-components";
import { IoCallSharp,IoLogoWhatsapp } from "react-icons/io5";

const Home = () => {
  return (
    <Headpart id="home"  >
      <div className="home-main-div">
      <div className="headdiv one" >
      <h1 >Repair your Stereos by </h1>
      <span data-text="Professionals" className="pro">
        Professionals
      </span>
      <p align="justify" >
        We are Indian Services center. We have highly qualified industry
        specialist to repair your stereo from all over India.
      </p>

      {<div className="headcontact">
        <button className="btn" >  
        <a href="tel:+917678486507" name='call' className="head-con-btn"><IoCallSharp />Call Us</a>
        </button>

        <button className="btn" >
        <a href="https://wa.me/917678486507" name='whatsapp' className="head-con-btn" target='_blank'> <IoLogoWhatsapp/>Chat Us</a>
        </button>
       
      </div>}
    </div>
{/* --------------------------------------- Second Div ---------------------------------------------------- */}
    <div className="headdiv two">
      <img
        src="/images/headimg.png"
        alt="error"
     
      />
    </div>
      </div>
    
  </Headpart>
  )
}

const Headpart=styled.section`
margin:14rem  10rem 0rem 10rem;
border: "1px solid red";

a{
  color: #fff;
}
.home-main-div{
  display: grid;
  background-color: #fafafa;
  border-radius: 2rem;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
}

.one{
  padding: 2rem;
  display: flex;
  flex-direction: column;
h1{
  align-self: center;
  font-size:4rem ;
}

p{
  margin-top: 3rem;
  font-size: 1.8rem;
/*   border: 1px solid red; */
}
.pro {
 /*  border: 1px solid black; */
  align-self: center;
      color: #fff;
      position: relative;
      font-size: 4rem;
      font-weight: 700;
      -webkit-text-stroke: 0.3wv;
      text-transform: uppercase;
    }
    .pro:before {
      content: attr(data-text);
      top: 0;
      left: 0;
      position: absolute;
      width: 0;
      height: 100%;
      -webkit-text-stroke: 0wv #fff;
      border-right: 7px solid ${({ theme }) => theme.colors.DarkBlue};
      color: ${({ theme }) => theme.colors.DarkBlue};
      overflow: hidden;
      animation: animate 6s linear infinite;
    }

    @keyframes animate {
      0%,
      10%,
      100% {
        width: 0;
        backface-visibility: hidden;
      }
      70%,
      90% {
        width: 100%;
        will-change: transform;
      }
    }
    
    .headcontact{
      margin-top: 5rem;
      align-self: center;
    display: flex;
    gap: 3rem;
    /* border: 1px solid yellow; */
  }
  .btn{
    width: 15rem;
    /* max-width: 20%; */
    font-size: 1.8rem;
    border-radius: 1rem;
    border: none;
   
    height: 4rem;
    background-color:#48D1CC;
    .head-con-btn{
      display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    }
  }
}

.two{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  img{
    max-width: 100%;
  }
}

/*------------------------------------- Tab responsive(1057) ----------------------------------------------*/


@media(max-width:1060px){
  margin: 14rem  6rem;
 /*  */
}

@media(max-width:${({theme})=>theme.media.tab}){
  margin: 14rem  6rem;
  .home-main-div{

.one{
  h1{
    font-size: 2rem;
  }
  .pro{
    font-size: 3rem;
  }
  .headcontact{
      margin-top: 5rem;
      max-width: 90%;
    gap: 2rem;
   
    }
}
}
 /*  */
}



/* ------------------------------------- Mobile responsive(778, 350,375)----------------------------------------------- */

@media(max-width:${({theme})=>theme.media.mobile}){

margin: 11rem 2rem 0 2rem;
  .home-main-div{
    grid-template-columns:none;
    grid-template-rows: repeat(auto-fit,minmax(250px,1fr));
.two{
  img{
    max-width: 100%;
  }
}  
.one{
  h1{
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
  .pro{
    font-size: 3rem;
  }
  .headcontact{
      margin-top: 5rem;
      max-width: 90%;
    gap: 2rem;
   
    }
}
}}

@media(max-width:376px){
  margin: 14rem 1rem;
  .home-main-div{
  .one{
    h1{
      font-size: 1.8rem;
    }
    .headcontact{
      margin-top: 5rem;
      max-width: 90%;
    gap:1rem;
   }
  }}
 
}


@media(max-width:350px){
  .home-main-div{
    grid-template-columns:none;
    grid-template-rows: repeat(auto-fit,minmax(100px,1fr));
    .one{
      p{
        font-size: 1.4rem;
      }
      .pro{
        font-size: 2.5rem;
      }
      .headcontact{
      margin-top: 5rem;
      align-self: center;
      max-width: 80%;
    flex-direction: column;
    gap: 3rem;
   
    }
    }
 }

}



`

export default Home
