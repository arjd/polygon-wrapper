import Polygon from "./Polygon";
import { Endpoints } from "./types";

export default class Meta {
  private client : Polygon;

  constructor(client: Polygon) {
    this.client = client;
  }

  /**
   * Get the analyst ratings of the symbol company/entity. Ratings are from current date, up to 5months into the future. 
   * @summary Symbol Analyst Ratings
   * @param symbol Symbol we want analyst ratings for 
   */
  public async analystRating(symbol: string) : Promise<> {
    return this.client.get<>(`/v1/meta/symbols/${symbol}/analysts`);
  }

  /**
   * Get the details of the symbol company/entity. These are important details which offer an overview of the entity. Things like name, sector, description, logo and similar companies. 
   * @summary Symbol Details
   * @param symbol Symbol we want details for 
   */
  public async details(symbol: string) {
    return this.client.get<>(`/v1/meta/symbols/${symbol}/company`)
  }

  /**
   * Get the historical dividends for this symbol. 
   * @summary Symbol Dividends
   * @param symbol Symbol we want details for 
   */
  public async dividends(symbol: string) : Promise<> {
    return this.client.get<>(`/v1/meta/symbols/${symbol}/dividends`);
  }

  /**
   * Get the historical earnings for a company 
   * @summary Symbol Earnings
   * @param symbol Symbol we want details for 
   */
  public async earnings(symbol: string) : Promise<> {
    return this.client.get<>(`/v1/meta/symbols/${symbol}/earnings`);
  }

  /**
   * Get the historical financials for a company 
   * @summary Symbol Financials
   * @param symbol Symbol we want details for 
   */
  public async financials(symbol: string) : Promise<> {
    return this.get<>(`/v1/meta/symbols/${symbol}/financials`);
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
  public async news(symbol: string) : Promise<> {
    return this.get<>(`/v1/meta/symbols/${symbol}/news`);
  }
}