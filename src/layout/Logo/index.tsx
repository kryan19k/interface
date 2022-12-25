import React from 'react'
import { Box } from '@pangolindex/components'
import Logo from 'src/assets/images/logo.png'
import LogoDark from 'src/assets/images/logo.png'
import LogoLight from 'src/assets/images/logo.png'

import { Title, LogoWrapper } from './styled'
import { useIsDarkMode } from 'src/state/user/hooks'

interface LogoProps {
  collapsed: boolean
}

export default function LogoIcon({ collapsed }: LogoProps) {
  const isDark = useIsDarkMode()
  return (
    <LogoWrapper collapsed={collapsed}>
      <Box>
        <Title href="./#/dashboard">
          {!collapsed ? (
            <img height="28px" src={isDark ? LogoDark : LogoLight} alt="logo" />
          ) : (
            <img width="28px" src={Logo} alt="logo" />
          )}
        </Title>
      </Box>
    </LogoWrapper>
  )
}
