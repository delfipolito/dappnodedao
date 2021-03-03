import React, { useState, useCallback } from 'react'
import {
  ButtonIcon,
  IconUp,
  IconDown,
  springs,
  useTheme,
} from '@aragon/ui'
import { Spring, Transition, animated } from 'react-spring/renderprops'

const AnimatedDiv = animated.div

function Faq({ content, expansion }) {
  const [opened, setOpened] = useState(false)
  const theme = useTheme()

  const toggleButton = useCallback(() => {
    setOpened((opened) => !opened)
  }, [])

  return (
    <div
      css={`
        position: relative;
        margin-bottom: ${50}px;
      `}
    >
      <OpenedSurfaceBorder opened={opened} />
      <div
        css={`
          width: 100%;
          z-index: 2;
          height: auto;
          padding: ${3 * 8}px;
        `}
      >
        <ToggleButton onClick={toggleButton} opened={opened} />
        {content}
      </div>
      <div
        css={`
          margin-top: ${-RADIUS}px;
        `}
      >
        <Transition
          native
          items={opened}
          from={{ height: 0 }}
          enter={{ height: 'auto' }}
          leave={{ height: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <AnimatedDiv
                css={`
                  background: ${theme.surfaceUnder};
                  overflow: hidden;
                  z-index: 1;
                `}
                style={props}
              >
                <div
                  css={`
                    width: 100%;
                    overflow: hidden;

                    padding: ${4 * 8}px ${3 * 8}px ${3 * 8}px;
                    box-shadow: inset 0 ${RADIUS + 4}px 4px -4px rgba(0, 0, 0, 0.16);
                  `}
                >
                  {expansion}
                </div>
              </AnimatedDiv>
            ))
          }
        </Transition>
      </div>
    </div>
  )
}


function ToggleButton({ onClick, opened }) {
  const theme = useTheme()
  return (
    <ButtonIcon
      label={opened ? 'Close' : 'Open'}
      focusRingRadius={RADIUS}
      onClick={onClick}
      css={`
        position: absolute;
        top: ${3.5 * 8}px;
        left: ${3.5 * 8}px;
        display: flex;
        flex-direction: column;
        color: ${theme.surfaceContentSecondary};
        & > div {
          display: flex;
          transform-origin: 50% 50%;
          transition: transform 250ms ease-in-out;
        }
      `}
    >
      <div
        css={`
          transform: rotate3d(${opened ? 1 : 0}, 0, 0, 180deg);
          transform: rotate3d(0, 0, ${opened ? 1 : 0}, 180deg);
        `}
      >
        <IconUp size="small" />
      </div>
      <div
        css={`
          transform: rotate3d(${opened ? -1 : 0}, 0, 0, 180deg);
          transform: rotate3d(0, 0, ${opened ? -1 : 0}, 180deg);
        `}
      >
        <IconDown size="small" />
      </div>
    </ButtonIcon>
  )
}

function OpenedSurfaceBorder({ opened }) {
  return (
    <Spring
      native
      from={{ width: 0 }}
      to={{ width: Number(opened) }}
      config={springs.smooth}
    >
      {({ width }) => (
        <AnimatedDiv
          css={`
            z-index: 3;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 3px;
            border-top-left-radius: ${RADIUS}px;
            border-bottom-left-radius: ${RADIUS}px;
            background: linear-gradient(
              90deg,
              #32fff5 -103.98%,
              #01bfe3 80.13%
            );
            transform-origin: 0 0;
          `}
          style={{
            transform: width.interpolate((v) => `scale3d(${v}, 1, 1)`),
          }}
        />
      )}
    </Spring>
  )
}

export default Faq
