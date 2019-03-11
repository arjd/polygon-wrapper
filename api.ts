
export class ForexCurrenciesApi {
  /**
     * Convert currencies using the latest market conversion rates. Note than you can convert in both directions. For example USD->CAD or CAD->USD. 
     * @summary Real-time Currency Conversion
     * @param from From Symbol of the pair
     * @param to To Symbol of the pair
     * @param amount Amount we want to convert. With decimal
     * @param precision Decimal precision of the conversion. Defaults to 2 which is 2 decimal places accuracy.
     */
  public v1ConversionFromToGet (from: string, to: string, amount?: number, precision?: number, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2005;  }> {
    const localVarPath = this.basePath + '/v1/conversion/{from}/{to}'
      .replace('{' + 'from' + '}', encodeURIComponent(String(from)))
      .replace('{' + 'to' + '}', encodeURIComponent(String(to)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new Error('Required parameter from was null or undefined when calling v1ConversionFromToGet.');
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new Error('Required parameter to was null or undefined when calling v1ConversionFromToGet.');
    }

    if (amount !== undefined) {
      localVarQueryParameters['amount'] = ObjectSerializer.serialize(amount, "number");
    }

    if (precision !== undefined) {
      localVarQueryParameters['precision'] = ObjectSerializer.serialize(precision, "number");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2005;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2005");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get historic ticks for a currency pair. Example for **USD/JPY** the from would be **USD** and to would be **JPY**. The date formatted like **2017-6-22** 
     * @summary Historic Forex Ticks
     * @param from From Symbol of the currency pair
     * @param to To Symbol of the currency pair
     * @param date Date/Day of the historic ticks to retreive
     * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
     * @param limit Limit the size of response, Max 10000
     */
  public v1HistoricForexFromToDateGet (from: string, to: string, date: string, offset?: number, limit?: number, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2004;  }> {
    const localVarPath = this.basePath + '/v1/historic/forex/{from}/{to}/{date}'
      .replace('{' + 'from' + '}', encodeURIComponent(String(from)))
      .replace('{' + 'to' + '}', encodeURIComponent(String(to)))
      .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new Error('Required parameter from was null or undefined when calling v1HistoricForexFromToDateGet.');
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new Error('Required parameter to was null or undefined when calling v1HistoricForexFromToDateGet.');
    }

    // verify required parameter 'date' is not null or undefined
    if (date === null || date === undefined) {
      throw new Error('Required parameter date was null or undefined when calling v1HistoricForexFromToDateGet.');
    }

    if (offset !== undefined) {
      localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
    }

    if (limit !== undefined) {
      localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2004;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2004");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get Last Quote Tick for a Currency Pair. 
     * @summary Last Quote for a Currency Pair
     * @param from From Symbol of the pair
     * @param to To Symbol of the pair
     */
  public v1LastQuoteCurrenciesFromToGet (from: string, to: string, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2006;  }> {
    const localVarPath = this.basePath + '/v1/last_quote/currencies/{from}/{to}'
      .replace('{' + 'from' + '}', encodeURIComponent(String(from)))
      .replace('{' + 'to' + '}', encodeURIComponent(String(to)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new Error('Required parameter from was null or undefined when calling v1LastQuoteCurrenciesFromToGet.');
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new Error('Required parameter to was null or undefined when calling v1LastQuoteCurrenciesFromToGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2006;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2006");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
     * @summary Grouped Daily
     * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
     * @param market Market of the aggregates ( See &#39;Markets&#39; API )
     * @param date To date
     * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
     */
  public v2AggsGroupedLocaleLocaleMarketMarketDateGet (locale: 'GLOBAL' | 'US' | 'GB' | 'CA' | 'NL' | 'GR' | 'SP' | 'DE' | 'BE' | 'DK' | 'FI' | 'IE' | 'PT' | 'IN' | 'MX' | 'FR' | 'CN' | 'CH' | 'SE', market: 'STOCKS' | 'CRYPTO' | 'BONDS' | 'MF' | 'MMF' | 'INDICES' | 'FX', date: string, unadjusted?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: AggResponse;  }> {
    const localVarPath = this.basePath + '/v2/aggs/grouped/locale/{locale}/market/{market}/{date}'
      .replace('{' + 'locale' + '}', encodeURIComponent(String(locale)))
      .replace('{' + 'market' + '}', encodeURIComponent(String(market)))
      .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'locale' is not null or undefined
    if (locale === null || locale === undefined) {
      throw new Error('Required parameter locale was null or undefined when calling v2AggsGroupedLocaleLocaleMarketMarketDateGet.');
    }

    // verify required parameter 'market' is not null or undefined
    if (market === null || market === undefined) {
      throw new Error('Required parameter market was null or undefined when calling v2AggsGroupedLocaleLocaleMarketMarketDateGet.');
    }

    // verify required parameter 'date' is not null or undefined
    if (date === null || date === undefined) {
      throw new Error('Required parameter date was null or undefined when calling v2AggsGroupedLocaleLocaleMarketMarketDateGet.');
    }

    if (unadjusted !== undefined) {
      localVarQueryParameters['unadjusted'] = ObjectSerializer.serialize(unadjusted, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: AggResponse;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AggResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the previous day close for the specified ticker 
     * @summary Previous Close
     * @param ticker Ticker symbol of the request
     * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
     */
  public v2AggsTickerTickerPrevGet (ticker: string, unadjusted?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: AggResponse;  }> {
    const localVarPath = this.basePath + '/v2/aggs/ticker/{ticker}/prev'
      .replace('{' + 'ticker' + '}', encodeURIComponent(String(ticker)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'ticker' is not null or undefined
    if (ticker === null || ticker === undefined) {
      throw new Error('Required parameter ticker was null or undefined when calling v2AggsTickerTickerPrevGet.');
    }

    if (unadjusted !== undefined) {
      localVarQueryParameters['unadjusted'] = ObjectSerializer.serialize(unadjusted, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: AggResponse;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AggResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
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
  public v2AggsTickerTickerRangeMultiplierTimespanFromToGet (ticker: string, multiplier: number, timespan: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year', from: string, to: string, unadjusted?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: AggResponse;  }> {
    const localVarPath = this.basePath + '/v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}'
      .replace('{' + 'ticker' + '}', encodeURIComponent(String(ticker)))
      .replace('{' + 'multiplier' + '}', encodeURIComponent(String(multiplier)))
      .replace('{' + 'timespan' + '}', encodeURIComponent(String(timespan)))
      .replace('{' + 'from' + '}', encodeURIComponent(String(from)))
      .replace('{' + 'to' + '}', encodeURIComponent(String(to)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'ticker' is not null or undefined
    if (ticker === null || ticker === undefined) {
      throw new Error('Required parameter ticker was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'multiplier' is not null or undefined
    if (multiplier === null || multiplier === undefined) {
      throw new Error('Required parameter multiplier was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'timespan' is not null or undefined
    if (timespan === null || timespan === undefined) {
      throw new Error('Required parameter timespan was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new Error('Required parameter from was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new Error('Required parameter to was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    if (unadjusted !== undefined) {
      localVarQueryParameters['unadjusted'] = ObjectSerializer.serialize(unadjusted, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: AggResponse;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AggResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * See the current snapshot of the top 20 gainers of the day at the moment. 
     * @summary Snapshot - Gainers
     */
  public v2SnapshotLocaleGlobalMarketsForexGainersGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/global/markets/forex/gainers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2007");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * See the current snapshot of the top 20 losers of the day at the moment. 
     * @summary Snapshot - Losers
     */
  public v2SnapshotLocaleGlobalMarketsForexLosersGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/global/markets/forex/losers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2007");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Snapshot allows you to see all tickers current minute aggregate, daily aggregate and last trade. As well as previous days aggregate and calculated change for today.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
     * @summary Snapshot - All Tickers
     */
  public v2SnapshotLocaleGlobalMarketsForexTickersGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/global/markets/forex/tickers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2007;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2007");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
}

export class ReferenceApi {
  /**
     * Current status of each market 
     * @summary Market Status
     */
  public v1MarketstatusNowGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: MarketStatus;  }> {
    const localVarPath = this.basePath + '/v1/marketstatus/now';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: MarketStatus;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "MarketStatus");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get upcoming market holidays and their open/close times 
     * @summary Market Holidays
     */
  public v1MarketstatusUpcomingGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: Array<MarketHoliday>;  }> {
    const localVarPath = this.basePath + '/v1/marketstatus/upcoming';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<MarketHoliday>;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<MarketHoliday>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the list of currently supported locales 
     * @summary Locales
     */
  public v2ReferenceLocalesGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
    const localVarPath = this.basePath + '/v2/reference/locales';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2001");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the list of currently supported markets 
     * @summary Markets
     */
  public v2ReferenceMarketsGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
    const localVarPath = this.basePath + '/v2/reference/markets';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2001");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the historical splits for this symbol. 
     * @summary Splits
     * @param symbol Symbol we want details for 
     */
  public v2ReferenceSplitsSymbolGet (symbol: string, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }> {
    const localVarPath = this.basePath + '/v2/reference/splits/{symbol}'
      .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'symbol' is not null or undefined
    if (symbol === null || symbol === undefined) {
      throw new Error('Required parameter symbol was null or undefined when calling v2ReferenceSplitsSymbolGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2003");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
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
  public v2ReferenceTickersGet (sort?: string, type?: string, market?: 'STOCKS' | 'INDICES' | 'CRYPTO' | 'FX' | 'BONDS' | 'MF' | 'MMF', locale?: string, search?: string, perpage?: number, page?: number, active?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: Array<Symbol>;  }> {
    const localVarPath = this.basePath + '/v2/reference/tickers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    if (sort !== undefined) {
      localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "string");
    }

    if (type !== undefined) {
      localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
    }

    if (market !== undefined) {
      localVarQueryParameters['market'] = ObjectSerializer.serialize(market, "'STOCKS' | 'INDICES' | 'CRYPTO' | 'FX' | 'BONDS' | 'MF' | 'MMF'");
    }

    if (locale !== undefined) {
      localVarQueryParameters['locale'] = ObjectSerializer.serialize(locale, "string");
    }

    if (search !== undefined) {
      localVarQueryParameters['search'] = ObjectSerializer.serialize(search, "string");
    }

    if (perpage !== undefined) {
      localVarQueryParameters['perpage'] = ObjectSerializer.serialize(perpage, "number");
    }

    if (page !== undefined) {
      localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
    }

    if (active !== undefined) {
      localVarQueryParameters['active'] = ObjectSerializer.serialize(active, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<Symbol>;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Symbol>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the mapping of ticker types to descriptions / long names 
     * @summary Types Mapping
     */
  public v2ReferenceTypesGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }> {
    const localVarPath = this.basePath + '/v2/reference/types';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2002");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
}

export class StocksEquitiesApi {
  protected _basePath = defaultBasePath;
  protected defaultHeaders : any = {};
  protected _useQuerystring : boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    apiKey: new ApiKeyAuth('query', 'apiKey'),
  }

  constructor(basePath?: string);
  constructor(basePathOrUsername: string, password?: string, basePath?: string) {
    if (password) {
      if (basePath) {
                this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
                this.basePath = basePathOrUsername
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
	this.authentications.default = auth;
  }

  public setApiKey(key: StocksEquitiesApiApiKeys, value: string) {
    (this.authentications as any)[StocksEquitiesApiApiKeys[key]].apiKey = value;
  }
  /**
     * Get historic quotes for a symbol. 
     * @summary Historic Quotes
     * @param symbol Symbol of the company to retrieve
     * @param date Date/Day of the historic ticks to retreive
     * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
     * @param limit Limit the size of response, Max 50000
     */
  public v1HistoricQuotesSymbolDateGet (symbol: string, date: string, offset?: number, limit?: number, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2009;  }> {
    const localVarPath = this.basePath + '/v1/historic/quotes/{symbol}/{date}'
      .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)))
      .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'symbol' is not null or undefined
    if (symbol === null || symbol === undefined) {
      throw new Error('Required parameter symbol was null or undefined when calling v1HistoricQuotesSymbolDateGet.');
    }

    // verify required parameter 'date' is not null or undefined
    if (date === null || date === undefined) {
      throw new Error('Required parameter date was null or undefined when calling v1HistoricQuotesSymbolDateGet.');
    }

    if (offset !== undefined) {
      localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
    }

    if (limit !== undefined) {
      localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2009;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2009");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get historic trades for a symbol. 
     * @summary Historic Trades
     * @param symbol Symbol of the company to retrieve
     * @param date Date/Day of the historic ticks to retreive
     * @param offset Timestamp offset, used for pagination. This is the offset at which to start the results. Using the &#x60;timestamp&#x60; of the last result as the offset will give you the next page of results. 
     * @param limit Limit the size of response, Max 50000
     */
  public v1HistoricTradesSymbolDateGet (symbol: string, date: string, offset?: number, limit?: number, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse2008;  }> {
    const localVarPath = this.basePath + '/v1/historic/trades/{symbol}/{date}'
      .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)))
      .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'symbol' is not null or undefined
    if (symbol === null || symbol === undefined) {
      throw new Error('Required parameter symbol was null or undefined when calling v1HistoricTradesSymbolDateGet.');
    }

    // verify required parameter 'date' is not null or undefined
    if (date === null || date === undefined) {
      throw new Error('Required parameter date was null or undefined when calling v1HistoricTradesSymbolDateGet.');
    }

    if (offset !== undefined) {
      localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
    }

    if (limit !== undefined) {
      localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse2008;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse2008");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the last quote tick for a given stock. 
     * @summary Last Quote for a Symbol
     * @param symbol Symbol of the quote to get
     */
  public v1LastQuoteStocksSymbolGet (symbol: string, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20011;  }> {
    const localVarPath = this.basePath + '/v1/last_quote/stocks/{symbol}'
      .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'symbol' is not null or undefined
    if (symbol === null || symbol === undefined) {
      throw new Error('Required parameter symbol was null or undefined when calling v1LastQuoteStocksSymbolGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20011;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20011");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the last trade for a given stock. 
     * @summary Last Trade for a Symbol
     * @param symbol Symbol of the stock to get
     */
  public v1LastStocksSymbolGet (symbol: string, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20010;  }> {
    const localVarPath = this.basePath + '/v1/last/stocks/{symbol}'
      .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'symbol' is not null or undefined
    if (symbol === null || symbol === undefined) {
      throw new Error('Required parameter symbol was null or undefined when calling v1LastStocksSymbolGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20010;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20010");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * The mappings for conditions on trades and quotes. 
     * @summary Condition Mappings
     * @param ticktype Ticker type we want mappings for 
     */
  public v1MetaConditionsTicktypeGet (ticktype: 'trades' | 'quotes', options: any = {}) : Promise<{ response: http.ClientResponse; body: ConditionTypeMap;  }> {
    const localVarPath = this.basePath + '/v1/meta/conditions/{ticktype}'
      .replace('{' + 'ticktype' + '}', encodeURIComponent(String(ticktype)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'ticktype' is not null or undefined
    if (ticktype === null || ticktype === undefined) {
      throw new Error('Required parameter ticktype was null or undefined when calling v1MetaConditionsTicktypeGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: ConditionTypeMap;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "ConditionTypeMap");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * List of stock exchanges which are supported by Polygon.io 
     * @summary Exchanges
     */
  public v1MetaExchangesGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: Array<Exchange>;  }> {
    const localVarPath = this.basePath + '/v1/meta/exchanges';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<Exchange>;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Exchange>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the open, close and afterhours prices of a symbol on a certain date. 
     * @summary Daily Open / Close
     * @param symbol Symbol of the stock to get
     * @param date Date of the requested open/close
     */
  public v1OpenCloseSymbolDateGet (symbol: string, date: string, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20012;  }> {
    const localVarPath = this.basePath + '/v1/open-close/{symbol}/{date}'
      .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)))
      .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'symbol' is not null or undefined
    if (symbol === null || symbol === undefined) {
      throw new Error('Required parameter symbol was null or undefined when calling v1OpenCloseSymbolDateGet.');
    }

    // verify required parameter 'date' is not null or undefined
    if (date === null || date === undefined) {
      throw new Error('Required parameter date was null or undefined when calling v1OpenCloseSymbolDateGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20012;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20012");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the daily OHLC for entire markets.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
     * @summary Grouped Daily
     * @param locale Locale of the aggregates ( See &#39;Locales&#39; API )
     * @param market Market of the aggregates ( See &#39;Markets&#39; API )
     * @param date To date
     * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
     */
  public v2AggsGroupedLocaleLocaleMarketMarketDateGet (locale: 'GLOBAL' | 'US' | 'GB' | 'CA' | 'NL' | 'GR' | 'SP' | 'DE' | 'BE' | 'DK' | 'FI' | 'IE' | 'PT' | 'IN' | 'MX' | 'FR' | 'CN' | 'CH' | 'SE', market: 'STOCKS' | 'CRYPTO' | 'BONDS' | 'MF' | 'MMF' | 'INDICES' | 'FX', date: string, unadjusted?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: AggResponse;  }> {
    const localVarPath = this.basePath + '/v2/aggs/grouped/locale/{locale}/market/{market}/{date}'
      .replace('{' + 'locale' + '}', encodeURIComponent(String(locale)))
      .replace('{' + 'market' + '}', encodeURIComponent(String(market)))
      .replace('{' + 'date' + '}', encodeURIComponent(String(date)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'locale' is not null or undefined
    if (locale === null || locale === undefined) {
      throw new Error('Required parameter locale was null or undefined when calling v2AggsGroupedLocaleLocaleMarketMarketDateGet.');
    }

    // verify required parameter 'market' is not null or undefined
    if (market === null || market === undefined) {
      throw new Error('Required parameter market was null or undefined when calling v2AggsGroupedLocaleLocaleMarketMarketDateGet.');
    }

    // verify required parameter 'date' is not null or undefined
    if (date === null || date === undefined) {
      throw new Error('Required parameter date was null or undefined when calling v2AggsGroupedLocaleLocaleMarketMarketDateGet.');
    }

    if (unadjusted !== undefined) {
      localVarQueryParameters['unadjusted'] = ObjectSerializer.serialize(unadjusted, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: AggResponse;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AggResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Get the previous day close for the specified ticker 
     * @summary Previous Close
     * @param ticker Ticker symbol of the request
     * @param unadjusted Set to true if the results should NOT be adjusted for splits. 
     */
  public v2AggsTickerTickerPrevGet (ticker: string, unadjusted?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: AggResponse;  }> {
    const localVarPath = this.basePath + '/v2/aggs/ticker/{ticker}/prev'
      .replace('{' + 'ticker' + '}', encodeURIComponent(String(ticker)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'ticker' is not null or undefined
    if (ticker === null || ticker === undefined) {
      throw new Error('Required parameter ticker was null or undefined when calling v2AggsTickerTickerPrevGet.');
    }

    if (unadjusted !== undefined) {
      localVarQueryParameters['unadjusted'] = ObjectSerializer.serialize(unadjusted, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: AggResponse;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AggResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
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
  public v2AggsTickerTickerRangeMultiplierTimespanFromToGet (ticker: string, multiplier: number, timespan: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year', from: string, to: string, unadjusted?: boolean, options: any = {}) : Promise<{ response: http.ClientResponse; body: AggResponse;  }> {
    const localVarPath = this.basePath + '/v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}'
      .replace('{' + 'ticker' + '}', encodeURIComponent(String(ticker)))
      .replace('{' + 'multiplier' + '}', encodeURIComponent(String(multiplier)))
      .replace('{' + 'timespan' + '}', encodeURIComponent(String(timespan)))
      .replace('{' + 'from' + '}', encodeURIComponent(String(from)))
      .replace('{' + 'to' + '}', encodeURIComponent(String(to)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'ticker' is not null or undefined
    if (ticker === null || ticker === undefined) {
      throw new Error('Required parameter ticker was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'multiplier' is not null or undefined
    if (multiplier === null || multiplier === undefined) {
      throw new Error('Required parameter multiplier was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'timespan' is not null or undefined
    if (timespan === null || timespan === undefined) {
      throw new Error('Required parameter timespan was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new Error('Required parameter from was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new Error('Required parameter to was null or undefined when calling v2AggsTickerTickerRangeMultiplierTimespanFromToGet.');
    }

    if (unadjusted !== undefined) {
      localVarQueryParameters['unadjusted'] = ObjectSerializer.serialize(unadjusted, "boolean");
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: AggResponse;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AggResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * See the current snapshot of the top 20 gainers of the day at the moment. 
     * @summary Snapshot - Gainers
     */
  public v2SnapshotLocaleUsMarketsStocksGainersGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20013;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/us/markets/stocks/gainers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20013;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20013");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * See the current snapshot of the top 20 losers of the day at the moment. 
     * @summary Snapshot - Losers
     */
  public v2SnapshotLocaleUsMarketsStocksLosersGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20013;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/us/markets/stocks/losers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20013;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20013");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * Snapshot allows you to see all tickers current minute aggregate, daily aggregate and last trade. As well as previous days aggregate and calculated change for today.  ### *** Warning, may cause browser to hang *** The response size is large, and sometimes will cause the browser prettyprint to crash. 
     * @summary Snapshot - All Tickers
     */
  public v2SnapshotLocaleUsMarketsStocksTickersGet (options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20013;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/us/markets/stocks/tickers';
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20013;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20013");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
  /**
     * See the current snapshot of a single ticker 
     * @summary Snapshot - Single Ticker
     * @param ticker Ticker of the snapshot
     */
  public v2SnapshotLocaleUsMarketsStocksTickersTickerGet (ticker: string, options: any = {}) : Promise<{ response: http.ClientResponse; body: InlineResponse20014;  }> {
    const localVarPath = this.basePath + '/v2/snapshot/locale/us/markets/stocks/tickers/{ticker}'
      .replace('{' + 'ticker' + '}', encodeURIComponent(String(ticker)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let localVarFormParams: any = {};

    // verify required parameter 'ticker' is not null or undefined
    if (ticker === null || ticker === undefined) {
      throw new Error('Required parameter ticker was null or undefined when calling v2SnapshotLocaleUsMarketsStocksTickersTickerGet.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.apiKey.applyToRequest(localVarRequestOptions);

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
                localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: InlineResponse20014;  }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "InlineResponse20014");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
      });
    });
  }
}
