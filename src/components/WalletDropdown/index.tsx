import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Z_INDEX } from 'theme/zIndex'

import { useModalIsOpen } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import DefaultMenu from './DefaultMenu'
import LanguageMenu from './LanguageMenu'
import { TransactionHistoryMenu } from './TransactionMenu'

const WalletWrapper = styled.div`
  border-radius: 12px;
  width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  top: 60px;
  right: 70px;
  background-color: ${({ theme }) => theme.backgroundSurface};
  border: ${({ theme }) => `1px solid ${theme.backgroundOutline}`};
  box-shadow: ${({ theme }) => theme.deepShadow};
  padding: 16px 0;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    width: 100%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: unset;
  }
`

export enum MenuState {
  DEFAULT = 'DEFAULT',
  LANGUAGE = 'LANGUAGE',
  TRANSACTIONS = 'TRANSACTIONS',
}

const WalletDropdownWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 20px;
  z-index: ${Z_INDEX.dropdown};

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    top: unset;
    left: 0;
    right: 0;
    bottom: 56px;
  }
`

const WalletDropdown = ({ setTransactionLen, navDrop, navDropHistory }: { setTransactionLen: any, navDrop: any, navDropHistory: any }) => {
  const [menu, setMenu] = useState<MenuState>(MenuState.DEFAULT)
  var walletDropdownOpen = useModalIsOpen(ApplicationModal.WALLET_DROPDOWN)

  useEffect(() => {
    if (navDropHistory)
      setMenu(MenuState.TRANSACTIONS)
    // console.log(navDrop, walletDropdownOpen)
  }, [navDropHistory])
  return (
    <>
      {(walletDropdownOpen || navDrop) && (
        <WalletDropdownWrapper>
          <WalletWrapper>
            {menu === MenuState.TRANSACTIONS && <TransactionHistoryMenu setTransactionLen={setTransactionLen} onClose={() => setMenu(MenuState.DEFAULT)} />}
            {menu === MenuState.LANGUAGE && <LanguageMenu onClose={() => setMenu(MenuState.DEFAULT)} />}
            {menu === MenuState.DEFAULT && <DefaultMenu setMenu={setMenu} />}
          </WalletWrapper>
        </WalletDropdownWrapper>
      )}
    </>
  )
}

export default WalletDropdown
