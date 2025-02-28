import { CommonRecentTrade } from '@shared/models/recent-trades/common-recent-trade';
import { FiatAsset } from '@shared/models/fiats/fiat-asset';

export interface OnramperRecentTrade extends CommonRecentTrade {
  fromFiat: FiatAsset;
  nativeAmount?: string;

  txId: string;
  amountOutMin?: string;
}
