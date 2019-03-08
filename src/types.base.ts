/**
 * @param c	Close price
 * @param h	High price
 * @param l	Low price
 * @param o	Open price
 * @param v	Volume
 */
export class SnapshotBase {
  c: number;
  h: number;
  l: number;
  o: number;
  v: number;
}

/**
 * @param t	Timestamp of this aggregation
*/
export class AggregateBase extends SnapshotBase {
  t: number;
}