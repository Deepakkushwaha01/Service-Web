import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "./Slider/Slider";


const Services = () => {
  const name = [
    "/slider/audi.png",
    "/slider/hyundai.png",
    "/slider/jaguar.png",
    "/slider/kia.png",
    "/slider/mercedes.png",
    "/slider/mg.png",
    "/slider/Renault.png",
    "/slider/skoda.png",
    "/slider/suzuki.png",
    "/slider/Toyota.png",
    "/slider/volkswagen.png",
 
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Service  id="services">
      <h1>Top Repaired Brands</h1>
<Carousel  responsive={responsive}
customTransition="all 0.5s linear"
transitionDuration={500}
scroll-snap={true}
  draggable={true}
 infinite={false}
 swipeable={true}
 slidesToSlide={800}  
 containerClass="carousel-container"
 itemClass="carousel-item-padding-40-px"
 removeArrowOnDeviceType={["tablet", "mobile"]}
 centerMode={true}
 >
{name.map((val, ind) => {
        return <Slider img={val} />
      })} 
</Carousel>
    </Service>
  );
};

const Service = styled.section`
margin: 10rem 8rem;
/* border: 1px solid red; */
h1{
  font-size: 4rem;
      color: ${({ theme }) => theme.colors.DarkBlue};
     font-weight: 600;
      padding-left: 1rem;
     border-left: 8px solid #219794;
}
.react-multi-carousel-list{
/*   border: 1px solid green; */
.react-multi-carousel-track {
  .react-multi-carousel-item{
    margin: 5rem 0.5rem;
 
  }
}
}


@media(max-width:${({theme})=>theme.media.mobile}){
 margin: 8rem 2rem 0rem 2rem ;
/*  border: 1px solid green; */

 h1{
  font-size: 3rem;
 }
  .react-multi-carousel-list{
.react-multi-carousel-track {

  .react-multi-carousel-item{
   padding:2rem 1rem;

  }
}
}
}

@media(max-width:375px){
 margin: 8rem 2rem;

 h1{
  font-size: 2.4rem;
 }
  .react-multi-carousel-list{
.react-multi-carousel-track {
  .react-multi-carousel-item{
    margin: 5rem 0.5rem;

  }
}
}
}




`;

export default Services;
