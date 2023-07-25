import React, { useState } from 'react'
import styled from 'styled-components'
import { CgMenu,CgClose } from "react-icons/cg";
import { Link } from 'react-scroll';


const Navbar = () => {
    let [openmenu,closemenu]=useState(false);
    return (
      <Nav>
     <div className={openmenu==true?'navbar active ':'navbar'}>
  <ul className='nav-list '>
  <Link className='nav-link' onClick={()=>closemenu(false)} to="home" smooth={true} offset={50}><li>home</li></Link>
  <Link className='nav-link' onClick={()=>closemenu(false)} to="services" smooth={true} offsetToTop={0}><li>services</li></Link>
  <Link className='nav-link' onClick={()=>closemenu(false)} to="about"  spy={true} smooth={true} offset={50}><li>about</li></Link>
  <Link className='nav-link' onClick={()=>closemenu(false)} to="why" smooth={true} offsetToTop={0}><li>Why Us</li></Link>
  </ul>
  <div className='mobile-icons'>
  <CgMenu  className='mobile-btn' onClick={()=>closemenu(true)} name='menu'/>
  <CgClose className='mobile-btn' onClick={()=>closemenu(false)} name='close'/>
  </div>
     </div>
      </Nav>
    )
  }

  const Nav=styled.nav`
.nav-list{
  display:flex;
  gap:4.8rem;
}
.nav-link{
  font-size:1.8rem;
  text-transform:uppercase;
  font-family: 'Poppins', sans-serif;
  position:relative;
  padding:0 1rem;
  color:${({theme})=>theme.colors.helperGreenBlack};
/*   font-weight:400 ; */
}

.nav-link:after{
  content:"";
  position:absolute;
  background-color:#3CB371 ;
  left:0;
  width:0%;
  bottom:-10px;
  height:3px;
  transition:0.3s;
}

.nav-link:hover:after{
width:100%;
}

.mobile-btn{
  display:none;
}

@media (max-width:${({theme})=>theme.media.mobile}) {
  .mobile-btn{
    display:inline-block;
    z-index:99999999999999999999999;
    font-size:2.4rem;
  }
 
  .mobile-btn[name='close']{
    display:none;
  }
  
.nav-list{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(100%);
  transition: all 0.5s linear;
  background-color:#fff;
  z-index: 9999999999999999;
}  


.active .nav-list{
  opacity: 1;
  visibility: visible;
  pointer-events: all;
  transform: translateX(0%);
 
}

.active .mobile-btn{
  display:none;
}

.active .mobile-btn[name='close']{
  position:absolute;
  right:10%;
  display:inline-block;
  z-index:999999999999999999;
}
}
`
export default Navbar
