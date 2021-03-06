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
import { useSet, useRecoilSet } from './set';
import { useMap, useRecoilMap } from './map';

export { useArray, useRecoilArray };
export { useQueue, useRecoilQueue };
export { useSet, useRecoilSet };
export { useMap, useRecoilMap };

const StructuredState = {
  useArray,
  useRecoilArray,
  useQueue,
  useRecoilQueue,
  useSet,
  useRecoilSet,
  useMap,
  useRecoilMap,
};

export default StructuredState;
