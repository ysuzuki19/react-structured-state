/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

export declare namespace SetActionMethods {
  export interface setState<T> {
    (vals: Set<T>): void;
  }

  export interface Add<T> {
    (val: T, ...vals: T[]): void;
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
 * Mutable Action of Set
 */
export interface SetAction<T> {
  /**
   * @method
   * Set Setter
   */
  setState: SetActionMethods.setState<T>;
  add: SetActionMethods.Add<T>;
  clear: SetActionMethods.Clear;
  delete: SetActionMethods.Delete<T>;
}
