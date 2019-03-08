import { SnapshotBase, AggregateBase } from "./types.base"

/**
 * @param ticker	Ticker symbol requested
 * @param status	Status of the response
 * @param adjusted	If this response was adjusted for splits
 * @param queryCount?	Number of aggregate ( min or day ) used to generate the response
 * @param resultsCount?	Total number of results generated
 */
export class AggregateResponse {
    ticker: string;
    status: string;
    adjusted: boolean;
    queryCount?: number;
    resultsCount?: number;
    results: Array<Aggregate>;
}

/**
 * @param k	Transactions ( 1 transaction contains X shares exchanged )
 * @param t?	Unix Msec Timestamp ( Start of Aggregate window )
 * @param n?	Number of items in aggregate window
 */
export class Aggregate extends AggregateBase {
    T?: string;
    k: number;
    t: number | undefined;
    n?: number;
}

/**
 * @param symbol	Symbol which we are requesting ratings
 * @param analysts	Number of analysts reporting
 * @param change	Change from last month to current
 * @param strongBuy	Strong buy ratings
 * @param buy	Moderate buy ratings
 * @param hold	Hold ratings
 * @param sell	Moderate Sell ratings
 * @param strongSell	Strong Sell ratings
 * @param updated	Last time the ratings for this symbol were updated.
 */
export class AnalystRatings {
    symbol: string;
    analysts: number;
    change: number;
    strongBuy: RatingSection;
    buy: RatingSection;
    hold: RatingSection;
    sell: RatingSection;
    strongSell: RatingSection;
    updated: Date;
}

/**
 * @param logo?	URL of the entities logo.
 * @param exchange	Symbols primary exchange
 * @param name	Name of the company/entity
 * @param listdate?	Date this symbol was listed on the exchange.
 * @param cik?	Official CIK guid used for SEC database / filings.
 * @param bloomberg?	Bloomberg guid for this symbol
 * @param figi?	guid for the OpenFigi project ( https://openfigi.com/ )
 * @param lei?	Legal Entity Identifier (LEI) guid for symbol ( https://en.wikipedia.org/wiki/Legal_Entity_Identifier )
 * @param sic?	Standard Industrial Classification (SIC) id for symbol ( https://en.wikipedia.org/wiki/Standard_Industrial_Classification )
 * @param country?	Country in which this company is registered
 * @param industry?	Industry this company operates in
 * @param sector?	Sector of the indsutry in which this symbol operates in
 * @param marketcap?	Current market cap for this company
 * @param employees?	Approximate number of employees
 * @param phone?	Phone number for this company. Usually corporate contact number.
 * @param ceo?	Name of the companies current CEO
 * @param url?	URL of the companies website
 * @param description	A description of the company and what they do/offer
 * @param updated	Last time this company record was updated.
 */
export class Company {
    logo?: string;
    exchange: string;
    name: string;
    symbol: StockSymbol;
    listdate?: string;
    cik?: string;
    bloomberg?: string;
    figi?: string;
    lei?: string;
    sic?: number;
    country?: string;
    industry?: string;
    sector?: string;
    marketcap?: number;
    employees?: number;
    phone?: string;
    ceo?: string;
    url?: string;
    description: string;
    similar?: Array<StockSymbol>;
    tags?: Array<string>;
    updated: Date;
}

/**
 * @param id	ID of the exchange
 * @param type	Type of exchange feed
 * @param market	Market data type this exchange contains ( crypto only currently )
 * @param name	Name of the exchange
 * @param url	URL of this exchange
 */
export class CryptoExchange {
    id: number;
    type: CryptoExchange.TypeEnum;
    market: CryptoExchange.MarketEnum;
    name: string;
    url: string;
}

export namespace CryptoExchange {
    export enum TypeEnum {
        Exchange = <any> 'exchange'
    }
    export enum MarketEnum {
        Crypto = <any> 'crypto'
    }
}

export class CryptoSnapshotAgg extends SnapshotBase {
}

/**
 * @param p	Price of this book level
 * @param x	Exchange to Size of this price level
 */
export class CryptoSnapshotBookItem {
    p: number;
    x: any;
}


/**
 * @param ticker	Ticker of the object
 * @param todaysChange	Value of the change from previous day
 * @param todaysChangePerc	Percentage change since previous day
 * @param updated	Last Updated timestamp
 */
export class CryptoSnapshotTicker {
    ticker: string;
    day: CryptoSnapshotAgg;
    lastTrade: CryptoTickJson;
    min: CryptoSnapshotAgg;
    prevDay: CryptoSnapshotAgg;
    todaysChange: number;
    todaysChangePerc: number;
    updated: number;
}

/**
 * @param ticker	Ticker of the object
 * @param bids?	Bids
 * @param asks?	Asks
 * @param bidCount?	Combined total number of bids in the book
 * @param askCount?	Combined total number of asks in the book
 * @param spread?	Difference between the best bid and the best ask price accross exchanges
 * @param updated	Last Updated timestamp
 */
export class CryptoSnapshotTickerBook {
    ticker: string;
    bids?: Array<CryptoSnapshotBookItem>;
    asks?: Array<CryptoSnapshotBookItem>;
    bidCount?: number;
    askCount?: number;
    spread?: number;
    updated: number;
}

/**
 * @param price	Trade Price
 * @param size	Size of the trade
 * @param exchange	Exchange the trade occured on
 * @param conditions	Conditions of this trade
 * @param timestamp	Timestamp of this trade
 */
export class CryptoTick {
    price: number;
    size: number;
    exchange: number;
    conditions: Array<number>;
    timestamp: number;
}

/**
 * @param p	Trade Price
 * @param s	Size of the trade
 * @param x	Exchange the trade occured on
 * @param c	Conditions of this trade
 * @param t	Timestamp of this trade
*/
export class CryptoTickJson {
    p: number;
    s: number;
    x: number;
    c: Array<number>;
    t: number;
}

/**
 * Company dividend
 * 
 * @param type	Refers to the dividend payment type<br/> - Dividend income<br/> - Interest income<br/> - Stock dividend<br/> - Short term capital gain<br/> - Medium term capital gain<br/> - Long term capital gain<br/> - Unspecified term capital gain<br/> 
 * @param exDate	Execution date of the trade
 * @param paymentDate?	Payment date of the trade
 * @param recordDate?	Record date of the trade
 * @param declaredDate?	Declared date of the trade
 * @param amount	Amount of the dividend
 * @param qualified?	Refers to the dividend income type<br/> - P = Partially qualified income<br/> - Q = Qualified income<br/> - N = Unqualified income<br/> - null = N/A or unknown 
 * @param flag?	Refers to the dividend flag, if set<br/> FI = Final dividend, div ends or instrument ends<br/> LI = Liquidation, instrument liquidates<br/> PR = Proceeds of a sale of rights or shares<br/> RE = Redemption of rights<br/> AC = Accrued dividend<br/> AR = Payment in arrears<br/> AD = Additional payment<br/> EX = Extra payment<br/> SP = Special dividend<br/> YE = Year end<br/> UR = Unknown rate<br/> SU = Regular dividend is suspended 
*/
export class Dividend {
    symbol: StockSymbol;
    type: string;
    exDate: Date;
    paymentDate?: Date;
    recordDate?: Date;
    declaredDate?: Date;
    amount: number;
    qualified?: Dividend.QualifiedEnum;
    flag?: string;
}

// TODO what is this
export namespace Dividend {
    export enum QualifiedEnum {
        P = <any> 'P',
        Q = <any> 'Q',
        N = <any> 'N',
        Null = <any> null // FIXME
    }
}

/**
 * @param symbol	Stock Symbol
 * @param ePSReportDate	Report Date
 * @param ePSReportDateStr	Report date as non date format
*/
export class Earning {
    symbol: string;
    ePSReportDate: Date;
    ePSReportDateStr: string;
    fiscalPeriod?: string;
    fiscalEndDate?: Date;
    actualEPS?: number;
    consensusEPS?: number;
    estimatedEPS?: number;
    announceTime?: string;
    numberOfEstimates?: number;
    ePSSurpriseDollar?: number;
    yearAgo?: number;
    yearAgoChangePercent?: number;
    estimatedChangePercent?: number;
}

/**
 * @param id	ID of the exchange
 * @param type	The type of exchange this is.<br/> - TRF = Trade Reporting Facility<br/> - exchange = Reporting exchange on the tape 
 * @param market	Market data type this exchange contains
 * @param mic	Market Identification Code
 * @param name	Name of the exchange
 * @param tape	Tape id of the exchange
*/
export class Exchange {
    id: number;
    type: Exchange.TypeEnum;
    market: Exchange.MarketEnum;
    mic: string;
    name: string;
    tape: string;
}

export namespace Exchange {
    export enum TypeEnum {
        TRF = <any> 'TRF',
        Exchange = <any> 'exchange'
    }
    export enum MarketEnum {
        Equities = <any> 'equities',
        Indecies = <any> 'indecies'
    }
}

/**
 * @param symbol	Stock Symbol
 * @param reportDate	Report Date
 * @param reportDateStr	Report date as non date format
*/
export class Financial {
    symbol: string;
    reportDate: Date;
    reportDateStr: string;
    grossProfit?: number;
    costOfRevenue?: number;
    operatingRevenue?: number;
    totalRevenue?: number;
    operatingIncome?: number;
    netIncome?: number;
    researchAndDevelopment?: number;
    operatingExpense?: number;
    currentAssets?: number;
    totalAssets?: number;
    totalLiabilities?: number;
    currentCash?: number;
    currentDebt?: number;
    totalCash?: number;
    totalDebt?: number;
    shareholderEquity?: number;
    cashChange?: number;
    cashFlow?: number;
    operatingGainsLosses?: number;
}

/**
 * @param a	Ask price
 * @param b	Bid price
 * @param t	Timestamp of this trade
*/
export class Forex {
    a: number;
    b: number;
    t: number;
}

export class ForexAggregate extends AggregateBase {
}

export class ForexSnapshotAgg extends SnapshotBase {
}

/**
 * @param ticker	Ticker of the object
*/
export class ForexSnapshotTicker {
    ticker: string;
    day: ForexSnapshotAgg;
    lastTrade: Forex;
    min: ForexSnapshotAgg;
    prevDay: ForexSnapshotAgg;
    todaysChange: number;
    todaysChangePerc: number;
    updated: number;
}

/**
 * @param condition1	Condition 1 of this trade
 * @param condition2	Condition 2 of this trade
 * @param condition3	Condition 3 of this trade
 * @param condition4	Condition 4 of this trade
 * @param exchange	The exchange this trade happened on
 * @param price	Price of the trade
 * @param size	Size of the trade
 * @param timestamp	Timestamp of this trade
*/
export class HistTrade {
    condition1: number;
    condition2: number;
    condition3: number;
    condition4: number;
    exchange: string;
    price: number;
    size: number;
    timestamp: string;
}

/**
 * @param ask	Ask Price
 * @param bid	Bid Price
 * @param exchange	Exchange this trade happened on
 * @param timestamp	Timestamp of this trade
*/
export class LastForexQuote {
    ask: number;
    bid: number;
    exchange: number;
    timestamp: number;
}

/**
 * @param price	Price of the trade
 * @param exchange	Exchange this trade happened on
 * @param timestamp	Timestamp of this trade
*/
export class LastForexTrade {
    price: number;
    exchange: number;
    timestamp: number;
}

/**
 * @param askprice	Ask Price
 * @param asksize	Ask Size
 * @param askexchange	Exchange the ask happened on
 * @param bidprice	Bid Price
 * @param bidsize	Bid Size
 * @param bidexchange	Exchange the bid happened on
 * @param timestamp	Timestamp of this trade
*/
export class LastQuote {
    askprice: number;
    asksize: number;
    askexchange: number;
    bidprice: number;
    bidsize: number;
    bidexchange: number;
    timestamp: number;
}

/**
 * @param price	Price of the trade
 * @param size	Size of this trade
 * @param exchange	Exchange this trade happened on
 * @param cond1	Condition 1 of the trade
 * @param cond2	Condition 2 of the trade
 * @param cond3	Condition 3 of the trade
 * @param cond4	Condition 4 of the trade
 * @param timestamp	Timestamp of this trade
*/
export class LastTrade {
    price: number;
    size: number;
    exchange: number;
    cond1: number;
    cond2: number;
    cond3: number;
    cond4: number;
    timestamp: number;
}

/**
 * @param exchange	Which market this record is for
 * @param name	Human readable description of the holiday
 * @param status	Status of the market on this holiday
 * @param date	Date of this holiday
 * @param open?	Market open time on this holiday ( if it's not closed )
 * @param close?	Market close time on this holiday ( if it's not closed )
*/
export class MarketHoliday {
    exchange: MarketHoliday.ExchangeEnum;
    name: string;
    status: MarketHoliday.StatusEnum;
    date: Date;
    open?: Date;
    close?: Date;
}

export namespace MarketHoliday {
    export enum ExchangeEnum {
        NYSE = <any> 'NYSE',
        NASDAQ = <any> 'NASDAQ',
        OTC = <any> 'OTC'
    }
    export enum StatusEnum {
        Closed = <any> 'closed',
        EarlyClose = <any> 'early-close',
        LateClose = <any> 'late-close',
        EarlyOpen = <any> 'early-open',
        LateOpen = <any> 'late-open'
    }
}

/**
 * @param market	Status of the market as a whole
 * @param serverTime	Current time of the server
*/
export class MarketStatus {
    market: MarketStatus.MarketEnum;
    serverTime: Date;
    exchanges: MarketStatusExchanges;
    currencies?: MarketStatusCurrencies;
}

export namespace MarketStatus {
    export enum MarketEnum {
        Open = <any> 'open',
        Closed = <any> 'closed',
        ExtendedHours = <any> 'extended-hours'
    }
}

/**
 * @param fx?	Status of the forex market
 * @param crypto?	Status of the crypto market
*/
export class MarketStatusCurrencies {
    fx?: MarketStatusCurrencies.FxEnum;
    crypto?: MarketStatusCurrencies.CryptoEnum;
}

export namespace MarketStatusCurrencies {
    export enum FxEnum {
        Open = <any> 'open',
        Closed = <any> 'closed'
    }
    export enum CryptoEnum {
        Open = <any> 'open',
        Closed = <any> 'closed'
    }
}

/**
 * @param nyse?	Status of the market as a whole
 * @param nasdaq?	Status of the market as a whole
 * @param otc?	Status of the market as a whole
*/
export class MarketStatusExchanges {
    nyse?: MarketStatusExchanges.NyseEnum;
    nasdaq?: MarketStatusExchanges.NasdaqEnum;
    otc?: MarketStatusExchanges.OtcEnum;
}

export namespace MarketStatusExchanges {
    export enum NyseEnum {
        Open = <any> 'open',
        Closed = <any> 'closed',
        ExtendedHours = <any> 'extended-hours'
    }
    export enum NasdaqEnum {
        Open = <any> 'open',
        Closed = <any> 'closed',
        ExtendedHours = <any> 'extended-hours'
    }
    export enum OtcEnum {
        Open = <any> 'open',
        Closed = <any> 'closed',
        ExtendedHours = <any> 'extended-hours'
    }
}
export class ModelError {
    code?: number;
    message?: string;
    fields?: string;
}

/**
 * @param title	Name of the article
 * @param url	URL of this article
 * @param source	Source of this article
 * @param summary	Short summary of the article
 * @param image?	URL of the image for this article, if found
 * @param timestamp	Timestamp of the article
*/
export class News {
    symbols: Array<StockSymbol>;
    title: string;
    url: string;
    source: string;
    summary: string;
    image?: string;
    timestamp: Date;
    keywords?: Array<string>;
}

/**
 * @param c	Condition of this quote
 * @param bE	Bid Exchange
 * @param aE	Ask Exchange
 * @param aP	Ask Price
 * @param bP	Bid Price
 * @param bS	Bid Size
 * @param aS	Ask Size
 * @param t	Timestamp of this trade
*/
export class Quote {
    c: number;
    bE: string;
    aE: string;
    aP: number;
    bP: number;
    bS: number;
    aS: number;
    t: number;
}

/**
 * @param current	Analyst Rating at current month
 * @param month1	Analyst Ratings at 1 month in the future
 * @param month2	Analyst Ratings at 2 month in the future
 * @param month3	Analyst Ratings at 3 month in the future
 * @param month4?	Analyst Ratings at 4 month in the future
 * @param month5?	Analyst Ratings at 5 month in the future
*/
export class RatingSection {
    current: number;
    month1: number;
    month2: number;
    month3: number;
    month4?: number;
    month5?: number;
}

/**
 * Symbol split
 *
 * @param exDate	Execution date of the split
 * @param paymentDate	Payment date of the split
 * @param recordDate?	Payment date of the split
 * @param declaredDate?	Payment date of the split
 * @param ratio	refers to the split ratio. The split ratio is an inverse of the number of shares that a holder of the stock would have after the split divided by the number of shares that the holder had before. <br/> For example: Split ratio of .5 = 2 for 1 split. 
 * @param tofactor	To factor of the split. Used to calculate the split ratio forfactor/tofactor = ratio (eg ½ = 0.5) 
 * @param forfactor	For factor of the split. Used to calculate the split ratio forfactor/tofactor = ratio (eg ½ = 0.5) 
*/
export class Split {
    ticker: TickerSymbol;
    exDate: Date;
    paymentDate: Date;
    recordDate?: Date;
    declaredDate?: Date;
    ratio: number;
    tofactor: number;
    forfactor: number;
}

/**
 * An actual exchange symbol this item is traded under.
*/
export class StockSymbol {
}

export class StocksSnapshotAgg extends SnapshotBase {
}

/**
 * @param p	Price of this book level
 * @param x	Exchange to Size of this price level
*/
export class StocksSnapshotBookItem {
    p: number;
    x: any;
}

/**
 * @param todaysChange	Value of the change from previous day
 * @param todaysChangePerc	Percentage change since previous day
 * @param updated	Last Updated timestamp
*/
export class StocksSnapshotTicker {
    ticker: string;
    day: StocksSnapshotAgg;
    lastTrade: Trade;
    min: StocksSnapshotAgg;
    prevDay: StocksSnapshotAgg;
    todaysChange: number;
    todaysChangePerc: number;
    updated: number;
}

/**
 * @param ticker	Ticker of the object
 * @param bids?	Bids
 * @param asks?	Asks
 * @param bidCount?	Combined total number of bids in the book
 * @param askCount?	Combined total number of asks in the book
 * @param spread?	Difference between the best bid and the best ask price accross exchanges
 * @param updated	Last Updated timestamp
*/
export class StocksSnapshotTickerBook {
    ticker: string;
    bids?: Array<StocksSnapshotBookItem>;
    asks?: Array<StocksSnapshotBookItem>;
    bidCount?: number;
    askCount?: number;
    spread?: number;
    updated: number;
}

/**
 * @param name	Name of the item.
 * @param type	Type of symbol this is. See symbol types.
 * @param url	URL of this symbol. Use this to get this symbols endpoints.
 * @param updated	Last time this company record was updated.
 * @param isOTC	If the symbol is listed on the OTC Markets.
*/
export class Symbol {
    symbol: StockSymbol;
    name: string;
    type: string;
    url: string;
    updated: Date;
    isOTC: boolean;
}

export class SymbolTypeMap {
}

/**
 * @param name	Name of the item.
 * @param market	The market in which this ticker participates
 * @param locale	Locale of where this ticker is traded
 * @param currency?	Currency this ticker is traded in
 * @param active?	If the ticker is active. False means the ticker has been delisted
 * @param primaryExch?	The listing exchange for this ticker
 * @param url?	URL of this ticker. Use this to get more information about the ticker.
 * @param updated	Last time this ticker record was updated.
 * @param attrs?	Additional details about this ticker. No schema.
*/
export class Ticker {
    ticker: StockSymbol;
    name: string;
    market: string;
    locale: string;
    currency?: string;
    active?: boolean;
    primaryExch?: string;
    url?: string;
    updated: Date;
    attrs?: any;
    codes?: TickerCodes;
}

/**
 * Additional details about this ticker. No schema.
 *
 * @param cik?	CIK number for this ticker
 * @param figi?	OpenFIGI number for this ticker
 * @param cfigi?	Composite OpenFIGI number for this ticker
 * @param scfigi?	Shared Class OpenFIGI number for this ticker
 * @param figiuid?	Unique OpenFIGI ID number for this ticker
*/
export class TickerCodes {
    cik?: string;
    figi?: string;
    cfigi?: string;
    scfigi?: string;
    figiuid?: string;
}

/**
 * An actual exchange traded ticker.
*/
export class TickerSymbol {
}

/**
 * @param c1	Condition 1 of this trade
 * @param c2	Condition 2 of this trade
 * @param c3	Condition 3 of this trade
 * @param c4	Condition 4 of this trade
 * @param e	The exchange this trade happened on
 * @param p	Price of the trade
 * @param s	Size of the trade
 * @param t	Timestamp of this trade
*/
export class Trade {
    c1: number;
    c2: number;
    c3: number;
    c4: number;
    e: string;
    p: number;
    s: number;
    t: number;
}