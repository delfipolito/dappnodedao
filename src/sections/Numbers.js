import React from 'react'
import styled from 'styled-components'

const Numbers = () => (
  <NumbersSection>
    <Title>
      DApp
      <Light>Node</Light>
      <Bold>DAO network today</Bold>
    </Title>
    <Container>
      <Item>
        <h6>Nodes</h6>
        <h1>1,287</h1>
        <p>DAppNode DAO is run by hundred of volunteers around the globe, known as nodes.</p>
      </Item>
      <Item>
        <h6>Transactions</h6>
        <h1>49.3K</h1>
        <p>The number of transactions succesfully processed on the network in the last 24 hours.</p>
      </Item>
      <Item>
        <h6>Money in defi apps</h6>
        <h1>$137.6M</h1>
        <p>The amount of money in decentralized finance (defi) applications, the Ethereum digital economy.</p>
      </Item>
      <Item>
        <h6>Tokens issued</h6>
        <h1>3,435Đ</h1>
        <p>Aenean sit amet felis sit amet est mollis ullamcorper quis in est proin a sollicitudin tortor.</p>
      </Item>
    </Container>
  </NumbersSection>
)

const NumbersSection = styled.section`
  padding: 100px 0;
  height: auto;
  background-color: white;
  width: 95%;
  margin: auto;
  max-width: 1444px;
`

const Container = styled.div`
  max-width: 1444px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
`

const Title = styled.h1`
  color: #231f20;
  font-family: Interstate;
  font-size: 54px;
  font-weight: 400;
  letter-spacing: -1.62px;
  line-height: 64px;

  @media only screen and (min-width:768px) and (max-width:992px) {
    font-size: 36px;
  }
  @media only screen and (max-width:768px) {
    font-size: 28px;
  }
`

const Bold = styled.span`
  font-family: 'Interstate-Bold';
  font-weight: bold;
`

const Light = styled.span`
  font-family: 'Interstate-Light';
  font-weight: 300;
`

const Item = styled.div`
  @media only screen and (min-width:768px) and (max-width:992px) {
    width: 40vw;
  }
  @media only screen and (max-width:768px) {
    width: 90vw;
  }
  h6 {
    color: #a7a5a6;
    font-family: 'Interstate';
    font-size: 16px;
    letter-spacing: 6px;
    line-height: 19px;
    font-wight: 400;
    text-transform: uppercase;
    @media only screen and (max-width:992px) {
      font-size: 14px;
      margin-bottom: 0;
    }
  }
  h1 {
    color: #231f20;
    font-family: 'Interstate-Light';
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 60px;
    @media only screen and (max-width:768px) {
      font-size: 36px;
      margin: 5px 0;
    }
    @media only screen and (min-width:768px) and (max-width:992px) {
      font-size: 40px;
      margin: 10px 0;
    }
  }
  p {
    color: #231f20;
    font-family: 'Inter';
    font-wight: 400;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    @media only screen and (min-width:992px) {
      max-width: 227px;
    }
    @media only screen and (max-width:768px) {
      font-size: 14px;
      margin-top: 0;
    }
    @media only screen and (min-width:768px) and (max-width:992px) {
      font-size: 16px;
      margin: 0;
      margin: 0 0 30px;
    }
  }
`

export default Numbers
