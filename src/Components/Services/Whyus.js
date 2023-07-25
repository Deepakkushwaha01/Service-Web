import React from "react";
import styled from "styled-components";

const Whyus = () => {
  return (
    <Why id="why">
      <h1>Why Us</h1>
      <div className="why">
        <div className="whydiv">
          <img src="/vactor_img/premium.png" alt="" />
          <div>
            <h3>Premium Repair</h3>
            <p>Top quality certified parts</p>
          </div>
        </div>

        <div className="whydiv">
          <img src="/vactor_img/tools.png" alt="" />
          <div>
            <h3>Instant Repair</h3>
            <p>Instantly repair when we get your stereo</p>
          </div>
        </div>

        <div className="whydiv">
          <img src="/vactor_img/best-price2.png" alt="" />
          <div>
            <h3>Reasonable Price</h3>
            <p>We provide our services on reasonable price</p>
          </div>
        </div>

        <div className="whydiv">
          <img src="/vactor_img/delivery-truck.png" alt="" />
          <div>
            <h3>All Over INDIA</h3>
            <p>We provide our services all over india</p>
          </div>
        </div>

        <div className="whydiv">
          <img src="/vactor_img/profile.png" alt="" />
          <div>
            <h3>Skilled Technicians</h3>
            <p>Trained & Qualified Professionals</p>
          </div>
        </div>

        <div className="whydiv">
          <img src="/vactor_img/original3.png" alt="" />
          <div>
            <h3>Original parts</h3>
            <p>we provide Original parts </p>
          </div>
        </div>

      </div>
    </Why>
  );
};

const Why = styled.section`

  margin: 5rem 8rem 0 8rem;
  /* border: 1px solid red; */
  display: flex;
  gap: 4rem;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.DarkBlue};
    font-weight: 600;
    padding-left: 1rem;
    border-left: 8px solid #219794;
  }
  .why {
    margin: 2rem 2rem;
   /*  border: 1px solid green; */
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    .whydiv {
      display: flex;
      gap: 1rem;
      /* justify-content: center; */
      align-items: center;
    /*   border: 1px solid #219794; */
      img {
        max-width: 20%;
      }
      h3 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 3rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }



  @media(max-width:850px){
 
    .why{
        grid-template-columns: repeat(2,minmax(300px,1fr));    

  }}  

/* ------------------------------------- Mobile responsive(778, 350,375)----------------------------------------------- */

@media(max-width:${({theme})=>theme.media.mobile}){
    margin: 3rem 2rem;
  gap: 2rem;
 

  .why {
    margin: 1rem 2rem;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }
    }

    @media(max-width:610px){
  .why {
    margin: 2rem 1rem;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    .whydiv {
      display: grid;
      gap: 1rem;
      
    }}}


    @media(max-width:400px){
  .why {
    margin: 2rem 1rem;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    .whydiv {
      display: grid;
      gap: 1rem;
      img{
        max-width: 30%;
      }
    }}}


    @media(max-width:300px){
  .why {
    margin: 0rem 0rem;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    .whydiv {
      display: grid;
      gap: 1rem;
      img{
        max-width: 35%;
      }
    }}}
`;

export default Whyus;
