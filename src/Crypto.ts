import Polygon from "./Polygon";
import { CryptoExchange, CryptoHistoricPair, CryptoLastPair } from "./types";

export default class Crypto {
  private client : Polygon;

  constructor(client: Polygon) {
    this.client = client;
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
  // FIXME offset type
  // FIXME should async functions await a promise?
  public async historicPair(from: string, to: string, date: Date, offset?: number, limit?: number) : Promise<CryptoHistoricPair> {
    return this.client.get<CryptoHistoricPair>(`/v1/historic/crypto/${from}/${to}/${date.toISOString()}`);
  }

  /**
   * Get Last Trade Tick for a Currency Pair. 
   * @summary Last Trade for a Crypto Pair
   * @param from From Symbol of the pair
   * @param to To Symbol of the pair
   */
  public async lastPair(from: string, to: string) : Promise<CryptoLastPair> {
    return this.client.get<CryptoLastPair>(`/v1/last/crypto/${from}/${to}`);
  }

  /**
   * List of crypto currency exchanges which are supported by Polygon.io 
   * @summary Crypto Exchanges
   */
  public async exchanges() : Promise<Array<CryptoExchange>> {
    return this.client.get<Array<CryptoExchange>>(`/v1/meta/crypto-exchanges`)
  }

  /**
   * Get the open, close prices of a symbol on a certain day. 
   * @summary Daily Open / Close
   * @param from From Symbol of the pair
   * @param to To Symbol of the pair
   * @param date Date of the requested open/close
   * @param {*} [options] Override http request options.
   */
  public async openClosePair(from: string, to: string, date: Date) : Promise<T> {
    return this.client.get(`/v1/open-close/crypto/${from}/${to}/${date.toISOString()}`)
  }

  /**
   * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
   * @summary Grouped Daily
   * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
   * @param market Market of the aggregates ( See &#39;Markets&#39; API )
   * @param date To date
   * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
   */
  public async aggregatedByMarketOHLC(locale: 'GLOBAL' | 'US' | 'GB' | 'CA' | 'NL' | 'GR' | 'SP' | 'DE' | 'BE' | 'DK' | 'FI' | 'IE' | 'PT' | 'IN' | 'MX' | 'FR' | 'CN' | 'CH' | 'SE', market: 'STOCKS' | 'CRYPTO' | 'BONDS' | 'MF' | 'MMF' | 'INDICES' | 'FX', date: Date, unadjusted?: boolean) : Promise<AggregateResponse> {
    return this.client.get<AggregateResponse>(`/v2/aggs/grouped/locale/${locale}/market/{market}/${date.toISOString()}`);
  }
}