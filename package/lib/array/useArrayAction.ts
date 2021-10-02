/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { SetterOrUpdater } from 'recoil';

import { ArrayAction, ArrayActionMethods } from './useArray.types';

export type ArraySetter<T> =
  | React.Dispatch<React.SetStateAction<T[]>>
  | SetterOrUpdater<T[]>;

export function useArrayAction<T>(setState: ArraySetter<T>): ArrayAction<T> {
  const pushBack: ArrayActionMethods.PushBack<T> = (val, ...vals) => {
    setState((old) => [...old, val, ...vals]);
  };

  const pushFront: ArrayActionMethods.PushFront<T> = (val, ...vals) => {
    setState((old) => [val, ...vals, ...old]);
  };

  const insert: ArrayActionMethods.Insert<T> = (idx, val, ...vals) => {
    setState((old) => [...old.slice(0, idx), val, ...vals, ...old.slice(idx)]);
  };

  const concatBack: ArrayActionMethods.ConcatBack<T> = (vals) => {
    setState((old) => [...old, ...vals]);
  };

  const concatFront: ArrayActionMethods.ConcatFront<T> = (vals) => {
    setState((old) => [...vals, ...old]);
  };

  const popBack: ArrayActionMethods.PopBack = (count = 1) => {
    setState((old) => old.slice(0, old.length - count));
  };

  const popFront: ArrayActionMethods.PopFront = (count = 1) => {
    setState((old) => old.slice(count, old.length));
  };

  const defaultComparator: ArrayActionMethods.Comparator<T> = (a, b) => a < b;

  const sort: ArrayActionMethods.Sort<T> = (comparator = defaultComparator) => {
    setState((old) =>
      [...old].sort((c: T, d: T) => (comparator(c, d) ? -1 : 1))
    );
  };

  const reverse: ArrayActionMethods.Reverse = () => {
    setState((old) => [...old].reverse());
  };

  const slice: ArrayActionMethods.Slice = (start = 0, end) => {
    setState((old) => old.slice(start, end !== undefined ? end : old.length));
  };

  const splice: ArrayActionMethods.Splice<T> = (
    start,
    deleteCount,
    ...items: T[]
  ) => {
    setState((old) => {
      const arr = [...old];
      arr.splice(
        start,
        deleteCount !== undefined ? deleteCount : old.length,
        ...items
      );
      return arr;
    });
  };

  const map: ArrayActionMethods.Map<T> = (fn) => {
    setState((old) => old.map(fn));
  };

  const filter: ArrayActionMethods.Filter<T> = (fn) => {
    setState((old) => old.filter(fn));
  };

  const fill: ArrayActionMethods.Fill<T> = (value, start, end) => {
    setState((old) =>
      [...old].fill(
        value,
        start !== undefined ? start : 0,
        end !== undefined ? end : old.length
      )
    );
  };

  const chain: ArrayActionMethods.Chain<T> = (fn) => {
    setState((old) => fn([...old]));
  };

  const set: ArrayActionMethods.Set<T> = (idx, val) => {
    setState((old) => [...old].fill(val, idx, idx + 1));
  };

  const erase: ArrayActionMethods.Erase<T> = (val) => {
    setState((old) => old.filter((e) => e !== val));
  };

  const clear: ArrayActionMethods.Clear = () => {
    setState([]);
  };

  const action = {
    setState,
    pushBack,
    pushFront,
    insert,
    popBack,
    popFront,
    concatBack,
    concatFront,
    sort,
    reverse,
    slice,
    splice,
    filter,
    map,
    fill,
    chain,
    set,
    erase,
    clear,
  };

  return action;
}
