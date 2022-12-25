import PNG from 'src/assets/images/logo.png'
import PNR from 'src/assets/images/logo.png'
import PSB from 'src/assets/images/logo.png'
import PNG_HEDRA from 'src/assets/svg/PNG/PNG_HEDERA.svg'
import Airdrop from '@pangolindex/exchange-contracts/artifacts/contracts/pangolin-token/Airdrop.sol/Airdrop.json'
import MerkleAirdrop from '@pangolindex/exchange-contracts/artifacts/contracts/pangolin-token/Merkledrop.sol/Merkledrop.json'
import MerkleAirdropToStaking from '@pangolindex/exchange-contracts/artifacts/contracts/pangolin-token/MerkledropToStaking.sol/MerkledropToStaking.json'
import MerkleAirdropCompliant from '@pangolindex/exchange-contracts/artifacts/contracts/pangolin-token/MerkledropToStakingCompliant.sol/MerkledropToStakingCompliant.json'
import { NEAR_MAINNET, FLARE_MAINNET, ChainId, AirdropType, CHAINS } from '@pangolindex/sdk'

export interface AirdropData {
  address: string
  active: boolean
  type: AirdropType
  title?: string
}

export const activeAirdrops: { [chainId in ChainId]?: AirdropData } = {
  [ChainId.SONGBIRD]: CHAINS[ChainId.SONGBIRD]!.contracts!.airdrop
}

export const specialAirdrops: { [chainId in ChainId]?: AirdropData[] } = {
  [ChainId.SONGBIRD]: CHAINS[ChainId.SONGBIRD]!.contracts!.specialAirdrops
}

export const commingSoonAirdrops = [NEAR_MAINNET, FLARE_MAINNET]

export const logoMapping = {
  [ChainId.COSTON]: PNG,
  [ChainId.SONGBIRD]: PSB,
  [ChainId.HEDERA_TESTNET]: PNG_HEDRA,
  [ChainId.FUJI]: PNG,
  [ChainId.AVALANCHE]: PNG,
  [ChainId.WAGMI]: PNG,
  14: PNG, // Don't have flare on chain id mapping
  [ChainId.NEAR_MAINNET]: PNR,
  [ChainId.NEAR_TESTNET]: PNR,
  [ChainId.ETHEREUM]: '',
  [ChainId.POLYGON]: '',
  [ChainId.FANTOM]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.CELO]: '',
  [ChainId.OKXCHAIN]: '',
  [ChainId.VELAS]: '',
  [ChainId.AURORA]: '',
  [ChainId.CRONOS]: '',
  [ChainId.FUSE]: '',
  [ChainId.MOONRIVER]: '',
  [ChainId.MOONBEAM]: '',
  [ChainId.OP]: ''
}

export const airdropAbiMapping = {
  [AirdropType.LEGACY]: Airdrop.abi,
  [AirdropType.MERKLE]: MerkleAirdrop.abi,
  [AirdropType.MERKLE_TO_STAKING]: MerkleAirdropToStaking.abi,
  [AirdropType.MERKLE_TO_STAKING_COMPLIANT]: MerkleAirdropCompliant.abi,
  [AirdropType.NEAR_AIRDROP]: undefined
}
