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
      <h1>About DAO</h1>
      <div>
        <img src={network}/>
        <h3>Help decentralize the security of the Ethereum network</h3>
        <p>
          The DAO allows for fully trust-less validators participate in the pool
          and to leave the validator set at will with no possibility of damaging
          the network.
        </p>
        <p>
          This is achieved with our BLS-powered cryptographical system where a
          group of institutions check and co-sign every step so it is nearly
          impossible for a rogue validator to produce slashing, and at the same
          time allows for the safe transference of the validator keys to another
          machine.
        </p>
        </div>
        <div>
        <img src={airdrop}/>
        <h3>Airdrop of DAO Token</h3>
        <p>
          The DAO allows for fully trust-less validators participate in the pool
          and to leave the validator set at will with no possibility of damaging
          the network.
        </p>
        <p>
          This is achieved with our BLS-powered cryptographical system where a
          group of institutions check and co-sign every step so it is nearly
          impossible for a rogue validator to produce slashing, and at the same
          time allows for the safe transference of the validator keys to another
          machine.
        </p>
        </div>
        <div>
        <img src={join}/>
        <h3>Why join the DAO</h3>
        <p>
          The DAO allows for fully trust-less validators participate in the pool
          and to leave the validator set at will with no possibility of damaging
          the network.
        </p>
        <p>
          This is achieved with our BLS-powered cryptographical system where a
          group of institutions check and co-sign every step so it is nearly
          impossible for a rogue validator to produce slashing, and at the same
          time allows for the safe transference of the validator keys to another
          machine.
        </p>
        </div>

        <Button>Get Started</Button>
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
  }
  h1 {
    margin-top: 149px;
    color: #231f20;
    font-family: 'Interstate';
    font-size: 54px;
    font-weight: bold;
    letter-spacing: -1.62px;
    line-height: 64px;
  }
  h3 {
    color: #231f20;
    font-family: 'Interstate';
    font-size: 32px;
    letter-spacing: -0.33px;
    line-height: 42px;
  }
`

const Content = styled.div`
  max-width: 50%;
  margin: auto;
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
  padding: 25px 100px;
  margin: 26px 0 309px 0;
  display: inline-block;
`

export default About
