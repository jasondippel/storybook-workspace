import React from 'react'
import styled from 'styled-components'
import {
  useTheme,
  getActiveTheme,
  setActiveTheme,
  LIGHT_THEME,
  DARK_THEME,
} from 'react-hoc-theme'
import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'

const ADDON_ID = 'themeAddon'
const PARAM_KEY = 'themeAddon'
const PANEL_ID = `${ADDON_ID}/panel`

const THEME_UPDATED_MESSAGE = 'theme_updated'

const Root = styled.div`
  padding: 16px;
`

const Label = styled.label`
  margin-right: 16px;
`

const Input = styled.input``

const handleClick = e => {
  const selectedTheme = e.target.value
  console.log('handleClick', selectedTheme)

  if (selectedTheme === 'light') {
    return setActiveTheme(LIGHT_THEME)
  }
  if (selectedTheme === 'dark') {
    setActiveTheme(DARK_THEME)
  }
}

// NOTE: useTheme is required here so that the getActiveTheme call succeeds
const ThemePanel = useTheme(() => {
  const activeTheme = getActiveTheme()
  return (
    <Root>
      <Label>
        <Input
          type="radio"
          name="theme-type"
          value="light"
          checked={
            activeTheme.type === 'light' || activeTheme.type === 'default'
          }
          onChange={handleClick}
        />
        Light
      </Label>
      <Label>
        <Input
          type="radio"
          name="theme-type"
          value="dark"
          checked={activeTheme.type === 'dark'}
          onChange={handleClick}
        />
        Dark
      </Label>
    </Root>
  )
})

addons.register(ADDON_ID, api => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <ThemePanel />
    </AddonPanel>
  )
  const title = 'Theme'

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  })
})
