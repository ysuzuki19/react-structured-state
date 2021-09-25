export declare namespace ArrayActionMethods {
  export interface setState<T> {
    (vals: T[]): void;
  }

  export interface Insert<T> {
    (idx: number, val: T, ...vals: T[]): void;
  }

  export interface PushBack<T> {
    (val: T, ...vals: T[]): void;
  }

  export interface PushFront<T> {
    (val: T, ...vals: T[]): void;
  }

  export interface PopBack {
    (count?: number): void;
  }

  export interface PopFront {
    (count?: number): void;
  }

  export interface ConcatBack<T> {
    (vals: T[]): void;
  }

  export interface ConcatFront<T> {
    (vals: T[]): void;
  }

  export interface Comparator<T> {
    (a: T, b: T): boolean;
  }

  export interface Sort<T> {
    (comp?: Comparator<T>): void;
  }

  export interface Reverse {
    (): void;
  }

  export interface Slice {
    (start?: number, end?: number): void;
  }

  export interface Splice<T> {
    (start: number, deleteCount?: number, ...items: T[]): void;
  }

  export interface Map<T> {
    (fn: (value: T, index: number, array: T[]) => T): void;
  }

  export interface Filter<T> {
    (fn: (value: T, index: number, array: T[]) => boolean): void;
  }

  export interface Fill<T> {
    (value: T, start?: number, end?: number): void;
  }

  export interface Chain<T> {
    (fn: (old: T[]) => T[]): void;
  }

  export interface Set<T> {
    (idx: number, val: T): void;
  }

  export interface Erase<T> {
    (val: T): void;
  }

  export interface Clear {
    (): void;
  }
}

/**
 * @interface
 *
 * Mutable Action of Array
 */
export interface ArrayAction<T> {
  /**
   * @method
   * Array Setter
   */
  setState: ArrayActionMethods.setState<T>;

  /**
   * @method
   * push value(s) on back
   */
  pushBack: ArrayActionMethods.PushBack<T>;

  /**
   * @method
   * push value(s) on front
   */
  pushFront: ArrayActionMethods.PushFront<T>;

  /**
   * @method
   * insert value(s) on specified index
   */
  insert: ArrayActionMethods.Insert<T>;

  /**
   * @method
   * pop value(s) on back
   */
  popBack: ArrayActionMethods.PopBack;

  /**
   * @method
   * pop value(s) on front
   */
  popFront: ArrayActionMethods.PopFront;

  /**
   * @method
   * push array on back
   */
  concatBack: ArrayActionMethods.ConcatBack<T>;

  /**
   * @method
   * push array on front
   */
  concatFront: ArrayActionMethods.ConcatFront<T>;

  /**
   * @method
   * sort array
   * @param comperator (optional)
   */
  sort: ArrayActionMethods.Sort<T>;

  /**
   * @method
   * reverse array
   */
  reverse: ArrayActionMethods.Reverse;

  /**
   * @method
   * replace array to sliced array
   */
  slice: ArrayActionMethods.Slice;

  /**
   * @method
   * replace array to spliced array
   */
  splice: ArrayActionMethods.Splice<T>;

  /**
   * @method
   * replace array to mapped array
   */
  filter: ArrayActionMethods.Filter<T>;

  /**
   * @method
   * replace array to mapped array
   */
  map: ArrayActionMethods.Map<T>;

  /**
   * @method
   * replace array to filled array
   */
  fill: ArrayActionMethods.Fill<T>;

  /**
   * @method
   * replace array to result of method chain
   */
  chain: ArrayActionMethods.Chain<T>;

  /**
   * @method
   * replace array to input array
   */
  set: ArrayActionMethods.Set<T>;

  /**
   * @method
   * erase element of specified value
   */
  erase: ArrayActionMethods.Erase<T>;

  /**
   * @method
   * clear array
   */
  clear: ArrayActionMethods.Clear;
}
