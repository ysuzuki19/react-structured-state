/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { useArray, useRecoilArray } from './array';
import { useQueue, useRecoilQueue } from './queue';

export { useArray, useRecoilArray };
export { useQueue, useRecoilQueue };

const StructuredState = {
  useArray,
  useRecoilArray,
  useQueue,
  useRecoilQueue
};

export default StructuredState;
