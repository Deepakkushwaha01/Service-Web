import React from 'react'
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Contact = () => {
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
    <Div>
      <h1>Check It Out</h1>
<Carousel  responsive={responsive}  

 >
<iframe className='video' src="https://www.youtube.com/embed/rJst6jpodaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/9GgfGIdVjSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/m9KXeIYU7kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/qJtaJBqNZSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/AxarejXh-nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/OZv1Ntcw-2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/0ZDWQ6k9GYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/QkWWqzABlxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/xK-oOi-LNyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='video' src="https://www.youtube.com/embed/Ui_tnrujxrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</Carousel>
    </Div>
  )
}

const Div=styled.section`

margin: 10rem 8rem;

h1{
  font-size: 4rem;
      color: ${({ theme }) => theme.colors.DarkBlue};
     font-weight: 600;
      padding-left: 1rem;
     border-left: 8px solid #219794;
}

.react-multi-carousel-list{
.react-multi-carousel-track {

  .react-multi-carousel-item{
    margin: 5rem 0.5rem;
 /*    border: 1px solid red; */
    display: flex;
    justify-content: center;

  }}}
.video{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  max-width: 100%;
  height: 20rem;
}
@media(max-width:${({theme})=>theme.media.mobile}){
 margin: 5rem 2rem;

 .react-multi-carousel-list{
.react-multi-carousel-track {

  .react-multi-carousel-item{    
    padding: 0rem;
    margin: 5rem 0rem;

  }}}

 h1{
  font-size: 3rem;
 }
}

@media(max-width:375px){
  margin: 5rem 1rem;
  h1{
    font-size: 2rem;
  }
  .react-multi-carousel-list{
.react-multi-carousel-track {
  .react-multi-carousel-item{
 

  }}}
  .video{
    max-width: 100%;
  }
}

`


export default Contact
