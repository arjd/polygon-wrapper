import polygon from "./polygon"; // eslint-disable-line
import { LocaleEnum, MarketEnum } from "./types/polygon.enum"; // eslint-disable-line
import { ConvertedCurrency, ForexQuoteResponse, TickerSnapshot, SnapshotResponse, AggregateResponse, ExtendedAggregate, Historic } from "./types/polygon"; // eslint-disable-line

export default class Forex extends polygon {
  /**
   * Get historic ticks for a currency pair. Example for **USD/JPY** the from would be **USD** and to would be **JPY**. The date formatted like **2017-6-22** 
   * @summary Historic Forex Ticks
   * @param from From Symbol of the currency pair
   * @param to To Symbol of the currency pair
   * @param date Date/Day of the historic ticks to retreive
   * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
   * @param limit Limit the size of response, Max 10000
   */
  public async historicTick(from: string, to: string, date: string, offset: number, limit: number = 1000) : Promise<Historic<Forex>> {
    return this.get<Historic<Forex>>(`/v1/historic/forex/${from}/${to}/${date}`, { offset, limit });
    }

  /**
   * Convert currencies using the latest market conversion rates. Note than you can convert in both directions. For example USD->CAD or CAD->USD. 
   * @summary Real-time Currency Conversion
   * @param from From Symbol of the pair
   * @param to To Symbol of the pair
   * @param amount Amount we want to convert. With decimal
   * @param precision Decimal precision of the conversion. Defaults to 2 which is 2 decimal places accuracy.
   */
  public async currencyConversion(from: string, to: string, amount: number, precision: number = 2) : Promise<ConvertedCurrency> {
    return this.get<ConvertedCurrency>(`/v1/conversion/${from}/${to}`, { amount, precision });
    }

  /**
   * Get Last Quote Tick for a Currency Pair. 
   * @summary Last Quote for a Currency Pair
   * @param from From Symbol of the pair
   * @param to To Symbol of the pair
   */
  public async lastQuote(from: string, to: string) : Promise<ForexQuoteResponse> {
    return this.get<ForexQuoteResponse>(`/v1/last_quote/currencies/${from}/${to}`);
   }

  /**
   * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Grouped Daily
   * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
   * @param market Market of the aggregates ( See &#39;Markets&#39; API )
   * @param date To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async dailyOHLC(locale: LocaleEnum, market: MarketEnum, date: string, unadjusted: boolean = false) : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`, { unadjusted });
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
  public async aggregates(ticker: string, multiplier: number, timespan: string, from: string, to: string, unadjusted: boolean = false) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`, { unadjusted });
    }

  /**
   * See the current snapshot of the top 20 gainers of the day at the moment. 
   * @summary Snapshot - Gainers
   */
  public async gainers() : Promise<SnapshotResponse<TickerSnapshot>> {    
    return this.get<SnapshotResponse<TickerSnapshot>>(`/v2/snapshot/locale/global/markets/forex/gainers`);
  }

  /**
   * See the current snapshot of the top 20 losers of the day at the moment. 
   * @summary Snapshot - Losers
   */
  public async losers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>(`/v2/snapshot/locale/global/markets/forex/losers`);
    }

  /**
   * Snapshot allows you to see all tickers current minute aggregate, daily aggregate and last trade. As well as previous days aggregate and calculated change for today. 
   * ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Snapshot - All Tickers
   */
  public async tickers() : Promise<SnapshotResponse<TickerSnapshot>> {
    return this.get<SnapshotResponse<TickerSnapshot>>(`/v2/snapshot/locale/global/markets/forex/tickers`);
    }
 }