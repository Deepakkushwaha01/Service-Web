import React from 'react'
import {  BsInstagram, BsWhatsapp } from "react-icons/bs";
import { ImYoutube,ImFacebook } from "react-icons/im";
import styled from 'styled-components';

const Social = () => {
  return (
    <Sicons>
          <a href="https://m.facebook.com/isc555lajpatrai" className='icon facebook' target="_blank" >
            <ImFacebook />
          </a>
          <a
            href="https://instagram.com/isclajpatrai?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            className='icon insta'
          >
            <BsInstagram />
          </a>
          <a href="https://wa.me/917678486507" target="_blank" className='icon whatsapp'>
            <BsWhatsapp />
          </a>
<a href="https://www.youtube.com/@isc555" target="_blank" className='icon youtube'>
    <ImYoutube/>
</a>
        </Sicons>
  )
}

const Sicons=styled.section`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
/* justify-content: center; */
/* align-items: center; */

.icon{
    font-size: 3.4rem;
    margin-bottom: 2rem;
width: 7rem;
border-radius: 50%;
height: 7rem;
border: none;
background-color: #f5f6fa;
text-align: center;
line-height: 80px;
box-shadow: 1px 2px 2px 2px #dcdde1;
transition: all 0.2s linear;
/* border: 1px solid red; */
}

a:hover{
    transform: scale(1.2);
}

.whatsapp{
  color:green;
}
.insta{
  color:#e84393;
}

.youtube{
    color: red;
}
.facebook{
    color: #3b5998;
}


@media(max-width:${({theme})=>theme.media.tab}){
 gap:1.8rem ;
 
 .icon{
width: 6rem;
height: 6rem;
line-height: 75px;
 }
}

@media(max-width:${({theme})=>theme.media.mobile}){
/*   border:1px solid  #e84393; */
gap: 0.5rem;

}



`

export default Social
