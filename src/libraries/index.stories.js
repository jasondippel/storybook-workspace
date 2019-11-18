import React from 'react'
import styled from 'styled-components'
import { useTheme as useThemeHoc } from 'react-hoc-theme'

const Root = useThemeHoc(styled.div`
  color: ${p => p.$theme`colors/text`};
`)

export default { title: 'Packages|Libraries/Sample' }

export const sample = () => <Root>A sample library story file.</Root>
