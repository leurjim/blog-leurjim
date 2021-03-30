/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { bpMinSM, bpMinMD, bpMinLG} from '../lib/breakpoints'
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'

const Layout = ({ children }) => {
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
        <div
          css={{
            display: 'flex',
            marginTop: '20px',
            [bpMinSM]: {
              marginTop: '20px',
            },
            [bpMinMD]: {
              marginTop: '30px',
            },
            [bpMinLG]: {
              margin: '40px 0 0 20px',
            },
          }}
        >  
          <ThemeToggler />
        </div>
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
        <div sx={{ p: 2 }}>© 2021 Leurjim</div>
      </div>
      </footer>
    </Styled.root>
  )
}

export default Layout