import React from 'react'
import styled from 'styled-components'
import { useTheme, useContrastingText } from 'react-hoc-theme'

const CIRCLE_SIZE = 45
const SWATCH_WIDTH = 180

const Root = styled.div`
  display: inline-flex;
  margin-bottom: 25px;
  margin-right: 20px;
  width: ${SWATCH_WIDTH}px;
  font-family: arial;
`

const Circle = useTheme(styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  min-width: ${CIRCLE_SIZE}px;
  min-height: ${CIRCLE_SIZE}px;
  border-radius: 50%;
  background-color: ${p => p.color};
  border: 1px solid ${p => p.$theme`colors/keyline`};
  margin-right: 15px;
`)

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`

const Title = useTheme(styled.h2`
  color: ${p => useContrastingText(p.$theme`colors/background100`)};
  font-size: 14px;
  margin: 0px;
`)

const Metadata = useTheme(styled.p`
  color: ${p => p.$theme`colors/textMeta`};
  font-size: 12px;
  text-transform: uppercase;
  margin: 0px;
`)

export const ColorSwatch = ({ color, text }) => (
  <Root>
    <Circle color={color} />
    <Description>
      <Title>{text}</Title>
      <Metadata>{color}</Metadata>
    </Description>
  </Root>
)
