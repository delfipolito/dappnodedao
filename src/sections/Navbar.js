import React from 'react';
import styled from 'styled-components';
import logo from '../assets/DAppNodeDAO-logo.svg';

const Navbar = () => (
  <NavbarSection>
    <Container>
      <img src={logo}/>
      <div>
        <Item>
          Supporter
        </Item>
        <Item>
          Staker
        </Item>
        <Item>
          Market Maker
        </Item>
        <Button>Get started</Button>
      </div>
    </Container>
  </NavbarSection>
);

const NavbarSection = styled.section`
  background-color: white;
  height: 60px;
  text-align: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`;

const Item = styled.a`
  color: #231F20;
  font-family: 'Inter';
  font-size: 18px;
  padding: 15px;
`;

const Button = styled.a `
color: #2FBCB2;
font-family: 'Interstate', 'Inter-Bold';
font-size: 13px;
font-weight: bold;
letter-spacing: 0.22px;
line-height: 15px;
text-transform: uppercase;
border: 2px solid #2FBCB2;
border-radius: 38px;
padding: 10px 20px;
margin-left: 15px;
`;

export default Navbar;
