/** @jsx jsx */
import React from 'react'
import { jsx, Styled, useColorMode } from "theme-ui"
import { css } from '@emotion/core'
import { Link } from "gatsby"
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Styled.root>
      <header
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          variant: 'styles.header',
          // width: '100%',
          fontSize: 2,
          maxWidth: 880,
          mx: 'auto',
          px: 2,
          py: 3,
          borderBottom: 'thin solid #fafafa'
        }}
      >
        <Link
          to="/"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            variant: 'styles.navlink',
            fontFamily: 'Transformers',
            fontSize: 3,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            ':hover,:focus': {
              color: 'primary',
            },
          }}>
          <Logo />
          <span
            sx={{
              m: 1,
            }}
          >
            leurjim
          </span>
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Link
          to="/"
          sx={{
            variant: 'styles.navlink',
            p: 2,
            py: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            ':hover,:focus': {
              color: 'primary',
            },
          }}>
          Inicio
        </Link>  
        <ThemeToggler />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <div
          sx={{
            maxWidth: 768,
            mx: 'auto',
            px: 3,
          }}>
          {children} 
        </div>
      </main>
      <footer
        sx={{
          fontSize: 2,
          variant: 'styles.footer',
        }}
      >
        <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: 880,
          mx: 'auto',
          px: 2,
          py: 3,
          borderTop: 'thin solid #fafafa'
        }}>
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>?? 2021 Leurjim</div>
      </div>
      </footer>
    </Styled.root>
  )
}

export default Layout