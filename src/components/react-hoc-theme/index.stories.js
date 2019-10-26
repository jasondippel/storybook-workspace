import React from 'react'
import styled from 'styled-components'
import { useTheme as useThemeHoc } from 'react-hoc-theme'

const Root = useThemeHoc(styled.div`
  color: ${p => p.$theme.text};
`)

export default { title: 'Packages|Components/react-hoc-theme' }

export const sample = () => <Root>TODO: add some content...</Root>
