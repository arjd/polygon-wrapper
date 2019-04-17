import superagent from 'superagent';
import { SuperAgentRequest } from 'superagent';
import Throttle from 'superagent-throttle'; // FIXME full type declarations for these modules
import RetryDelay from 'superagent-retry-delay';

RetryDelay(superagent);
const throttler = new Throttle({
  active: true,
  rate: 100,
  ratePer: 1000,
  concurrent: 2,
});

const request = (s: any): SuperAgentRequest => {
  return s.retry(2, 5000).use(throttler.plugin());
}

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
    const responseP = request(superagent.get(url)).then(res => res.body);

    return responseP;
  }
};