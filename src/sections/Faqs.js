import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

const Faqs = () => (
  <FaqsSection>
    <div>
      <h1>FAQ</h1>
      <Collapsible
        trigger={
          <FaqsTitle>
            <span>What the heck is a node?</span>
            <span>+</span>
          </FaqsTitle>
        }
        triggerWhenOpen={
          <FaqsTitle>
            <span>What the heck is a node?</span>
            <span>-</span>
          </FaqsTitle>
        }
      >
        <FaqsAnswer>
          <p>
            If blockchains are like databases, nodes are each of the copies of the database.
          </p>
          <p>
            By having multiple nodes of the blockchain, each one keeps each other in check 
            and do not allow any single one of them to do something malicious. 
          </p>
          <p>
            By running nodes we can make blockchains more resilient, uncensorable, untamperable 
            and, in some cases, even get paid for it!
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
        trigger={
          <FaqsTitle>
            <span>How much does DAppNode Cost?</span>
            <span>+</span>
          </FaqsTitle>
        }
        triggerWhenOpen={
          <FaqsTitle>
            <span>How much does DAppNode Cost?</span>
            <span>-</span>
          </FaqsTitle>
        }
      >
        <FaqsAnswer>
          <p>
            Zero. Nada. DAppNode is Free Open Source Software (FOSS) that you can install in your machine.
          </p>
          <p>
            If you want to buy a pre-installed machine from us, you can check its prices here[Link to shop]
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
        trigger={
          <FaqsTitle>
            <span>How do I connect to the DappNode Chain?</span>
            <span>+</span>
          </FaqsTitle>
        }
        triggerWhenOpen={
          <FaqsTitle>
            <span>How do I connect to the DappNode Chain?</span>
            <span>-</span>
          </FaqsTitle>
        }
      >
        <FaqsAnswer>
          <p>
            Run your own node! That's the easiest way. It takes two clicks when you're on DAppNode!
          </p>
          <p>
            Besides that, you will need to connect your wallet to a DAppNode Network endpoint, 
            yours or not, in order to interact with it. Check out how here.
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
        trigger={
          <FaqsTitle>
            <span>Do I have to pay to join the DAO?</span>
            <span>+</span>
          </FaqsTitle>
        }
        triggerWhenOpen={
          <FaqsTitle>
            <span>Do I have to pay to join the DAO?</span>
            <span>-</span>
          </FaqsTitle>
        }
      >
        <FaqsAnswer>
          <p>
            Holding DAppNode Network Tokens (DN) makes you a member of the DAO. 
            We distributed tokens to our supporters to give them the weight they deserve!
            If you didn't get tokens allocated, you might need to buy them to participate in the DAO. 
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
        trigger={
          <FaqsTitle>
            <span>Can I use DappNode software on other networks or sidechains?</span>
            <span>+</span>
          </FaqsTitle>
        }
        triggerWhenOpen={
          <FaqsTitle>
            <span>Can I use DappNode software on other networks or sidechains?</span>
            <span>-</span>
          </FaqsTitle>
        }
      >
        <FaqsAnswer>
          <p>
            Yes, yes and a thousand times yes. We'll be delighted that you do. 
          </p>
          <p>
            DAppNode's mission is to decentralize any blockchain, so more and more dapps and chains are added 
            to the DAppStore to run them with a couple of clicks. Moreover, we've made it super easy for developers to deploy 
            a DAppNode Package (DNP) of their favourite project on DAppNode Chain.
          </p>
        </FaqsAnswer>
      </Collapsible>
    </div>
  </FaqsSection>
)

const FaqsSection = styled.section`
  min-height: 931px;
  height: auto;
  background-color: #00443e;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ffffff;
    font-family: 'Interstate';
    font-size: 54px;
    font-weight: bold;
    letter-spacing: -1.62px;
    line-height: 64px;
    text-align: center;
  }
  .Collapsible {
    margin-bottom: 30px;
  }
  .Collapsible__trigger.is-open {
    div {
      background-color: #2fbcb2 !important;
      color: #231f20 !important;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
  .Collapsible__trigger.is-closed {
    div {
      transition: all 400ms linear 0s;
    }
  }
`

const FaqsTitle = styled.div`
  width: 953px;
  max-width: 70vw;
  padding: 31px 37px;
  border-radius: 8px;
  background-color: #b3bac51f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-family: 'Inter-Bold';
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
`

const FaqsAnswer = styled.div`
  width: 953px;
  max-width: 70vw;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: #2fbcb2;
  padding: 37px;

  p {
    color: #231f20;
    font-family: 'Inter';
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
  }
`

export default Faqs
