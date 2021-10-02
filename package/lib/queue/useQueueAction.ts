/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { useArrayAction, ArraySetter } from '../array/useArrayAction';
import { QueueActionMethods } from './useQueue.type';

/**
 * @interface
 *
 * Mutable Action of Queue
 */
export interface QueueAction<T> {
  /**
   * @method
   * Queue Setter
   */
  setState: QueueActionMethods.setState<T>;

  /**
   * @method
   * push value(s) on back
   */
  push: QueueActionMethods.Push<T>;

  /**
   * @method
   * pop value(s) on front
   */
  pop: QueueActionMethods.Pop;

  /**
   * @method
   * push back from array
   */
  concat: QueueActionMethods.Concat<T>;

  /**
   * @method
   * clear queue
   */
  clear: QueueActionMethods.Clear;
}

export function useQueueAction<T>(setState: ArraySetter<T>): QueueAction<T> {
  const arrayAction = useArrayAction<T>(setState);

  const action = {
    setState: arrayAction.setState,
    push: arrayAction.pushBack,
    pop: arrayAction.popFront,
    concat: arrayAction.concatBack,
    clear: arrayAction.clear,
  };

  return action;
}
