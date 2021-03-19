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
          <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
          <span>+</span>
        </FaqsTitle>
      }
      triggerWhenOpen={
        <FaqsTitle>
          <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
          <span>-</span>
        </FaqsTitle>
      }
      >
        <FaqsAnswer>
          <p>
            Fusce ornare eu urna ac varius. Nulla nec ex laoreet, laoreet augue
            quis, maximus enim. Vivamus finibus augue in interdum faucibus.
          </p>
          <p>
            Aenean vel condimentum massa, eget dignissim sapien. Mauris non
            ipsum dapibus, tincidunt nisl sit amet, suscipit neque. Maecenas
            vestibulum nisl ac lorem rutrum, eu aliquet metus varius. Cras arcu
            libero, fringilla eget mollis quis, faucibus eu ex. Aenean dapibus
            felis a arcu laoreet, eu pulvinar lectus aliquet.
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
      trigger={
        <FaqsTitle>
          <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
          <span>+</span>
        </FaqsTitle>
      }
      triggerWhenOpen={
        <FaqsTitle>
          <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
          <span>-</span>
        </FaqsTitle>
      }
      >
        <FaqsAnswer>
          <p>
            Fusce ornare eu urna ac varius. Nulla nec ex laoreet, laoreet augue
            quis, maximus enim. Vivamus finibus augue in interdum faucibus.
          </p>
          <p>
            Aenean vel condimentum massa, eget dignissim sapien. Mauris non
            ipsum dapibus, tincidunt nisl sit amet, suscipit neque. Maecenas
            vestibulum nisl ac lorem rutrum, eu aliquet metus varius. Cras arcu
            libero, fringilla eget mollis quis, faucibus eu ex. Aenean dapibus
            felis a arcu laoreet, eu pulvinar lectus aliquet.
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
        trigger={
          <FaqsTitle>
            <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
            <span>+</span>
          </FaqsTitle>
        }
        triggerWhenOpen={
          <FaqsTitle>
            <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
            <span>-</span>
          </FaqsTitle>
        }
      >
        <FaqsAnswer>
          <p>
            Fusce ornare eu urna ac varius. Nulla nec ex laoreet, laoreet augue
            quis, maximus enim. Vivamus finibus augue in interdum faucibus.
          </p>
          <p>
            Aenean vel condimentum massa, eget dignissim sapien. Mauris non
            ipsum dapibus, tincidunt nisl sit amet, suscipit neque. Maecenas
            vestibulum nisl ac lorem rutrum, eu aliquet metus varius. Cras arcu
            libero, fringilla eget mollis quis, faucibus eu ex. Aenean dapibus
            felis a arcu laoreet, eu pulvinar lectus aliquet.
          </p>
        </FaqsAnswer>
      </Collapsible>
      <Collapsible
      trigger={
        <FaqsTitle>
          <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
          <span>+</span>
        </FaqsTitle>
      }
      triggerWhenOpen={
        <FaqsTitle>
          <span>Sed vel quam ex sed viverra lectus id felis malesuada?</span>
          <span>-</span>
        </FaqsTitle>
      }
      >
        <FaqsAnswer>
          <p>
            Fusce ornare eu urna ac varius. Nulla nec ex laoreet, laoreet augue
            quis, maximus enim. Vivamus finibus augue in interdum faucibus.
          </p>
          <p>
            Aenean vel condimentum massa, eget dignissim sapien. Mauris non
            ipsum dapibus, tincidunt nisl sit amet, suscipit neque. Maecenas
            vestibulum nisl ac lorem rutrum, eu aliquet metus varius. Cras arcu
            libero, fringilla eget mollis quis, faucibus eu ex. Aenean dapibus
            felis a arcu laoreet, eu pulvinar lectus aliquet.
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

const FaqsTitleOpen = styled.div`
  width: 953px;
  max-width: 70vw;
  padding: 31px 37px;
  border-radius: 8px;
  background-color: #2fbcb2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
