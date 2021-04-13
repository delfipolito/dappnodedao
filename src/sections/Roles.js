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
          Want to be a <b>Pioneer</b> with a stake in the system?
        </h1>
        <h2>
          The DAppNode Network token lets you participate in the network and its governance
        </h2>
        <ul>
          <li>
            DNT was not sold and was gifted to supporters of decentralization
          </li>
          <li>
            It can be earned by supporting the ecosystem through liquidity mining
          </li>
          <li>
            
          </li>
        </ul>
        <h3>Support the network and earn:</h3>
        <Button>Go to Dashboard</Button>
      </Content>
    </Container>
    <Container className="network">
      <Content className="network-content">
        <h1>
          The <b>DAppNode Network</b>
        </h1>
        <h2>
          Is open, permissionless and EVM-compatible, for anyone to deploy any applications where decentralization is important 
        </h2>
        <ul>
          <li>
            The DAppNode Network is the coordination blockchain behind the DAppNode OS.
          </li>
          <li>
            It is probably the most decentralized network, maintained by Node Runners all over the world
          </li>
          <li>
            Helps deploy other networks in decentralized hardware
          </li>
        </ul>
        <h3>Shape the future together with us:</h3>
        <Button>Read the docs</Button>
      </Content>
      <img src={network} />
    </Container>
    <Container className="platform">
      <img src={platform} />
      <Content>
        <h1>
          For <b>Node Runners</b> 
        </h1>
        <h2>
          
        </h2>
        <ul>
          <li>Keep staking decentralised: Earn an income by becoming a member of a validator DAO.</li>
          <li>Be truly self-sovereign with both your money and your data: Connect to blockchains and DApps without intermediaries.</li>
          <li>Anyone can become a Node Runner. You don’t even need to know how what a command line is. The DAppNode FOSS Platform and plug-and-play boxes are easy to install and configure!</li>
        </ul>
        <h3>Be the decentralized web:</h3>
        <Button>Get DAppNode</Button>
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
    border-radius: 15px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    border-radius: 24px;
  }
  margin: 50px auto;
  max-width: 1440px;

  &.network {
    background-color: #daf2f9;
    grid-template-columns: 53% 41%;
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
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      font-size: 30px;
      line-height: 36px;
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
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 26px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      font-size: 18px;
      line-height: 28px;
    }
  }
  h3 {
    font-family: 'Inter-Bold';
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin: 40px 0 0 0;
    @media only screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
  ul {
    color: #231f20;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 24px;
    @media only screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
      padding-left: 18px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
    }
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
  @media only screen and (max-width: 768px) {
    width: -webkit-fill-available;
    text-align: center;
  }
  &:hover,
  &:active {
    background: #009688;
    color: white;
  }
`

export default Roles
