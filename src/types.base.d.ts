/**
 * @param c	Close price
 * @param h	High price
 * @param l	Low price
 * @param o	Open price
 * @param v	Volume
 */
export class Snapshot {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}

/**
 * @param t	Timestamp of this aggregation
*/
export class Aggregate extends Snapshot {
  t: number;
}

/**
 * @param id	ID of the exchange
 * @param type	Type of exchange feed
 * @param market	Market data type this exchange contains ( crypto only currently )
 * @param name	Name of the exchange
 */
export class Exchange {
  id: number;
  type: string;
  market: string;
  name: string;
}