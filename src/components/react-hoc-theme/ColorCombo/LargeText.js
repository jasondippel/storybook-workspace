import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'react-hoc-theme'

const Root = useTheme(styled.div`
  display: flex;
  color: ${p => p.$theme`colors/${p.color}`};
  font-weight: bold;
  font-size: 14px;
`)

export const LargeText = ({ color, children }) => (
  <Root color={color}>{children}</Root>
)
