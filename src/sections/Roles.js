import React from 'react'
import styled from 'styled-components'
import pioneer from '../assets/pioneer.jpg'
import network from '../assets/network.jpg'
import platform from '../assets/platform.jpg'

const Roles = () => (
  <RolesSection>
    <Container>
      <img src={pioneer} />
      <Content>
        <h1>
          If you are a <b>Pioneer</b> who has received tokens
        </h1>
        <h2>
          <b>Welcome!</b> Aliquam erat volutpat. Proin congue mauris consequat
          nisl eget volutpat posuere.
        </h2>
        <ul>
          <li>
            Suspendisse id sem placerat, volutpat lectus vel, fringilla mi.
            Suspendisse laoreet porta justo ac tempor.
          </li>
          <li>
            Aenean nisl eros, vehicula ac mollis nec, lobortis at lectus.
            Integer mollis sagittis elementum.
          </li>
          <li>
            Sed vel enim arcu. Vestibulum auctor dui et aliquet vehicula.
            Phasellus ipsum libero, fringilla id magna quis, tincidunt.
          </li>
        </ul>
        <h3>Shape the future together with us:</h3>
        <Button>Get started</Button>
      </Content>
    </Container>
    <Container className="network">
      <Content className="network-content">
        <h1>
          Aliquam non ligula ut velit <b>Network</b> auctor ac sed mauris
        </h1>
        <h2>
          <b>Hi staker!</b> You can participate in Ethereum 2.0's Proof-of-Stake
          consensus mechanism (staking) and receive ETH rewards in return.
        </h2>
        <ul>
          <li>
            No limits - stake any amount together with others to share a
            validator
          </li>
          <li>
            Track your earnings in real time while maintaining the control of
            your assets
          </li>
          <li>Trade ETH freely at market price at anytime</li>
          <li>No need to invest and maintain specialized hardware</li>
          <li>Full control of withdrawal key and validator exit</li>
          <li>Enables withdrawals from staking before Phase 2</li>
        </ul>
        <h3>Shape the future together with us:</h3>
        <Button>Get started</Button>
      </Content>
      <img src={network} />
    </Container>
    <Container className="platform">
      <img src={platform} />
      <Content>
        <h1>
          Class aptent taciti sociosqu ad litora <b>Platform</b> per nostra
        </h1>
        <h2>
          <b>Hey market maker!</b> Cras elementum pretium sem, quis bibendum
          enim venenatis eu.
        </h2>
        <ul>
          <li>Accept Ether delegations from stakers and validate for others</li>
          <li>Leverage more ETH than you currently have</li>
          <li>Receive rewards that will be liquid and tradeable</li>
          <li>No need for extra investment</li>
        </ul>
        <h3>Construct the truly decentralized web:</h3>
        <Button>Get started</Button>
      </Content>
    </Container>
  </RolesSection>
)

const RolesSection = styled.section`
  padding: 50px 0;
  height: auto;
  background-color: white;
  width: 95%;
  margin: auto;
`

const Container = styled.div`
  border-radius: 48px;
  background-color: #c3f4eb;
  padding: 6%;
  display: grid;
  grid-template-columns: 41% 53%;
  column-gap: 6%;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 334px auto;
    column-gap: 0;
    row-gap: 25px;
  }
  margin: 50px auto;
  max-width: 1440px;

  &.network {
    background-color: #daf2f9;
    grid-template-columns:  53% 41%;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 100%;
      grid-template-rows: 334px auto;
      img {
        grid-row: 1;
      }
    }
  }
  &.platform {
    background-color: #f0f0f0;
  }
  img {
    max-width: 590px;
    height: 100%;
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
    place-self: center end;
    @media only screen and (max-width: 768px) {
      height: 100%;
      width: 100%;
      object-position: center;
    }
  }
`

const Content = styled.div`
  &.network-content {
    @media only screen and (max-width: 768px) {
      grid-row: 2;
    }
  }
  h1 {
    font-family: 'Interstate';
    font-size: 40px;
    letter-spacing: -1.2px;
    line-height: 44px;
    b {
      font-family: 'Interstate-Bold';
      font-weight: bold;
    }
  }
  h2 {
    font-family: 'Inter';
    font-size: 24px;
    line-height: 36px;
    b {
      font-family: 'Inter-Bold';
      font-weight: bold;
    }
  }
  h3 {
    font-family: 'Inter-Bold';
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin: 40px 0 0 0;
  }
  ul {
    color: #231f20;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 24px;
  }
  li {
    margin-bottom: 20px;
  }
`

const Button = styled.a`
  color: #ffffff;
  background: #2fbcb2;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.3px;
  line-height: 18px;
  font-family: 'Interstate';
  text-transform: uppercase;
  border-radius: 38px;
  padding: 17px 85px 15px 85px;
  margin-top: 16px;
  display: inline-block;
`

export default Roles
