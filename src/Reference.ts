import Polygon from "./Polygon";
import { MarketStatus, MarketHoliday, Locales, Markets, Splits, Ticker, TickerTypes } from "./types"

export default class Reference extends Polygon {
  /**
   * Current status of each market 
   * @summary Market Status
   */
  public async marketStatus() : Promise<MarketStatus> {
    return this.get<MarketStatus>('/v1/marketstatus/now');
  }

  /**
   * Get upcoming market holidays and their open/close times 
   * @summary Market Holidays
   */
  public async marketHolidays() : Promise<MarketHoliday> {
    return this.get<MarketHoliday>('/v1/marketstatus/upcoming');
  }

  /**
   * Get the list of currently supported locales 
   * @summary Locales
   */
  public async locales() : Promise<Locales> {
    return this.get<Locales>('/v2/reference/locales');
  }

  /**
   * Get the list of currently supported markets 
   * @summary Markets
   */
  public async markets() : Promise<Markets> {
    return this.get<Markets>('/v2/reference/markets');
  }
  /**
   * Get the historical splits for this symbol. 
   * @summary Splits
   * @param symbol Symbol we want details for 
   */
  public async historicalSplits(symbol: string) : Promise<Splits> {
    return this.get<Splits>(`/v2/reference/splits/${symbol}`);
  }

  /**
   * Query all ticker symbols which are supported by Polygon.io. This API includes Indices, Crypto, FX, and Stocks/Equities. 
   * @summary Tickers
   * @param sort Which field to sort by.  For desc place a &#x60;-&#x60; in front of the field name.  **Example:** - &#x60;?sort&#x3D;-ticker&#x60; to sort symbols Z-A - &#x60;?sort&#x3D;type&#x60; to sort symbols by type 
   * @param type If you want the results to only container a certain type.  **Example:** - &#x60;?type&#x3D;etp&#x60; to get all ETFs - &#x60;?type&#x3D;cs&#x60; to get all Common Stock&#39;s 
   * @param market Get tickers for a specific market  **Example:** - &#x60;?market&#x3D;stocks&#x60; to get all stock tickers - &#x60;?market&#x3D;indices&#x60; to get all index tickers 
   * @param locale Get tickers for a specific region/locale  **Example:** - &#x60;?locale&#x3D;us&#x60; to get all US tickers - &#x60;?locale&#x3D;g&#x60; to get all Global tickers 
   * @param search Search the name of tickers  **Example:** - &#x60;?search&#x3D;microsoft&#x60; Search tickers for microsoft 
   * @param perpage How many items to be on each page during pagination. Max 50 
   * @param page Which page of results to return 
   * @param active Filter for only active or inactive symbols 
   */
    public async allTickers() : Promise<Array<Ticker>> {
    return this.get<Array<Ticker>>('/v2/reference/tickers');
  }

  /**
   * Get the mapping of ticker types to descriptions / long names 
   * @summary Types Mapping
   */  
  public async tickerTypes() : Promise<TickerTypes> {
    return this.get<TickerTypes>('/v2/reference/types');
  }
}