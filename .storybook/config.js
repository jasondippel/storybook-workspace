import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'react-hoc-theme'
import { withA11y } from '@storybook/addon-a11y'
import { configure, addDecorator, addParameters } from '@storybook/react'
import workspaceTheme from './workspaceTheme'

const Root = useTheme(styled.div`
  padding: 16px;
  background: ${p => p.$theme.background100};
  color: ${p => p.$theme.text};

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`)

// Option defaults.
addParameters({
  options: {
    theme: workspaceTheme,
  },
})

addDecorator(storyFn => <Root>{storyFn()}</Root>)
addDecorator(withA11y)

configure(require.context('../src/', true, /\.stories\.js$/), module)
