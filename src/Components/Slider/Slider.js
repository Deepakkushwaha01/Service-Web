import React from 'react'
import styled from 'styled-components'

const Slider = ({img}) => {
  return (
    <Slide>
      <img src={img} alt="" />
    </Slide>
  )
}
const Slide=styled.div`
width: 100%;
display: flex;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2rem;
justify-content: center;
align-items: center;
height: 200px;
img{
  width: 50%;
}

@media(max-width:${({theme})=>theme.media.mobile}){
height: 120px;

}


`
export default Slider
