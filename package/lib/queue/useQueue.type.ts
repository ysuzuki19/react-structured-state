/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

export declare namespace QueueActionMethods {
  export interface setState<T> {
    (vals: T[]): void;
  }

  export interface Push<T> {
    (val: T, ...vals: T[]): void;
  }

  export interface Pop {
    (count?: number): void;
  }

  export interface Concat<T> {
    (vals: T[]): void;
  }

  export interface Clear {
    (): void;
  }
}
