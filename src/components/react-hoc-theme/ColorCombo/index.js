import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'react-hoc-theme'
import { NormalText } from './NormalText'
import { LargeText } from './LargeText'
import { A11yGrade, NORMAL, LARGE } from './A11yGrade'

const BOX_HEIGHT = '75px'
const BOX_WIDTH = '175px'

const Root = useTheme(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.$theme`colors/${p.background}`};
  border: 1px solid ${p => p.$theme`colors/keyline`};
  height: ${BOX_HEIGHT};
  width: ${BOX_WIDTH};
  margin: 12px 8px;
  padding: 4px;

  font-size: 14px;
  font-family: arial;

  > div {
    height: 24px;
  }
`)

export const ColorCombo = ({ background, color }) => {
  return (
    <Root background={background}>
      <NormalText color={color}>
        {background}
        <A11yGrade {...{ background, color, type: NORMAL }} />
      </NormalText>
      <LargeText color={color}>
        {color}
        <A11yGrade {...{ background, color, type: LARGE }} />
      </LargeText>
    </Root>
  )
}
