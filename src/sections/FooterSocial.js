import React from 'react'
import styled from 'styled-components'
import wikipedia from '../assets/social-wikipedia.svg'
import twitter from '../assets/social-twitter.svg'
import reddit from '../assets/social-reddit.svg'
import github from '../assets/social-github.svg'
import medium from '../assets/social-medium.svg'

// TODO: Add links

const FooterSocial = () => (
  <FooterSocialSection>
    <div>
      <Item><img src={medium}/></Item>
      <Item href="https://github.com/dappnode"><img src={github}/></Item>
      <Item><img src={reddit}/></Item>
      <Item><img src={twitter}/></Item>
      <Item><img src={wikipedia}/></Item>
    </div>
  </FooterSocialSection>
)

const FooterSocialSection = styled.section`
  background-color: transparent;
  height: 53px;
  text-align: center;
  overflow: hidden;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Item = styled.a`
  color: white;
  font-family: 'Inter';
  font-size: 18px;
  padding: 0 50px;
`

export default FooterSocial
