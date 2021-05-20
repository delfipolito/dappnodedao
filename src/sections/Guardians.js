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
              ValidatorDAO Stands Watch. 
              <br></br>
              Protecting Ethereum 2.0 from Falling into Centralized Powers
            </h2>
            <p>
              Ethereum 2.0 threatens to get caught in the same issue facing many PoS networks.
              Power coalescing at the top, compromising the future of a new decentralized financial engine.
            </p>
            <a>Read our manifesto</a>
          </div>
        </Header>
        <Content>
          {/*
          <h1>Key-management Council</h1>
          <h3>A key-management council ensuring trustless validators</h3>
          */}
          <p>
          This is the first feature project of DAppNode. ValidatorDAO will connect pools of stakers to pools of self-custodial validators ensuring network security doesn't collect into the hands of the few. Staker and Validator Incentives will be regulated by all DAO members.
          Governance will be open to stakers, validators and network architects. 
          </p>
          <p>
          The DAO allows for validators to become trustless, and can move in and out of the validation pool without interrupting the network. 
          Lowering the risk for validators allows more participation thus making the network as a whole more resilient. 
          </p>
          {/*<h3>Making the validator’s keys non-custodial</h3>*/}
          <p>
          "The Guardians of Ethereum" is a collection of DAO members who will take the responsiblity of co-signing every action with validators and ensure appropriate distribution of validation keys.
           The Guardians will serve the greater community by surveilling the network to prevent or mitigate malicious actions to and from validators.
          </p>
          {/* <a>Learn more about Key Management</a> */}
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
    cursor: pointer;
    &:hover,
    &:active {
      color: #009688;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 300px 0 220px 0;
    text-align: center;
    a {
      font-size: 16px;
      letter-spacing: 0.27px;
      line-height: 19px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 300px 0 220px 0;
    a {
      font-size: 18px;
      letter-spacing: 0.3px;
      line-height: 21px;
    }
  }
`

const Container = styled.div`
  border-radius: 48px;
  background-color: #f7f7f7;
  padding: 122px 0;
  width: 1197px;
  max-width: 90%;
  margin: auto;
  @media only screen and (max-width: 700px) {
    padding: 218px 0 30px 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 122px 0 60px 0;
  }
`
const Header = styled.div`
  display: flex;
  margin-left: -8%;
  @media only screen and (min-width: 992px) and (max-width: 1100px) {
    margin-left: -4%;
  }
  @media only screen and (max-width: 992px) {
    display: block;
    margin-left: 0;
    padding: 50px;
    img {
      width: 100%;
    }
  }

  .content-container {
    @media only screen and (min-width: 992px) and (max-width: 1100px) {
      padding-right: 20px;
    }
  }
  .image-container {
    margin-right: 100px;
    img {
      max-width: 660px;
      @media only screen and (min-width: 992px) and (max-width: 1100px) {
        max-width: 480px;
      }
      overflow: visible;
    }
    @media only screen and (max-width: 992px) {
      margin-right: 0;
      margin-top: -460px;
      img {
        max-width: 500px;
      }
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
  @media only screen and (max-width: 700px) {
    text-align: center;
    h2 {
      font-size: 26px;
      letter-spacing: -0.88px;
      line-height: 34px;
    }
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
    h2 {
      font-size: 32px;
      letter-spacing: -0.96px;
      line-height: 42px;
      max-width: inherit;
    }
    p {
      font-size: 18px;
      line-height: 28px;
      max-width: inherit;
    }
  }
`

const Content = styled.div`
  text-align: left;
  max-width: 710px;
  margin: auto;
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
  @media only screen and (max-width: 700px) {
    text-align: center;
    margin: auto 50px;
    h1 {
      font-size: 28px;
      letter-spacing: -0.84px;
      line-height: 38px;
    }
    h3 {
      font-size: 20px;
      letter-spacing: -0.21px;
      line-height: 28px;
    }
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;

    h1 {
      font-size: 36px;
      letter-spacing: -1.08px;
      line-height: 44px;
    }
    h3 {
      font-size: 26px;
      letter-spacing: -0.27px;
      line-height: 34px;
    }

    p {
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;
    }
  }
`

export default Guardians
