import Meta from "./Meta"
import Reference from "./Reference"
import Stocks from "./Stocks"
import Forex from "./Forex"
import Indices from "./Indices"
import Crypto from "./Crypto"

export default class Polygon {
  public meta : Meta;
  public reference : Reference;
  public stocks : Stocks;
  public forex : Forex;
  public indices : Indices;
  public crypto : Crypto;

  constructor(apiKey: string) {
    this.meta = new Meta(apiKey);
    this.reference = new Reference(apiKey);
    this.stocks = new Stocks(apiKey);
    this.forex = new Forex(apiKey);
    this.indices = new Indices(apiKey);
    this.crypto = new Crypto(apiKey);
  }
}