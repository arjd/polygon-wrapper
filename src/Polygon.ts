import axios from "axios";

function paramToQuery(params: Array<boolean | string | number>) {
    let query = `?${params.shift()}`;
    while (params) query += `&${params.shift()}`;
    return query;
}

export default class Polygon {
  protected baseUrl : string = 'https://api.polygon.io';
  private apiKey : string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  protected async get<T>(uri: string, params?: Array<boolean | string | number>): Promise<T> {
    const _params = params ? [...params, this.apiKey] : [this.apiKey];

    return axios.get(`${this.baseUrl}${uri}${paramToQuery(_params)}`); // FIXME
  }
};