import React from 'react'
import styled from 'styled-components'
import FooterMenu from './FooterMenu';
import background from '../assets/footer-image.png'



const Footer = () => (
  <FooterSection>
    <FooterMenu/>
  </FooterSection>
)


const FooterSection = styled.section`
  min-height: 931px;
  height: auto;
  background: url(${background}) top no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`



export default Footer
