import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import styled from 'styled-components';

const Social = () => {
  return (
    <Sicons>
          <a href="https://m.facebook.com/isc555lajpatrai" className='icon facebook' target="_blank" >
            <BsFacebook />
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

        </Sicons>
  )
}

const Sicons=styled.section`
display: flex;
gap: 2rem;

`

export default Social
