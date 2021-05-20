import React from 'react'
import styled from 'styled-components'
import background from '../assets/about-bg-large.png'
import backgroundTablet from '../assets/about-bg-tablet.png'
import backgroundMobile from '../assets/about-bg-mobile.png'
import network from '../assets/network.svg'
import airdrop from '../assets/airdrop.svg'
import join from '../assets/join.svg'

const About = () => (
  <AboutSection>
    <Container>
      <Content>
        <h1>The DAppNodeDAO</h1>
        <div>
          <img src={network} />
          <h3>The Cross-chain Governance Model for Inclusive and Efficient Decision Making.</h3>
          <p>
          The DAO will allow token holders on both Ethereum and DAppNode Network to participate in governance. 
          DAppNode has tapped the Gnosis Safe SafeSnap Protocol as the DAO model, this will allow for on-chain actions to be voted on off-chain, via snapshot, avoiding network traffic and saving gas fees.
          </p>
        </div>
        <div>
          <img src={airdrop} />
          <h3>A Token of Gratitude</h3>
          <p>
          Early DAppNode supporters have already been airdropped some DAppNode(DN) Tokens. 
          Check here(ADD LINK) to see if you have any. Liquidity mining will also be introduced to encourage early token adoption.
          </p>
        </div>
        <div>
          <img src={join} />
          <h3>Get Connected</h3>
          <p>
          Join our community. The DAO is a critical component to keep the Network resilient and adaptable. 
          We need free-thinking members to sustain healthy innovation and ensure DAppNode continues to be a hub of a decentralized universe. 
          </p>
        </div>

        <Button>BEGIN</Button>
      </Content>
    </Container>
  </AboutSection>
)

const AboutSection = styled.section`
  min-height: 750px;
  height: auto;
  background: url(${background}) top no-repeat;
  @media only screen and (max-width: 1024px) and (min-width: 700px) {
    background: url(${backgroundTablet}) top no-repeat;
    background-size: 100% 100%;
    background-position: 81% 100%;
  }
  @media only screen and (max-width: 700px) {
    background: url(${backgroundMobile}) top no-repeat;
    background-size: cover;
    background-position: bottom;
  }
  background-size: auto 100%;
  background-position: 81% 100%;
  margin: auto;
  display: flex;
  align-items: center;
`

const Container = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  p {
    color: #231f20;
    font-family: 'Inter';
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    @media only screen and (max-width: 1024px) and (min-width: 700px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 14px;
      line-height: 22px;
    }
  }
  h1 {
    margin-top: 149px;
    color: #231f20;
    font-family: 'Interstate';
    font-size: 54px;
    font-weight: bold;
    letter-spacing: -1.62px;
    line-height: 64px;
    @media only screen and (max-width: 1024px) and (min-width: 700px) {
      font-size: 36px;
      letter-spacing: -1.08px;
      line-height: 44px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 28px;
      letter-spacing: -0.84px;
      line-height: 38px;
    }
  }
  h3 {
    color: #231f20;
    font-family: 'Interstate';
    font-size: 32px;
    letter-spacing: -0.33px;
    line-height: 42px;
    @media only screen and (max-width: 1024px) and (min-width: 700px) {
      font-size: 26px;
      letter-spacing: -0.27px;
      line-height: 34px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 20px;
      letter-spacing: -0.21px;
      line-height: 28px;
    }
  }
`

const Content = styled.div`
  max-width: 50%;
  margin: auto;
  @media only screen and (max-width: 1024px) and (min-width: 700px) {
    max-width: 74%;
    margin-left: 0;
    text-align: left;
  }
  @media only screen and (max-width: 700px) {
    max-width: 100%;
    margin: auto;
    margin-left: 0;
    text-align: center;
  }
  div {
    position: relative;
  }
  img {
    @media only screen and (min-width: 900px) {
      position: absolute;
      left: -200px;
    }
  }
`
const Button = styled.a`
  color: #ffffff;
  background: #2fbcb2;
  font-family: 'Interstate';
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0.22px;
  text-transform: uppercase;
  border-radius: 38px;
  padding: 27px 100px 25px 100px;
  margin: 26px 0 309px 0;
  display: inline-block;

  &:hover,
  &:active {
    background: #009688;
    color: white;
  }

  @media only screen and (max-width: 700px) {
    font-size: 16px;
    letter-spacing: 0.27px;
    line-height: 19px;
    width: -webkit-fill-available;
    text-align: center;
    padding: 16px;
    margin: 26px 0px 100px 0px;
  }
`

export default About
