import Polygon from "./src/Polygon"
import Meta from "./src/Meta"
import Reference from "./src/Reference"
import Stocks from "./src/Stocks"
import Forex from "./src/Forex"
import Indices from "./src/Indices"
import Crypto from "./src/Crypto"

export default class polygon extends Polygon {
  protected meta : Meta = new Meta();
  protected reference : Reference = new Reference();
  protected stocks : Stocks = new Stocks();
  protected forex : Forex = new Forex();
  protected indices : Indices = new Indices();
  protected crypto : Crypto = new Crypto();

  constructor(apiKey: string) {
    super(apiKey);
  }
}