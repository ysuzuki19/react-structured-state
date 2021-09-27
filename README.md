# React Structured State

## About

If we use react state in react-hooks, code tends to be long and compilicated for updating array.

This package make your code simplly for update array state.

## Install

```bash
$ npm install react-structured-state
```

## Demo App

https://react-structured-state.web.app

Source code of Demo App is [here](https://github.com/ysuzuki19/react-structured-state/tree/main/demo)

## How to use

### Define

#### with normal(react hooks) state

```tsx
import { useArray } from 'react-structured-state';

const App = (): JSX.Element => {
  const [arr, actionArr] = useArray<number>([1, 2, 3]);
  return (
    ...
  )
}
```

#### with recoil state

```tsx
import { atom } from 'recoil';
import { useRecoilArray } from 'react-structured-state';

export const arrayState = atom({
  key: 'arrayState',
  default: [1, 2, 3],
});

const App = (): JSX.Element => {
  const [arr, actionArr] = useRecoilArray<number>(arrayState);
  return (
    ...
  )
}
```

### Use Case

#### push 10 to back

```tsx
// Before
setArr((oldarr) => [...oldarr, 10]);

// After
actionArr.pushBack(10);
```

#### double all elements

```tsx
// Before
setArr((oldarr) => oldarr.map((e) => e * 2));

// After
actionArr.map((e) => e * 2);
```

## Example

`useArray<T> / useRecoilArray<T>` return two values.

First value is `Array<T>` used for view array elements.

Second value is object of action like array methods (`map`, `filter`, ...). This is used for change value.

## API

| method      | action                               | args                      | args(optional)                    | default         |
| ----------- | ------------------------------------ | ------------------------- | --------------------------------- | --------------- |
| setState    | basic setState                       | T[]                       |                                   |                 |
| pushBack    | add value(s) on back                 | val: T                    | ... vals: T[]                     | none            |
| pushFront   | add value(s) on front                | val: T,                   | ...vals: T[]                      | none            |
| insert      | insert value                         | idx: number, val: T       | ...vals: T[]                      | none            |
| popBack     | remove value(s) on back              |                           | count: number                     | 1               |
| popFront    | remove value(s) on front             |                           | count: number                     | 1               |
| concatBack  | add elements of array on back        | vals: T[]                 |                                   |                 |
| concatFront | add elements of array on front       | vals: T[]                 |                                   |                 |
| sort        | sort with callback                   |                           | fn: (vals: T[]) => T[]            | (a, b) => a - b |
| reverse     | reverse elements                     |                           |                                   |                 |
| slice       | update values with slice()           |                           | start:number, end:number          | 0, length       |
| splice      | update values with splice()          | start:number              | deleteCount: number, ...vals: T[] | none, none      |
| filter      | update values with filter()          | fn:(vals: T[]) => boolean |                                   |                 |
| map         | update values with map()             | fn:(vals: T[]) => T[]     |                                   |                 |
| fill        | update values with fill()            | val: T                    | start: number, end:number         | 0, length       |
| chain       | update vlues with array method chain | fn: (vals:T[]) => T[]     |                                   |                 |
| set         | set value on specified index         | idx:number, val: T        |                                   |                 |
| erase       | erase element by specified value     | val:T                     |                                   |                 |
| clear       | clear all elements                   |                           |                                   |                 |
