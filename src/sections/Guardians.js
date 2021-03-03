import React from 'react'
import styled from 'styled-components'
import guardians from '../assets/guardians.png'

const Guardians = () => (
  <OuterContainer>
    <GuardiansSection>
      <Container>
        <Header>
          <div className="image-container">
            <img src={guardians} />
          </div>
          <div className="content-container">
            <h2>
              Protecting Ethereum from falling into hands of centralized
              services!
            </h2>
            <p>
              In a world in which Ethereum becomes the engine for a new global
              and decentralised financial system ...
            </p>
            <a>Read our manifesto</a>
          </div>
        </Header>
        <Content>
          <h1>Key-management Council</h1>
          <h3>A key-management council ensuring trustless validators</h3>
          <p>
            The DAO allows for fully trustless validators participate in the
            pool and to leave the validator set at will with no possibility of
            damaging the network.
          </p>
          <p>
            This is achieved with our BLS-powered cryptographical system where a
            group of institutions check and co-sign every step so it is nearly
            impossible for a rogue validator to produce slashing, and at the
            same time allows for the safe transference of the validator keys to
            another machine.
          </p>
          <h3>Making the validator’s keys non-custodial</h3>
          <p>
            Distributed Key Generation (DKG) through a Multi-Party Computation
            (MPC) algorithm that would allow for having a group of “Guardians of
            Ethereum” that would share the responsibility of signing every
            action with the validators.
          </p>
          <a>Learn more about Key Management</a>
        </Content>
      </Container>
    </GuardiansSection>
  </OuterContainer>
)

const OuterContainer = styled.section`
  height: auto;

  background-color: #01443e;
  paddding-bottom: 200px 0;
`

const GuardiansSection = styled.div`
  padding: 200px 0 220px 0;
  background-color: white;
  width: 100%;
  margin: auto;
  border-bottom-left-radius: 220px 123px;

  a {
    color: #2fbcb2;
    font-family: Interstate;
    font-size: 21px;
    font-weight: bold;
    letter-spacing: 0.35px;
    line-height: 25px;
    text-transform: uppercase;
    text-decoration: none;
  }
`

const Container = styled.div`
  border-radius: 48px;
  background-color: #f7f7f7;
  padding: 122px 0;
  width: 1197px;
  max-width: 90%;
  margin: auto;

`
const Header = styled.div`
  display: flex;
  margin-left: -20%;
  @media only screen and (max-width: 992px) {
    display: block;
    margin-left: 0;
    padding: 50px;
    img {
      width: 100%;
    }
  }

  .image-container {
    margin-right: 100px;
    @media only screen and (max-width: 992px) {
      margin-right: 0;
      margin-top: -460px;
    }
    img {
      max-width: 660px;
      overflow: visible;
    }
  }

  h2 {
    max-width: 467px;
    color: #231f20;
    font-family: Interstate;
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -1.44px;
    line-height: 64px;
  }
  p {
    max-width: 467px;
    color: #231f20;
    font-family: Inter;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 36px;
  }
`

const Content = styled.div`
  text-align: left;
  max-width: 710px;
  margin: auto;
  @media only screen and (max-width: 992px) {
    margin: auto 50px;
  }
  h1 {
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
    margin-top: 65px;
  }
  p {
    color: #231f20;
    font-family: Inter;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
  }
  a {
    margin-top: 25px;
    display: block;
  }
`

export default Guardians
