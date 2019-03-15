import polygon from "./polygon";
import { CryptoExchange, LastPair, OpenClose, CryptoBook,
  AggregateResponse, Historic, cryptoTrade, ExtendedAggregate, SnapshotResponse, TickerSnapshot,
} from "./types";
import { LocaleEnum, TimespanEnum } from "./types.enum";

export default class Crypto extends polygon {
  /**
   * Get the previous day close for the specified ticker 
   * @summary Previous Close
   * @param ticker Ticker symbol of the request
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async previousClose(ticker: string, unadjusted: boolean = false) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/prev`, { unadjusted: unadjusted });
  }

  /**
   * Get historic trade ticks for a crypto pair. 
   * @summary Historic Crypto Trades
   * @param from From Symbol of the crypto pair
   * @param to To Symbol of the crypto pair
   * @param date Date/Day of the historic ticks to retreive
   * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
   * @param limit Limit the size of response, Max 10000
   */
  public async historicTrade(from: string, to: string, date: Date, offset: number, limit: number = 100) : Promise<Historic<cryptoTrade>> {
    return this.get<Historic<cryptoTrade>>(`/v1/historic/crypto/${from}/${to}/${date.toISOString()}`, { offset: offset, limit: limit });
  }

  /**
   * Get Last Trade Tick for a Currency Pair. 
   * @summary Last Trade for a Crypto Pair
   * @param from From Symbol of the pair
   * @param to To Symbol of the pair
   */
  public async lastTrade(from: string, to: string) : Promise<LastPair> {
    return this.get<LastPair>(`/v1/last/crypto/${from}/${to}`);
  }

  /**
   * List of crypto currency exchanges which are supported by Polygon.io 
   * @summary Crypto Exchanges
   */
  public async exchanges() : Promise<Array<CryptoExchange>> {
    return this.get<Array<CryptoExchange>>(`/v1/meta/crypto-exchanges`)
  }

  /**
   * Get the open, close prices of a symbol on a certain day. 
   * @summary Daily Open / Close
   * @param from From Symbol of the pair
   * @param to To Symbol of the pair
   * @param date Date of the requested open/close
   */
  public async dailyOpenClose(from: string, to: string, date: Date) : Promise<OpenClose> {
    return this.get(`/v1/open-close/crypto/${from}/${to}/${date.toISOString()}`)
  }

  /**
   * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Grouped Daily
   * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
   * @param market Market of the aggregates ( See &#39;Markets&#39; API )
   * @param date To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async byMarketOHLC(locale: LocaleEnum, date: Date, unadjusted: boolean = false) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/grouped/locale/${locale}/market/{market}/${date.toISOString()}`, { unadjusted: unadjusted });
  }

  /**
   * Snapshot allows you to see all tickers current minute aggregate, daily aggregate and last trade. As well as previous days aggregate and calculated change for today.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Snapshot - All Tickers
   */
  public async allTickers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>('/v2/snapshot/locale/global/markets/crypto/tickers');
  }

  /**
   * See the current level 2 book of a single ticker. This is the combined book from all the exchanges. 
   * @summary Snapshot - Single Ticker Full Book ( L2 )
   * @param ticker Ticker of the snapshot
   */
  public async book(ticker: string) : Promise<SnapshotResponse<CryptoBook>> {
    return this.get<SnapshotResponse<CryptoBook>>(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}/book`);
  }

  /**
   * See the current snapshot of a single ticker 
   * @summary Snapshot - Single Ticker
   * @param ticker Ticker of the snapshot
   */
  public async snapshot(ticker: string) : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}`)
  }

  /**
   * See the current snapshot of the top 20 gainers of the day at the moment. 
   * @summary Snapshot - Gainers
   */
  public async gainers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>('/v2/snapshot/locale/global/markets/crypto/gainers');
  }

  /**
   * See the current snapshot of the top 20 losers of the day at the moment. 
   * @summary Snapshot - Losers
   */
  public async losers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>('/v2/snapshot/locale/global/markets/crypto/losers');
  }
  
  /**
   * Get aggregates for a date range, in custom time window sizes 
   * @summary Aggregates
   * @param ticker Ticker symbol of the request
   * @param multiplier Size of the timespan multiplier
   * @param timespan Size of the time window
   * @param from From date
   * @param to To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async aggregates(ticker: string, multiplier: number, timespan: TimespanEnum, from: string, to: string, unadjusted: boolean = false) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`, { unadjusted: unadjusted });
  }
}