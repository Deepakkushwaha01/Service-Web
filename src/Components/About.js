import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Social from "./Footers/Social";
import Social2 from "./Social2";

const About = () => {
  return (
    <Sec id="about">
      <div className="written one">
        <h1 className="aboutheading">About Us</h1>
        <p align="justify">
          Welcome to <span>INDIAN SERVICE CENTER</span>, the leading destination
          for professional stereo repair services. With <span style={{color:"#ffa90d"}}>20+ years</span> of experience
          in the industry, we have established ourselves as a trusted and
          reliable resource for audio enthusiasts seeking top-quality repairs.
          <br /><br/>
          At <span>INDIAN SERVICE CENTER</span>, we understand the importance of sound quality
          and the value of your stereo equipment. Our team of highly skilled
          technicians specializes in diagnosing and resolving a wide range of
          stereo issues, from speaker repairs to amplifier troubleshooting. We
          are passionate about bringing your audio equipment back to life,
          ensuring that you can once again enjoy your favorite music with
          crystal-clear clarity.
        </p>
        <div
          className="socialicons"
        >
        <h2>Find Us On</h2>
          <Social2 />
        </div>
      </div>

      <div className="written img">
        <img src="/images/sachin.jpg" alt="" className="aboutimg" />
        <img src="/images/aboutorange.jpg" className="aboutorange" alt="" />
      </div>
    </Sec>
  );
};

const Sec = styled.section`
  margin: 0rem 8rem;
  /* border: 1px solid red; */
  /*  */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .written {
     /*  border: 1px solid green; */
  }

  .img {
    padding: 2rem;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    .aboutimg {
      max-width: 70%;
      z-index: 2;
      position: relative;
      animation: img-portfile 8s ease-in-out infinite;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    .aboutorange {
      max-width: 55%;
      z-index: 1;
      position: absolute;
      right: 8rem;
      animation: img-portfile 8s ease-in-out infinite;
      border-radius: 40% 70% 30% 70%/60% 30% 40% 60%;
    }

    @keyframes img-portfile {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }
      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }
  }

  .one {
    h1 {
      font-size: ${({ theme }) => theme.font.h1};
      color: ${({ theme }) => theme.colors.DarkBlue};
      position: relative;
    }
    h1:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0%;
      width: 30%;
      height: 5px;
      background-color: #ffa90d;
    }
    p {
      margin-top: 3rem;
      font-size: ${({ theme }) => theme.font.p};

      span {
        color: ${({ theme }) => theme.colors.DarkBlue};
        font-weight: 700;
      }
    }
    .socialicons{
       
            margin:5rem 0;
            display: grid;
gap: 1rem;
    h2{
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.DarkBlue};
     font-weight: 600;
      padding-left: 1rem;
     border-left: 8px solid #219794;
     margin-bottom: 5rem;
    }
   
    }
  }

/*------------------------------------- Tab responsive(1057) ----------------------------------------------*/


@media(max-width:1246px){
  .img {
    .aboutimg {
    }

    .aboutorange {
      right: 6rem;
  
    }
  }

.one{
  h1{
    font-size: 3.5rem;
  }
  p{
    font-size: 1.6rem;
  }
  .social{
    h2{
      font-size: 2.7rem;
    }
  }
}  

}

@media(max-width:${({theme})=>theme.media.tab}){
  margin: 14rem 6.2rem;
/*   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
/* grid-template-columns: none;
grid-template-rows: block; */
  .img {
    padding: 5rem;
    .aboutimg {
      max-width: 80%;
    }

    .aboutorange {
      right: 7rem;
  
    }
  }

.one{
  h1{
    font-size: 3.5rem;
  }
  p{
    font-size: 1.4rem;
  }
  .social{
    h2{
      font-size: 2.7rem;
    }
  }
}  
}


/* ------------------------------------- Mobile responsive(778, 350,375)----------------------------------------------- */

@media(max-width:${({theme})=>theme.media.mobile}){
  margin: 10rem 2rem;
  grid-template-columns:none;
    grid-template-rows: repeat(auto-fit,minmax(250px,1fr));
  .img {
    padding: 1rem;
    .aboutimg {
      max-width: 70%;
    }

    .aboutorange {
      max-width: 55%;
      right: 5rem;
  
    }
  }

.one{
  h1{
    font-size: 3.5rem;
  }
  p{
    font-size: 1.6rem;
  }
  .social{
    h2{
      font-size: 2.7rem;
    }
  }
}  
}


 @media(max-width:460px){
  margin: 2rem 2rem;
  .img {
  
    .aboutimg {
      max-width: 90%;
    }

    .aboutorange {
      max-width: 70%;
      right: 0rem;
  
    }
  }
}
 
`;

export default About;
