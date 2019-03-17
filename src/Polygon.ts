import axios from "axios";

interface QueryParameters {
  [key: string]: string | boolean | number;
}

const paramsToQuery = (params: QueryParameters): string => {
  let prefix = '?'
  let query = '';
  Object.keys(params).forEach(k => {
    query += `${prefix}${k}=${params[k]}`;
    if (prefix === '?') prefix = '&';
  });
  return query;
};

export default class polygon {
  private baseUrl : string = 'https://api.polygon.io';

  constructor(private apiKey: string) {
    this.apiKey = apiKey;
  }

  protected async get<T>(uri: string, ...params: Array<QueryParameters>): Promise<T> { // FIXME use keyof for params?
    const obj: QueryParameters = { apiKey: this.apiKey };
    const url = `${this.baseUrl}${uri}${paramsToQuery(Object.assign(obj, params))}`;
    return axios.get(url).then(res => {
      const result : T = res.data;
      return result;
    });
  }
};