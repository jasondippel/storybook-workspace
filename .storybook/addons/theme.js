import React from 'react'
import { useTheme } from 'react-hoc-theme'
import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'

const ADDON_ID = 'themeAddon'
const PARAM_KEY = 'themeAddon'
const PANEL_ID = `${ADDON_ID}/panel`

const setThemeColors = ($theme, tries = 0) => {
  console.log('try', tries)
  const Iframe = document.getElementById('storybook-preview-iframe')
  const DemoRoot = Iframe.contentWindow.document.getElementById('root')
  if (!!DemoRoot) {
    DemoRoot.style.backgroundColor = $theme.background100
    DemoRoot.style.color = $theme.text
  } else if (tries < 5) {
    window.setTimeout(() => setThemeColors($theme, tries + 1), 100)
  } else {
    console.error('Unable to set theme colors on demo root; Max tries reached')
  }
}

const ThemePanel = useTheme(({ $theme }) => {
  setThemeColors($theme)
  return <div>TODO: theme switcher</div>
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
