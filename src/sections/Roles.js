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
        Pioneering the next-generation of decentralization
        </h1>
        <h2>
          DN (DAppNode) Token Holders are supporting a new ecosystem for decentralization.
        </h2>
        <ul>
          <li>
            Engage in DAO governance promoting a dynamic and holistic community.
          </li>
          <li>
            Access and send transactions on the DAppNode Network
          </li>
          <li>
            Participate in liquidity mining and airdrop incentives.
          </li>
          <li>
            Run your hardware and stake DN on Validators to earn PoS rewards
          </li>
        </ul>
        <h3>Shape the future together with us</h3>
        <Button>GET DN TOKENS</Button>
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
            Challenge the Node Autocracy; allow nodes to be ran by anyone, anywhere.
          </li>
          <li>
            DAppNode Network is open, permissionless and EVM-compatible
          </li>
          <li>
            The backbone for pushing decentralization on other blockchains and dapps
          </li>
        </ul>
        <h3>Discover the possibilities</h3>
        <Button>READ OUR DOCUMENTATION</Button>
      </Content>
      <img src={network} />
    </Container>
    <Container className="platform">
      <img src={platform} />
      <Content>
        <h1>
          <b>Node Runners</b> 
        </h1>
        <h2>
          Setup your own node. Sustain a network and flip the script on node centralization.
        </h2>
        <ul>
          <li>Run nodes for any blockchain with a couple of clicks.</li>
          <li>Low maintenance: decentralized auto-updates and alerts packaged out-of-the-box.</li>
          <li>YOU host the data to keep information uncensored and accessible.</li>
          <li>Stake in and validate PoS blockchains and earn on your crypto with minimal hassle and without intermediaries.</li>
          <li>Connect to blockchains and DApps without intermediaries. Take control of your data and establish your digital sovereignty.</li>
        </ul>
        <h3>Run a node on almost anything; a server, an old computer, even a Raspberry Pi. The DAppNode FOSS Platform and plug-and-play boxes are easy to install and configure!</h3>
        <Button>SHOW ME HOW</Button>
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
