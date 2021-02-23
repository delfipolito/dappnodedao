import React from 'react'
import styled from 'styled-components'
import background from '../assets/hero.jpg'

const Hero = () => (
  <HeroSection>
    <Container>
      <div>
        <h1>
          Your <b>gateway</b> to a truly <b>decentralized world</b>
        </h1>
        <p>
          DAppNode DAO connects Validators, Stakers, and Client Implementers in
          a truly decentralized infrastructure where you are the leader. Join
          the DAO to run your own nodes and become a part of the digital
          sovereignty re-evolution.
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
    max-width: 710px;
    font-family: 'Inter';
    font-size: 24px;
    line-height: 36px;
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
  padding: 25px 100px;
  margin-top: 26px;
  display: inline-block;
`

export default Hero
