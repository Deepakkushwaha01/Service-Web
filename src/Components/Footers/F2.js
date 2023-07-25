import React from 'react'
import styled from 'styled-components'

const F2 = () => {
  return (
    <Flast>
    Copyright © Indian Services Center Pvt. Ltd. 
    </Flast>
  )
}
const Flast= styled.section`
background-color: ${({theme})=>theme.colors.footerdark};
height: 5rem;
color:${({theme})=>theme.colors.textwhite};
display: grid;
justify-content: center;
align-items: center;
font-size: 1.6rem;

`
export default F2
