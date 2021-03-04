import React from 'react'
import styled from 'styled-components'
import logo from '../assets/DAppNodeDAO-logo-white.svg'

// TODO: Add links

const FooterMenu = () => (
  <FooterMenuSection>
    <Container>
      <img src={logo} />
      <div>
        <Item>Terms of use</Item>
        <Item>Privacy Policy</Item>
        <Item>Cookie Policy</Item>
      </div>
    </Container>
  </FooterMenuSection>
)

const FooterMenuSection = styled.section`
  background-color: transparent;
  height: 60px;
  text-align: center;
  overflow: hidden;
  margin: 40px 0px;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      margin-bottom: 20px;
    }
  }
`

const Item = styled.a`
  color: white;
  font-family: 'Inter';
  font-size: 18px;
  padding: 15px;
`

export default FooterMenu
