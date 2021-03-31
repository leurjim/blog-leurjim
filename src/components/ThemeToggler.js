import React from 'react'
import { useColorMode } from 'theme-ui'
import { FiMoon, FiSun } from 'react-icons/fi'
import Button from './Button'
import { grayscale } from 'polished'

const ThemeToggler = (props) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Button
      id="dark-mode-toggler"
      css={{
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
      }}
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      {colorMode === 'default' ? (
        <FiMoon 
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
          }} />
      ) : (
        <FiSun
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
          }} />
      )}
    </Button>
  )
}

export default ThemeToggler
