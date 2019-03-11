import Polygon from "./Polygon";
import { Exchange, Aggregate } from "./types.base";
import { AggregateResponse, ExtendedAggregate } from "./types";
import { TimespanEnum } from "./types.enum";

export default class Stocks extends Polygon {
  /**
   * Get historic quotes for a symbol. 
   * @summary Historic Quotes
   * @param symbol Symbol of the company to retrieve
   * @param date Date/Day of the historic ticks to retreive
   * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
   * @param limit Limit the size of response, Max 50000
   */

  public async historicalQuotes(symbol: string, date: string) : Promise<> {
    return this.get<>(`/v1/historic/quotes/${symbol}/${date}`);
  }

  /**
   * Get historic trades for a symbol. 
   * @summary Historic Trades
   * @param symbol Symbol of the company to retrieve
   * @param date Date/Day of the historic ticks to retreive
   * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
   * @param limit Limit the size of response, Max 50000
   */
  public async historicTrades(symbol: string, date: string) : Promise<> {
    return this.get<>(`/v1/historic/trades/${symbol}/${date}`);
  }

  /**
   * Get the last quote tick for a given stock. 
   * @summary Last Quote for a Symbol
   * @param symbol Symbol of the quote to get
   */
  public async lastQuote(symbol: string) : Promise<> {
    return this.get<>(`/v1/last_quote/stocks/${symbol}`);
  }

  /**
   * Get the last trade for a given stock. 
   * @summary Last Trade for a Symbol
   * @param symbol Symbol of the stock to get
   */
  public async lastTrade(symbol: string) : Promise<> {
    return this.get<>(`/v1/last/stocks/${symbol}`);
  }

  /**
   * The mappings for conditions on trades and quotes. 
   * @summary Condition Mappings
   * @param ticktype Ticker type we want mappings for 
   */
  public async configTickType(ticktype: 'trades' | 'quotes') : Promise<> { // TODO what is this endpoint
    return this.get<>(`/v1/meta/conditions/${ticktype}`);
  }

  /**
   * List of stock exchanges which are supported by Polygon.io 
   * @summary Exchanges
   */
  public async exchanges() : Promise<Array<Exchange>> {
    return this.get<Array<Exchange>>('/v1/meta/exchanges');
  }

  /**
   * Get the open, close and afterhours prices of a symbol on a certain date. 
   * @summary Daily Open / Close
   * @param symbol Symbol of the stock to get
   * @param date Date of the requested open/close
   */
  public async dailyOpenClose(symbol: string, date: string) : Promise<AggregateResponse<Aggregate>> {
    return this.get<AggregateResponse<Aggregate>>(`/v1/open-close/${symbol}/${date}`)
  }

  /**
   * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Grouped Daily
   * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
   * @param market Market of the aggregates ( See &#39;Markets&#39; API )
   * @param date To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async groupedDaily(locale: LocaleEnum, market: MarketEnum, date: string, unadjusted?: boolean) : Promise<> { // FIXME better name
    return this.get<>(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`);
  }

  /**
   * Get the previous day close for the specified ticker 
   * @summary Previous Close
   * @param ticker Ticker symbol of the request
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async previousClose(ticker: string, unadjusted?: boolean) {
    return this.get<>(`/v2/aggs/ticker/${ticker}/prev`);
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
  public async aggregates(ticker: string, multiplier: number, timespan: TimespanEnum, from: string, to: string, unadjusted?: boolean) {
    return this.get<>(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`);
  }

  /**
   * See the current snapshot of the top 20 gainers of the day at the moment. 
   * @summary Snapshot - Gainers
   */
  public async gainers() {
    return this.get<>('/v2/snapshot/locale/us/markets/stocks/gainers';)
  }

  /**
   * See the current snapshot of the top 20 losers of the day at the moment. 
   * @summary Snapshot - Losers
   */
  public async losers() {
    return this.get<>('/v2/snapshot/locale/us/markets/stocks/losers');
  }

  /**
   * Snapshot allows you to see all tickers current minute aggregate, daily aggregate and last trade. As well as previous days aggregate and calculated change for today.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Snapshot - All Tickers
   */
  public async tickers() {
    return this.get<>('/v2/snapshot/locale/us/markets/stocks/tickers');
  }

  /**
   * See the current snapshot of a single ticker 
   * @summary Snapshot - Single Ticker
   * @param ticker Ticker of the snapshot
   */
  public async snapshot(ticker: string) {
    return this.get<>(`/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}`);
  }
}
