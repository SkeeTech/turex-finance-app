import { BLOCKCHAIN_NAME, BlockchainName } from 'rubic-sdk';

export const blockchainImageKey: Record<BlockchainName, string> = {
  ...Object.values(BLOCKCHAIN_NAME).reduce(
    (acc, blockchain) => ({ ...acc, [blockchain]: null }),
    {} as Record<BlockchainName, string>
  ),
  [BLOCKCHAIN_NAME.ETHEREUM]: 'ethereum',
  [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: 'smartchain',
  [BLOCKCHAIN_NAME.POLYGON]: 'polygon',
  [BLOCKCHAIN_NAME.AVALANCHE]: 'avalanche',
  [BLOCKCHAIN_NAME.MOONRIVER]: 'moonriver',
  [BLOCKCHAIN_NAME.FANTOM]: 'fantom',
  [BLOCKCHAIN_NAME.ARBITRUM]: 'arbitrum',
  [BLOCKCHAIN_NAME.AURORA]: 'aurora',
  [BLOCKCHAIN_NAME.TELOS]: 'telos',
  [BLOCKCHAIN_NAME.HARMONY]: 'harmony',
  [BLOCKCHAIN_NAME.SOLANA]: 'solana',
  [BLOCKCHAIN_NAME.NEAR]: 'near',
  [BLOCKCHAIN_NAME.OPTIMISM]: 'optimism',
  [BLOCKCHAIN_NAME.CRONOS]: 'cronos',
  [BLOCKCHAIN_NAME.GNOSIS]: 'xdai',
  [BLOCKCHAIN_NAME.MOONBEAM]: 'moonbeam',
  [BLOCKCHAIN_NAME.CELO]: 'celo',
  [BLOCKCHAIN_NAME.BOBA]: 'boba',
  [BLOCKCHAIN_NAME.ASTAR_EVM]: 'astar_evm',
  [BLOCKCHAIN_NAME.BITCOIN]: 'bitcoin',
  [BLOCKCHAIN_NAME.ETHEREUM_POW]: 'ethereum-pow',
  [BLOCKCHAIN_NAME.TRON]: 'tron',
  [BLOCKCHAIN_NAME.KAVA]: 'kava',
  [BLOCKCHAIN_NAME.BITGERT]: 'bitgert',
  [BLOCKCHAIN_NAME.OASIS]: 'oasis',
  [BLOCKCHAIN_NAME.METIS]: 'metis',
  [BLOCKCHAIN_NAME.DFK]: 'defi-kingdoms',
  [BLOCKCHAIN_NAME.KLAYTN]: 'klaytn',
  [BLOCKCHAIN_NAME.VELAS]: 'velas',
  [BLOCKCHAIN_NAME.SYSCOIN]: 'syscoin'
};
