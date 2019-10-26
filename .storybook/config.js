import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'react-hoc-theme'
import { withA11y } from '@storybook/addon-a11y'
import { configure, addDecorator, addParameters } from '@storybook/react'
import workspaceTheme from './workspaceTheme'

const Root = useTheme(styled.div`
  padding: 16px;
  box-sizing: border-box;
`)

// Option defaults.
addParameters({
  options: {
    theme: workspaceTheme,
  },
  a11y: {
    restoreScroll: true,
  },
})

addDecorator(storyFn => <Root id="myRoot">{storyFn()}</Root>)
addDecorator(withA11y)

configure(require.context('../src/', true, /\.stories\.js$/), module)
