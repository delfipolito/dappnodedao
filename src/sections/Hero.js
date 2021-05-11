import React from 'react'
import styled from 'styled-components'
import background from '../assets/hero.jpg'

const Hero = () => (
  <HeroSection>
    <Container>
      <div>
        <h1>
          A chain <b>by Node Runners,</b> <b>for Node Runners</b>
        </h1>
        <p>
        DAppNode is a resilient and truly decentralized network that puts the power back into the hands of the people. 
        It creates and maintains the infrastructure for anyone to run their own nodes.
        DAppNode is putting an end to the node oligarchy and safeguarding the free, decentralized world of the future.
        </p>
        <Button>Get Started</Button>
      </div>
    </Container>
  </HeroSection>
)

const HeroSection = styled.section`
  min-height: 750px;
  height: auto;
  background: url(${background}) top no-repeat;
  background-size: cover;
  margin: auto;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 29% 27%;
  position: relative;

  @media only screen and (min-width: 2400px) {
    background-position: 100% 62%;
  }

  @media only screen and (max-width: 700px) {
    border-bottom-right-radius: 29% 12%;
    background-position-x: 80%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 700px) {
    background-position-x: 100%;
  }
`

const Container = styled.div`
  width: 95%;
  max-width: 1444px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
  p {
    max-width: 710px;
    font-family: 'Inter';
    font-size: 24px;
    line-height: 36px;
    @media only screen and (max-width: 700px) {
      font-size: 16px;
      line-height: 26px;
      text-align: center;
    }
    @media only screen and (max-width: 1024px) and (min-width: 700px) {
      font-size: 18px;
      line-height: 28px;
    }
}
  }
  h1 {
    max-width: 710px;
    font-family: 'Interstate';
    font-size: 60px;
    letter-spacing: -1.8px;
    line-height: 72px;
    font-weight: 400;
    b {
      font-weight: bold;
      font-family: 'Interstate-Bold';
    }
    @media only screen and (max-width: 1024px) and (min-width: 700px) {
      font-size: 40px;
      letter-spacing: -1.2px;
      line-height: 50px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 36px;
      letter-spacing: -1.08px;
      line-height: 40px;
      text-align: center;
    }
  }
`

const Button = styled.a`
  color: #2fbcb2;
  background: white;
  font-family: 'Interstate';
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0.22px;
  text-transform: uppercase;
  border-radius: 38px;
  padding: 27px 100px 25px 100px;
  margin-top: 26px;
  display: inline-block;

  &:hover,
  &:active {
    background: #2fbcb2;
    color: white;
  }

  @media only screen and (max-width: 700px) {
    font-size: 16px;
    letter-spacing: 0.27px;
    line-height: 19px;
    padding: 18px 74px 16px 74px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 700px) {
    font-size: 21px;
    letter-spacing: 0.35px;
    line-height:25px;
    padding: 27px 111px 25px 111px;
  }
`

export default Hero
