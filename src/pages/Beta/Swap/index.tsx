import React from 'react'
import { PageWrapper, GridContainer, TopContainer, StatsWrapper } from './styleds'
import { useGelatoLimitOrderList } from '@pangolindex/components'
import MyPortfolio from './MyPortfolio'
import WatchList from './WatchList'
import PairInfo from './PairInfo'
import { SwapWidget } from '@pangolindex/components'
import { RedirectContext } from './WatchList/CoinChart'
import LimitOrderList from './LimitOrderList'

const SwapUI = () => {
  const { allOrders } = useGelatoLimitOrderList()

  const isLimitOrders = (allOrders || []).length > 0
  return (
    <PageWrapper>
      <TopContainer>
        <StatsWrapper>
          <PairInfo />
        </StatsWrapper>
        <SwapWidget isShowLimit={true} />
      </TopContainer>

      <GridContainer isLimitOrders={isLimitOrders}>
        {isLimitOrders && <LimitOrderList />}

        <MyPortfolio isLimitOrders={isLimitOrders} />
        <RedirectContext.Provider value={false}>
          <WatchList isLimitOrders={isLimitOrders} />
        </RedirectContext.Provider>
      </GridContainer>
    </PageWrapper>
  )
}
export default SwapUI
