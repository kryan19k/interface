import React, { useState } from 'react'
import {
  Frame,
  LightModeIcon,
  NightModeIcon,
  TransactionButton,
  TransactionIcon,
  Items,
  Line,
  ThemeMode,
  Wrapper
} from './styled'
import { MenuLinks } from '../../Sidebar/MenuLinks'
import SocialMedia from 'src/layout/SocialMedia'
import { Box, Text, useTranslation } from '@pangolindex/components'
import { Scrollbars } from 'react-custom-scrollbars'
import Logout from 'src/assets/svg/menu/logout.svg'
import { useDarkModeManager } from 'src/state/user/hooks'
import LanguageSelection from 'src/components/LanguageSelection'
import { MobileHeader } from '../MobileHeader'
import Footer from 'src/layout/Footer'
import TransactionModal from './TransactionModal'
import Modal from 'src/components/Beta/Modal'
import { LEGACY_PAGE } from 'src/constants'

interface Props {
  activeMobileMenu: boolean
  handleMobileMenu: () => void
}

const MobileMenu: React.FC<Props> = ({ activeMobileMenu, handleMobileMenu }) => {
  const [isDark, toggleDarkMode] = useDarkModeManager()

  const [openTransactions, setOpenTransactions] = useState(false)

  const { t } = useTranslation()

  const onCloseTransactions = () => {
    setOpenTransactions(false)
  }

  return (
    <Frame>
      <Scrollbars>
        <MobileHeader activeMobileMenu={activeMobileMenu} handleMobileMenu={handleMobileMenu} />
        <Box display="flex" flexDirection="column" padding="15px">
          <Line />
          <Items>
            <Wrapper width="100%" justifyContent="center">
              <TransactionButton onClick={() => setOpenTransactions(true)}>
                <Box width="20px" height="20px">
                  <TransactionIcon />
                </Box>
              </TransactionButton>
              <LanguageSelection />
              <ThemeMode onClick={() => toggleDarkMode()}>
                <Box width="20px" height="20px">
                  {isDark ? <LightModeIcon /> : <NightModeIcon />}
                </Box>
              </ThemeMode>
            </Wrapper>
          </Items>
          <Box style={{ flexGrow: 1 }}>
            <MenuLinks onClick={handleMobileMenu} />
          </Box>
          <a href={LEGACY_PAGE} style={{ width: '100%', textDecoration: 'none', marginTop: '100px' }}>
            <Box width="100%" display="flex" flexDirection="row" alignItems="center" style={{ gap: 20 }}>
              <img src={Logout} alt="Logout" height="20px" />
              <Text fontSize="16px" color="color22" fontWeight={500}>
                {t('header.returnToLegacySite')}
              </Text>
            </Box>
          </a>
          <Box width="100%" marginBottom="20px" marginTop="20px">
            <SocialMedia collapsed={false} />
          </Box>
          <Footer />
        </Box>
      </Scrollbars>
      <Modal isOpen={openTransactions} onDismiss={onCloseTransactions}>
        <TransactionModal onClose={onCloseTransactions} />
      </Modal>
    </Frame>
  )
}

export default MobileMenu
