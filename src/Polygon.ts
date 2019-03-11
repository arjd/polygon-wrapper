import {default as request} from "superagent";
import { Primitive } from "./types"

function paramToQuery(params: Array<Primitive>) {
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

  async get<T>(uri: string, params?: Array<Primitive>): Promise<T> {
    const response : Promise<T> = request.get(`${this.baseUrl}${uri}${paramToQuery([...params, this.apiKey])}`);

    return response;
  }
};