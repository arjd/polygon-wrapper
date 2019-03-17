import polygon from "./polygon"; // eslint-disable-line
import { Endpoints, AnalystRatings, Company, Dividend, Earning, Financial, News } from "./types/polygon.d"; // eslint-disable-line

export default class Meta extends polygon {
  /**
   * Get the analyst ratings of the symbol company/entity. Ratings are from current date, up to 5months into the future. 
   * @summary Symbol Analyst Ratings
   * @param symbol Symbol we want analyst ratings for 
   */
  public async analystRating(symbol: string) : Promise<AnalystRatings> {
    return this.get<AnalystRatings>(`/v1/meta/symbols/${symbol}/analysts`);
  }

  /**
   * Get the details of the symbol company/entity. These are important details which offer an overview of the entity. Things like name, sector, description, logo and similar companies. 
   * @summary Symbol Details
   * @param symbol Symbol we want details for 
   */
  public async details(symbol: string) : Promise<Company> {
    return this.get<Company>(`/v1/meta/symbols/${symbol}/company`)
  }

  /**
   * Get the historical dividends for this symbol. 
   * @summary Symbol Dividends
   * @param symbol Symbol we want details for 
   */
  public async dividends(symbol: string) : Promise<Array<Dividend>> {
    return this.get<Array<Dividend>>(`/v1/meta/symbols/${symbol}/dividends`);
  }

  /**
   * Get the historical earnings for a company 
   * @summary Symbol Earnings
   * @param symbol Symbol we want details for 
   */
  public async earnings(symbol: string) : Promise<Array<Earning>> {
    return this.get<Array<Earning>>(`/v1/meta/symbols/${symbol}/earnings`);
  }

  /**
   * Get the historical financials for a company 
   * @summary Symbol Financials
   * @param symbol Symbol we want details for 
   */
  public async financials(symbol: string) : Promise<Array<Financial>> {
    return this.get<Array<Financial>>(`/v1/meta/symbols/${symbol}/financials`);
  }

  /**
   * Get gets the endpoints that are supported for a symbol. **Note:** The `endpoints` object is key/values of the endpoint name and url. These will almost always be the same of all symbols. 
   * @summary Symbol Endpoints
   * @param symbol Symbol we want the endpoint list for. 
   */
  public async endpoints(symbol: string) : Promise<Endpoints> {
    return this.get<Endpoints>(`/v1/meta/symbols/${symbol}`);
  }

  /**
   * Get news articles for this symbol. 
   * @summary Symbol News
   * @param symbol Symbol we want details for 
   * @param perpage How many items to be on each page during pagination. Max 50 
   * @param page Which page of results to return 
   */
  public async news(symbol: string) : Promise<Array<News>> {
    return this.get<Array<News>>(`/v1/meta/symbols/${symbol}/news`);
  }
}