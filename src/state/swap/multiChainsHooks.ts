import { useGelatoLimitOrderList } from '@pangolindex/components'
import { ChainId } from '@pangolindex/sdk'
import { useDummyHook } from '../stake/multiChainsHooks'

export type UseGelatoLimitOrdersHookType = {
  [chainId in ChainId]: typeof useGelatoLimitOrderList | typeof useDummyGelatoLimitOrders | typeof useDummyHook
}

const useDummyGelatoLimitOrders = () => []

export const useGelatoLimitOrdersHook: UseGelatoLimitOrdersHookType = {
  [ChainId.AVALANCHE]: useGelatoLimitOrderList,
  [ChainId.FUJI]: useGelatoLimitOrderList,
  [ChainId.WAGMI]: useGelatoLimitOrderList,
  [ChainId.COSTON]: useDummyGelatoLimitOrders,
  [ChainId.SONGBIRD]: useDummyGelatoLimitOrders,
  [ChainId.HEDERA_TESTNET]: useDummyGelatoLimitOrders,
  [ChainId.NEAR_MAINNET]: useDummyGelatoLimitOrders,
  [ChainId.NEAR_TESTNET]: useDummyGelatoLimitOrders,
  //TODO: Change following chains
  [ChainId.ETHEREUM]: useDummyGelatoLimitOrders,
  [ChainId.POLYGON]: useDummyGelatoLimitOrders,
  [ChainId.FANTOM]: useDummyGelatoLimitOrders,
  [ChainId.XDAI]: useDummyGelatoLimitOrders,
  [ChainId.BSC]: useDummyGelatoLimitOrders,
  [ChainId.ARBITRUM]: useDummyGelatoLimitOrders,
  [ChainId.CELO]: useDummyGelatoLimitOrders,
  [ChainId.OKXCHAIN]: useDummyGelatoLimitOrders,
  [ChainId.VELAS]: useDummyGelatoLimitOrders,
  [ChainId.AURORA]: useDummyGelatoLimitOrders,
  [ChainId.CRONOS]: useDummyGelatoLimitOrders,
  [ChainId.FUSE]: useDummyGelatoLimitOrders,
  [ChainId.MOONRIVER]: useDummyGelatoLimitOrders,
  [ChainId.MOONBEAM]: useDummyGelatoLimitOrders,
  [ChainId.OP]: useDummyGelatoLimitOrders
}
