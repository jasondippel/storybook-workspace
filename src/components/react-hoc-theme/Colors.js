import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'react-hoc-theme'
import { ColorSwatch } from './ColorSwatch'

const COLOR_SECTIONS = {
  Text: ['text', 'textInverse', 'textMeta', 'textDisabled', 'link'],
  Background: [
    'background100',
    'background200',
    'background300',
    'background400',
    'background500',
    'background600',
    'keyline',
  ],
  Primary: ['primary', 'primaryAccent', 'primaryBackground'],
  Success: ['success', 'successAccent', 'successBackground'],
  Warning: ['warning', 'warningAccent', 'warningBackground'],
  Error: ['error', 'errorAccent', 'errorBackground'],
}

const Title = useTheme(styled.h3`
  color: ${p => p.$theme.text};
  font-family: arial;
`)

export default { title: 'Packages|Components/react-hoc-theme' }

export const Colors = useTheme(({ $theme }) => (
  <React.Fragment>
    {Object.keys(COLOR_SECTIONS).map(s => (
      <React.Fragment key={`${s}_fragment`}>
        <Title key={s}>{s}</Title>
        {COLOR_SECTIONS[s].map(k => {
          const key = `${k}_${$theme[k]}`
          return <ColorSwatch color={$theme[k]} text={k} key={key} />
        })}
      </React.Fragment>
    ))}
  </React.Fragment>
))
