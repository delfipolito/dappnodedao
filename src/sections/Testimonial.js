import React from 'react'
import styled from 'styled-components'
import quote from '../assets/quote.svg'
import avatar from '../assets/avatar.png'

const Testimonial = () => (
  <TestimonialSection>
    <img src={quote} />
    <Phrase>
      In 2 clicks I installed the application and started running my own node.
      It couldn't be easier.
    </Phrase>
    <Author>
      <img src={avatar} />
      <div>
        <p>Beatrize Worrel</p>
        <h6>Blockchain Market Maker</h6>
      </div>
    </Author>
    <Button>Get Started</Button>
  </TestimonialSection>
)

const TestimonialSection = styled.section`
  padding: 170px 0;
  height: auto;
  background-color: #00443e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Phrase = styled.h1`
  max-width: 710px;
  color: #ffffff;
  font-family: 'Interstate-Light';
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -1.44px;
  line-height: 64px;
  text-align: center;
  margin: 35px auto;
`

const Author = styled.div`
  display: flex;
  align-items: center;
justify-content: center;
  img {
    margin-right: 15px;
  }
  p {
    color: #ffffff;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
  h6 {
    color: #c3f4eb;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
`

const Button = styled.a`
  color: #ffffff;
  background: #2FBCB2;
  font-family: 'Interstate';
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0.22px;
  text-transform: uppercase;
  border-radius: 38px;
  padding: 25px 100px;
  margin-top: 51px;
  display: inline-block;
`

export default Testimonial
