/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { SetterOrUpdater } from 'recoil';

import { SetAction, SetActionMethods } from './useSet.types';

export type SetSetter<T> =
  | React.Dispatch<React.SetStateAction<Set<T>>>
  | SetterOrUpdater<Set<T>>;

export function useSetAction<T>(setState: SetSetter<T>): SetAction<T> {
  const add: SetActionMethods.Add<T> = (val: T, ...vals: T[]) => {
    setState((old) => {
      old.add(val);
      for (const item of vals) {
        old.add(item);
      }
      return new Set<T>(old);
    });
  };

  const clear: SetActionMethods.Clear = () => {
    setState((old) => {
      old.clear();
      return new Set<T>(old);
    });
  };

  const deleteImpl: SetActionMethods.Delete<T> = (val: T) => {
    setState((old) => {
      old.delete(val);
      return new Set<T>(old);
    });
  };

  const action = {
    setState,
    add,
    clear,
    delete: deleteImpl,
  };

  return action;
}
