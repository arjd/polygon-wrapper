import Polygon from "./Polygon";
import { LocaleEnum, MarketEnum, TimespanEnum } from "./types.enum";
import { AggregateResponse, ExtendedAggregate } from "./types";

export default class Indices extends Polygon {
  /**
   * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Grouped Daily
   * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
   * @param market Market of the aggregates ( See &#39;Markets&#39; API )
   * @param date To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async dailyOHLC(locale: LocaleEnum, market: MarketEnum, date: string, unadjusted?: boolean) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`);
  }

  /**
   * Get the previous day close for the specified ticker 
   * @summary Previous Close
   * @param ticker Ticker symbol of the request
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async previousClose(ticker: string, unadjusted?: boolean) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/prev`);
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
  public async aggregates(ticker: string, multiplier: number, timespan: TimespanEnum, from: string, to: string, unadjusted?: boolean) : Promise<AggregateResponse<ExtendedAggregate>> {
    return this.get<AggregateResponse<ExtendedAggregate>>(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`)
  }
}