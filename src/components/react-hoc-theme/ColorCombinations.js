import React from 'react'
import styled from 'styled-components'
import { useTheme, useContrastingText } from 'react-hoc-theme'

import { ColorCombo } from './ColorCombo'

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = useTheme(styled.h2`
  font-family: arial;
  color: ${p => p.$theme`colors/text`};
  border-bottom: 1px solid ${p => p.$theme`colors/keyline`};
`)

const Group = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ColorCombinations = useTheme(({ $theme }) => {
  const textMaping = {
    [$theme`colors/text`]: 'text',
    [$theme`colors/textInverse`]: 'textInverse',
  }

  const darkTextName =
    textMaping[useContrastingText($theme`colors/backgroundLight`)]
  const lightTextName =
    textMaping[useContrastingText($theme`colors/backgroundDark`)]

  return (
    <Root>
      <Title>Text Variations on Standard Backgrounds</Title>
      <Group>
        <ColorCombo color={'text'} background={'background100'} />
        <ColorCombo color={'text'} background={'background200'} />
        <ColorCombo color={'text'} background={'background300'} />
        <ColorCombo color={'text'} background={'background400'} />
        <ColorCombo color={'text'} background={'background500'} />
      </Group>
      <Group>
        <ColorCombo color={'textMeta'} background={'background100'} />
        <ColorCombo color={'textMeta'} background={'background200'} />
        <ColorCombo color={'textMeta'} background={'background300'} />
        <ColorCombo color={'textMeta'} background={'background400'} />
        <ColorCombo color={'textMeta'} background={'background500'} />
      </Group>
      <Group>
        <ColorCombo color={'textDisabled'} background={'background100'} />
        <ColorCombo color={'textDisabled'} background={'background200'} />
        <ColorCombo color={'textDisabled'} background={'background300'} />
        <ColorCombo color={'textDisabled'} background={'background400'} />
        <ColorCombo color={'textDisabled'} background={'background500'} />
      </Group>
      <Group>
        <ColorCombo color={'link'} background={'background100'} />
        <ColorCombo color={'link'} background={'background200'} />
        <ColorCombo color={'link'} background={'background300'} />
        <ColorCombo color={'link'} background={'background400'} />
        <ColorCombo color={'link'} background={'background500'} />
      </Group>
      <Group>
        <ColorCombo color={darkTextName} background={'backgroundLight'} />
        <ColorCombo color={lightTextName} background={'backgroundDark'} />
      </Group>
      <Title>Primary Color Uses</Title>
      <Group>
        <ColorCombo color={'text'} background={'primary'} />
        <ColorCombo color={'textInverse'} background={'primary'} />
        <ColorCombo color={'text'} background={'primaryAccent'} />
        <ColorCombo color={'text'} background={'primaryBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textMeta'} background={'primary'} />
        <ColorCombo color={'textMeta'} background={'primaryAccent'} />
        <ColorCombo color={'textMeta'} background={'primaryBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textDisabled'} background={'primary'} />
        <ColorCombo color={'textDisabled'} background={'primaryAccent'} />
        <ColorCombo color={'textDisabled'} background={'primaryBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'link'} background={'primary'} />
        <ColorCombo color={'link'} background={'primaryAccent'} />
        <ColorCombo color={'link'} background={'primaryBackground'} />
      </Group>
      <Title>Success Color Uses</Title>
      <Group>
        <ColorCombo color={'text'} background={'success'} />
        <ColorCombo color={'textInverse'} background={'success'} />
        <ColorCombo color={'text'} background={'successAccent'} />
        <ColorCombo color={'text'} background={'successBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textMeta'} background={'success'} />
        <ColorCombo color={'textMeta'} background={'successAccent'} />
        <ColorCombo color={'textMeta'} background={'successBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textDisabled'} background={'success'} />
        <ColorCombo color={'textDisabled'} background={'successAccent'} />
        <ColorCombo color={'textDisabled'} background={'successBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'link'} background={'success'} />
        <ColorCombo color={'link'} background={'successAccent'} />
        <ColorCombo color={'link'} background={'successBackground'} />
      </Group>
      <Title>Warning Color Uses</Title>
      <Group>
        <ColorCombo color={'text'} background={'warning'} />
        <ColorCombo color={'textInverse'} background={'warning'} />
        <ColorCombo color={'text'} background={'warningAccent'} />
        <ColorCombo color={'text'} background={'warningBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textMeta'} background={'warning'} />
        <ColorCombo color={'textMeta'} background={'warningAccent'} />
        <ColorCombo color={'textMeta'} background={'warningBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textDisabled'} background={'warning'} />
        <ColorCombo color={'textDisabled'} background={'warningAccent'} />
        <ColorCombo color={'textDisabled'} background={'warningBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'link'} background={'warning'} />
        <ColorCombo color={'link'} background={'warningAccent'} />
        <ColorCombo color={'link'} background={'warningBackground'} />
      </Group>
      <Title>Error Color Uses</Title>
      <Group>
        <ColorCombo color={'text'} background={'error'} />
        <ColorCombo color={'textInverse'} background={'error'} />
        <ColorCombo color={'text'} background={'errorAccent'} />
        <ColorCombo color={'text'} background={'errorBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textMeta'} background={'error'} />
        <ColorCombo color={'textMeta'} background={'errorAccent'} />
        <ColorCombo color={'textMeta'} background={'errorBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'textDisabled'} background={'error'} />
        <ColorCombo color={'textDisabled'} background={'errorAccent'} />
        <ColorCombo color={'textDisabled'} background={'errorBackground'} />
      </Group>
      <Group>
        <ColorCombo color={'link'} background={'error'} />
        <ColorCombo color={'link'} background={'errorAccent'} />
        <ColorCombo color={'link'} background={'errorBackground'} />
      </Group>
    </Root>
  )
})
