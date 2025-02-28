import { BlockchainName, BLOCKCHAIN_NAME } from 'rubic-sdk';

const BLOCKCHAINS_MAPPING: Record<BlockchainName, string> = {
  [BLOCKCHAIN_NAME.ETHEREUM]: 'ethereum',
  [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: 'binance-smart-chain',
  [BLOCKCHAIN_NAME.POLYGON]: 'polygon',
  [BLOCKCHAIN_NAME.HARMONY]: 'harmony',
  [BLOCKCHAIN_NAME.AVALANCHE]: 'avalanche',
  [BLOCKCHAIN_NAME.MOONRIVER]: 'moonriver',
  [BLOCKCHAIN_NAME.FANTOM]: 'fantom',
  [BLOCKCHAIN_NAME.ARBITRUM]: 'arbitrum',
  [BLOCKCHAIN_NAME.AURORA]: 'aurora',
  [BLOCKCHAIN_NAME.SOLANA]: 'solana',
  [BLOCKCHAIN_NAME.NEAR]: 'near',
  [BLOCKCHAIN_NAME.TELOS]: 'telos-evm',
  [BLOCKCHAIN_NAME.OPTIMISM]: 'optimistic-ethereum',
  [BLOCKCHAIN_NAME.CRONOS]: 'cronos',
  [BLOCKCHAIN_NAME.OKE_X_CHAIN]: 'okex-chain',
  [BLOCKCHAIN_NAME.GNOSIS]: 'xdai',
  [BLOCKCHAIN_NAME.FUSE]: 'fuse',
  [BLOCKCHAIN_NAME.MOONBEAM]: 'moonbeam',
  [BLOCKCHAIN_NAME.CELO]: 'celo',
  [BLOCKCHAIN_NAME.BOBA]: 'boba',
  [BLOCKCHAIN_NAME.BOBA_BSC]: 'boba-bsc',
  [BLOCKCHAIN_NAME.BOBA_AVALANCHE]: 'boba-avalanche',
  [BLOCKCHAIN_NAME.ASTAR_EVM]: 'astar_evm',
  [BLOCKCHAIN_NAME.ASTAR]: 'astar',
  [BLOCKCHAIN_NAME.BITCOIN]: 'bitcoin',
  [BLOCKCHAIN_NAME.ETHEREUM_POW]: 'ethereum-pow',
  [BLOCKCHAIN_NAME.TRON]: 'tron',
  [BLOCKCHAIN_NAME.KAVA]: 'kava',
  [BLOCKCHAIN_NAME.BITGERT]: 'bitgert',
  [BLOCKCHAIN_NAME.OASIS]: 'oasis',
  [BLOCKCHAIN_NAME.METIS]: 'metis',
  [BLOCKCHAIN_NAME.DFK]: 'defikingdoms',
  [BLOCKCHAIN_NAME.KLAYTN]: 'klaytn',
  [BLOCKCHAIN_NAME.VELAS]: 'velas',
  [BLOCKCHAIN_NAME.SYSCOIN]: 'syscoin',
  [BLOCKCHAIN_NAME.EOS]: 'eos',
  [BLOCKCHAIN_NAME.ETHEREUM_CLASSIC]: 'ethereum-classic',
  [BLOCKCHAIN_NAME.FILECOIN]: 'filecoin',
  [BLOCKCHAIN_NAME.FLARE]: 'flare',
  [BLOCKCHAIN_NAME.IOTEX]: 'iotex',
  [BLOCKCHAIN_NAME.ONTOLOGY]: 'ontology',
  [BLOCKCHAIN_NAME.THETA]: 'theta',
  [BLOCKCHAIN_NAME.XDC]: 'xdc',
  [BLOCKCHAIN_NAME.BITCOIN_CASH]: 'bitcoin-cash',
  [BLOCKCHAIN_NAME.ICP]: 'icp',
  [BLOCKCHAIN_NAME.CARDANO]: 'cardano',
  [BLOCKCHAIN_NAME.AION]: 'aion',
  [BLOCKCHAIN_NAME.ALGORAND]: 'algorand',
  [BLOCKCHAIN_NAME.APTOS]: 'aptos',
  [BLOCKCHAIN_NAME.ARDOR]: 'ardor',
  [BLOCKCHAIN_NAME.ARK]: 'ark',
  [BLOCKCHAIN_NAME.COSMOS]: 'cosmos',
  [BLOCKCHAIN_NAME.BAND_PROTOCOL]: 'band-protocol',
  [BLOCKCHAIN_NAME.BITCOIN_DIAMOND]: 'bitcoin-diamond',
  [BLOCKCHAIN_NAME.BSV]: 'bsv',
  [BLOCKCHAIN_NAME.BITCOIN_GOLD]: 'bitcoin-gold',
  [BLOCKCHAIN_NAME.CASPER]: 'casper',
  [BLOCKCHAIN_NAME.DASH]: 'dash',
  [BLOCKCHAIN_NAME.DECRED]: 'decred',
  [BLOCKCHAIN_NAME.DIGI_BYTE]: 'digibyte',
  [BLOCKCHAIN_NAME.DIVI]: 'divi',
  [BLOCKCHAIN_NAME.DOGECOIN]: 'dogecoin',
  [BLOCKCHAIN_NAME.POLKADOT]: 'polkadot',
  [BLOCKCHAIN_NAME.MULTIVERS_X]: 'multiversx',
  [BLOCKCHAIN_NAME.FIO_PROTOCOL]: 'fio-protocol',
  [BLOCKCHAIN_NAME.FIRO]: 'firo',
  [BLOCKCHAIN_NAME.FLOW]: 'flow',
  [BLOCKCHAIN_NAME.HEDERA]: 'hedera',
  [BLOCKCHAIN_NAME.HELIUM]: 'helium',
  [BLOCKCHAIN_NAME.ICON]: 'icon',
  [BLOCKCHAIN_NAME.IOST]: 'iost',
  [BLOCKCHAIN_NAME.IOTA]: 'iota',
  [BLOCKCHAIN_NAME.KADENA]: 'kadena',
  [BLOCKCHAIN_NAME.KOMODO]: 'komodo',
  [BLOCKCHAIN_NAME.KUSAMA]: 'kusama',
  [BLOCKCHAIN_NAME.LISK]: 'lisk',
  [BLOCKCHAIN_NAME.LITECOIN]: 'litecoin',
  [BLOCKCHAIN_NAME.TERRA]: 'terra',
  [BLOCKCHAIN_NAME.TERRA_CLASSIC]: 'terra-classic',
  [BLOCKCHAIN_NAME.MINA_PROTOCOL]: 'mina-protocol',
  [BLOCKCHAIN_NAME.NANO]: 'nano',
  [BLOCKCHAIN_NAME.NEO]: 'neo',
  [BLOCKCHAIN_NAME.OSMOSIS]: 'osmosis',
  [BLOCKCHAIN_NAME.PIVX]: 'pivx',
  [BLOCKCHAIN_NAME.POLYX]: 'polyx',
  [BLOCKCHAIN_NAME.QTUM]: 'qtum',
  [BLOCKCHAIN_NAME.THOR_CHAIN]: 'thorchain',
  [BLOCKCHAIN_NAME.RAVENCOIN]: 'ravencoin',
  [BLOCKCHAIN_NAME.SIA]: 'sia',
  [BLOCKCHAIN_NAME.SECRET]: 'secret',
  [BLOCKCHAIN_NAME.STEEM]: 'steem',
  [BLOCKCHAIN_NAME.STRATIS]: 'stratis',
  [BLOCKCHAIN_NAME.STACKS]: 'stacks',
  [BLOCKCHAIN_NAME.SOLAR]: 'solar',
  [BLOCKCHAIN_NAME.TON]: 'ton',
  [BLOCKCHAIN_NAME.VE_CHAIN]: 'vechain',
  [BLOCKCHAIN_NAME.WAVES]: 'waves',
  [BLOCKCHAIN_NAME.WAX]: 'wax',
  [BLOCKCHAIN_NAME.DX_CHAIN]: 'dxchain',
  [BLOCKCHAIN_NAME.E_CASH]: 'ecash',
  [BLOCKCHAIN_NAME.NEM]: 'nem',
  [BLOCKCHAIN_NAME.STELLAR]: 'stellar',
  [BLOCKCHAIN_NAME.MONERO]: 'monero',
  [BLOCKCHAIN_NAME.RIPPLE]: 'ripple',
  [BLOCKCHAIN_NAME.TEZOS]: 'tezos',
  [BLOCKCHAIN_NAME.VERGE]: 'verge',
  [BLOCKCHAIN_NAME.SYMBOL]: 'symbol',
  [BLOCKCHAIN_NAME.ZCASH]: 'zcash',
  [BLOCKCHAIN_NAME.HORIZEN]: 'horizen',
  [BLOCKCHAIN_NAME.ZILLIQA]: 'zilliqa',
  [BLOCKCHAIN_NAME.KAVA_COSMOS]: 'kava_cosmos',
  [BLOCKCHAIN_NAME.ZK_SYNC]: 'zksync'
} as const;

export const TO_BACKEND_BLOCKCHAINS: Record<BlockchainName, BackendBlockchain> = {
  ...BLOCKCHAINS_MAPPING
};

export type BackendBlockchain = typeof BLOCKCHAINS_MAPPING[keyof typeof BLOCKCHAINS_MAPPING];

export const FROM_BACKEND_BLOCKCHAINS: Record<BackendBlockchain, BlockchainName> = (
  Object.keys(BLOCKCHAINS_MAPPING) as BlockchainName[]
).reduce(
  (acc, blockchain) => ({
    ...acc,
    [BLOCKCHAINS_MAPPING[blockchain]]: blockchain
  }),
  {} as Record<BackendBlockchain, BlockchainName>
);
