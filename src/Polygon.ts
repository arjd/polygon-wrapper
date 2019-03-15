import axios from "axios";

interface QueryParameters {
  [key: string]: string | boolean | number;
}

const paramsToQuery = (params: QueryParameters): string => {
  var prefix = '?'
  var query = '';
  Object.keys(params).forEach(k => {
    query += `${prefix}${k}=${params[k]}`;
    if (prefix == '?') prefix = '&';
  });
  return query;
};

export default class polygon {
  private baseUrl : string = 'https://api.polygon.io';
  private apiKey : string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  protected async get<T>(uri: string, ...params: Array<QueryParameters>): Promise<T> {
    var obj: QueryParameters = { apiKey: this.apiKey };
    const url = `${this.baseUrl}${uri}${paramsToQuery(Object.assign(obj, params))}`;
    const responseP = axios.get(url).then(res => res.data);

    return responseP;
  }
};