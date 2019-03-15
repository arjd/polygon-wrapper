export enum TimespanEnum {
  Minute = 'minute',
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year'
}

export enum LocaleEnum {
  Global = 'GLOBAL',
  US = 'US',
  UK = 'GB',
  CA = 'CA',
  NL = 'NL',
  GR = 'GR',
  SP = 'SP',
  DE = 'DE',
  BE = 'BE',
  DK = 'DK',
  FI = 'FI',
  IE = 'IE',
  PT = 'PT',
  IN = 'IN',
  MX = 'MX',
  FR = 'FR',
  CN = 'CN',
  CH = 'CH',
  SE = 'SE'
}

export enum MarketEnum {
  Stocks = 'STOCKS',
  Crypto = 'CRYPTO',
  Bonds = 'BONDS',
  MutualFunds = 'MF',
  MoneyMarketFunds = 'MMF',
  Indices = 'INDICES',
  Forex = 'FX'
}

export enum CryptoExchangeTypeEnum {
  Exchange = 'exchange'
}

export enum CryptoExchangeMarketEnum {
  Crypto = 'crypto'
}

export enum StockExchangeTypeEnum {
  TRF = 'TRF',
  Exchange = 'exchange'
}
export enum StockExchangeMarketEnum {
  Equities = 'equities',
  Indecies = 'indecies'
}

export enum DividendQualifiedEnum {
  P = 'P',
  Q = 'Q',
  N = 'N'
}

export enum MarketHolidayExchangeEnum {
  NYSE = 'NYSE',
  NASDAQ = 'NASDAQ',
  OTC = 'OTC'
}

export enum MarketHolidayStatusEnum {
  Closed = 'closed',
  EarlyClose = 'early-close',
  LateClose = 'late-close',
  EarlyOpen = 'early-open',
  LateOpen = 'late-open'
}
export enum MarketStatusEnum {
  Open = 'open',
  Closed = 'closed',
}
export enum MarketStatusExtendedEnum {
  Open = 'open',
  Closed = 'closed',
  ExtendedHours = 'extended-hours'
}