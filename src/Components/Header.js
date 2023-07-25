import React from 'react'
import styled from 'styled-components'
import Navbar from './Header/Navbar'

const Header = () => {
  return (
    <Head>
      <div className='logopart'>
<img src="/images/logo.png" alt="" />
{/* <div className='logoname'>
    <div>
    <h3>INDIAN SERVICE CENTER</h3>
    <p>Repair with care</p>
    </div>
</div> */}

      </div>
      <Navbar/>
    </Head>
  )
}

const Head=styled.section`
height:10rem;
padding:0 4.8rem;
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
background-color: #fff;
position: fixed;
z-index: 10;
top: 0;
  width: 100%;
.logopart{
    display: flex;
    img{
        width:6rem;
    height:6rem;
    }}


@media(max-width:${({theme})=>theme.media.mobile}){
    height: 8rem;
    
    }

`

export default Header
