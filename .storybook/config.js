import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'react-hoc-theme'
import { withA11y } from '@storybook/addon-a11y'
import { configure, addDecorator, addParameters } from '@storybook/react'
import workspaceTheme from './workspaceTheme'

const Root = styled.div`
  padding: 16px;
`

const DemoBase = useTheme(({ $theme, storyFn }) => {
  const IframeRoot = document.getElementById('root')
  IframeRoot.style.background = $theme`colors/background100`

  return <Root>{storyFn()}</Root>
})

// Option defaults.
addParameters({
  options: {
    theme: workspaceTheme,
  },
  a11y: {
    restoreScroll: true,
  },
})

addDecorator(storyFn => <DemoBase storyFn={storyFn} />)
addDecorator(withA11y)

configure(require.context('../src/', true, /\.stories\.js$/), module)
