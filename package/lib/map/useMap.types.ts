/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

export declare namespace MapActionMethods {
  export interface setState<TK, TV> {
    (vals: Map<TK, TV>): void;
  }

  export interface Set<TK, TV> {
    (key: TK, val: TV): void;
  }

  export interface Clear {
    (): void;
  }

  export interface Delete<T> {
    (val: T): void;
  }
}

/**
 * @interface
 *
 * Mutable Action of Map
 */
export interface MapAction<TK, TV> {
  /**
   * @method
   * Map Setter
   */
  setState: MapActionMethods.setState<TK, TV>;
  set: MapActionMethods.Set<TK, TV>;
  clear: MapActionMethods.Clear;
  delete: MapActionMethods.Delete<TK>;
}
