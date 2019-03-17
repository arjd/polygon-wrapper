import polygon from "./polygon"; // eslint-disable-line
import { Exchange, AggregateResponse, ExtendedAggregate, Conditions, HistoricStockQuote, SnapshotResponse, TickerSnapshot, HistoricStockTrade, LastQuoteResponse, LastTradeResponse, StockOpenClose } from "./types/polygon"; // eslint-disable-line
import { LocaleEnum, MarketEnum, TimespanEnum } from "./types/polygon.enum"; // eslint-disable-line

export default class Stocks extends polygon {
  /**
   * Get historic quotes for a symbol. 
   * @summary Historic Quotes
   * @param symbol Symbol of the company to retrieve
   * @param date Date/Day of the historic ticks to retreive
   * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
   * @param limit Limit the size of response, Max 50000
   */

  public async historicalQuotes(symbol: string, date: string, offset: number, limit: number = 100) : Promise<HistoricStockQuote> {
    return this.get<HistoricStockQuote>(`/v1/historic/quotes/${symbol}/${date}`, { offset, limit });
  }

  /**
   * Get historic trades for a symbol. 
   * @summary Historic Trades
   * @param symbol Symbol of the company to retrieve
   * @param date Date/Day of the historic ticks to retreive
   * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
   * @param limit Limit the size of response, Max 50000
   */
  public async historicTrades(symbol: string, date: string, offset: number, limit: number = 100) : Promise<HistoricStockTrade> {
    return this.get<HistoricStockTrade>(`/v1/historic/trades/${symbol}/${date}`, { offset, limit });
    }

  /**
   * Get the last quote tick for a given stock. 
   * @summary Last Quote for a Symbol
   * @param symbol Symbol of the quote to get
   */
  public async lastQuote(symbol: string) : Promise<LastQuoteResponse> {
    return this.get<LastQuoteResponse>(`/v1/last_quote/stocks/${symbol}`);
    }

  /**
   * Get the last trade for a given stock. 
   * @summary Last Trade for a Symbol
   * @param symbol Symbol of the stock to get
   */
  public async lastTrade(symbol: string) : Promise<LastTradeResponse> {
    return this.get<LastTradeResponse>(`/v1/last/stocks/${symbol}`);
    }

  /**
   * The mappings for conditions on trades and quotes. 
   * @summary Condition Mappings
   * @param ticktype Ticker type we want mappings for 
   */
  public async conditionsMap(ticktype: 'trades' | 'quotes') : Promise<Conditions> {
    return this.get<Conditions>(`/v1/meta/conditions/${ticktype}`);
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
  public async dailyOpenClose(symbol: string, date: string) : Promise<StockOpenClose> {
    return this.get<StockOpenClose>(`/v1/open-close/${symbol}/${date}`)
  }

  /**
   * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Grouped Daily
   * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
   * @param market Market of the aggregates ( See &#39;Markets&#39; API )
   * @param date To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async groupedDaily(locale: LocaleEnum, market: MarketEnum, date: string, unadjusted: boolean = false) : Promise<AggregateResponse<ExtendedAggregate>> { // FIXME better name
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`, { unadjusted });
  }

  /**
   * Get the previous day close for the specified ticker 
   * @summary Previous Close
   * @param ticker Ticker symbol of the request
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async previousClose(ticker: string, unadjusted: boolean = false) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/prev`, { unadjusted });
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
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`, { unadjusted });
    }

  /**
   * See the current snapshot of the top 20 gainers of the day at the moment. 
   * @summary Snapshot - Gainers
   */
  public async gainers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>('/v2/snapshot/locale/us/markets/stocks/gainers');
    }

  /**
   * See the current snapshot of the top 20 losers of the day at the moment. 
   * @summary Snapshot - Losers
   */
  public async losers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>('/v2/snapshot/locale/us/markets/stocks/losers');
    }

  /**
   * Snapshot allows you to see all tickers current minute aggregate, daily aggregate and last trade. As well as previous days aggregate and calculated change for today.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Snapshot - All Tickers
   */
  public async tickers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>('/v2/snapshot/locale/us/markets/stocks/tickers');
    }

  /**
   * See the current snapshot of a single ticker 
   * @summary Snapshot - Single Ticker
   * @param ticker Ticker of the snapshot
   */
  public async snapshot(ticker: string) : Promise<TickerSnapshot> {
    return this.get<TickerSnapshot>(`/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}`);
    }
}
