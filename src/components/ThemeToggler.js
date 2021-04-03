import React from 'react'
import { useColorMode } from 'theme-ui'
import { FiMoon, FiSun } from 'react-icons/fi'
import { rgba } from 'polished'
import Button from './Button'
import colors from '../lib/colors'
import { grayscale } from 'polished'

const ThemeToggler = () => {
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
            width: '1.25rem',
            height: '1.25rem',
          }} />
      ) : (
        <FiSun
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            width: '1.25rem',
            height: '1.25rem',
          }} />
      )}
    </Button>
  )
}

export default ThemeToggler
