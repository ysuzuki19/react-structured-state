# React Structured State

## About

If we use react state in react-hooks, code tends to be long and compilicated for updating data-structure.

This package make your code simplly for update data-structure state.

This package support following data structure.

- Array
- Queue
- Set
- Map

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

## Design of package

`useArray/useRecoilArray/useQueue/useRecoilQueue` return two values.

First value is used for view data.

Second value is object of action methods used for changing value.

## API

In this sction, `T` mean type of container.

### Array

Define action by following.

```ts
// with normal state
const [arr, actionArr] = useArray<number>([1, 2, 3]);

// with recoil state
const [arr, actionArr] = useRecoilArray<number>(arrayState);
```

In this case, methods of `actionArr` are following.

| method      | action                               | args                      | args(optional)                    | default         |
| ----------- | ------------------------------------ | ------------------------- | --------------------------------- | --------------- |
| setState    | basic setState                       | T[]                       |                                   |                 |
| pushBack    | add value(s) on back                 | val: T                    | ...vals: T[]                      | none            |
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

### Queue

Actually, Queue implementation in this library is alias of Array methods. So you can use `useArray` like quque.

But if you use `useQueue`, you can only use few methods. So you can write code that easy to understand (by expressly Queue).

Define action by following.

```ts
// actual type of state is Array

// with normal state
const [que, actionQue] = useQueue<number>([1, 2, 3]);

// with recoil state
const [que, actionQue] = useRecoilQueue<number>(queueState);
```

In this case, methods of `actionQue` are following.

| method   | action                        | args      | args(optional) | default |
| -------- | ----------------------------- | --------- | -------------- | ------- |
| setState | basic setState                | T[]       |                |         |
| push     | add value(s) on back          | val: T    | ...vals: T[]   | none    |
| pop      | remove value(s) on front      |           | count: number  | 1       |
| concat   | add elements of array on back | vals: T[] |                |         |
| clear    | clear all elements            |           |                |         |

### Set (HashSet)

```ts
// with normal state
const [st, actionSt] = useSet<number>([1, 2, 3]);

// with recoil state
const [st, actionSt] = useRecoilSet<number>(stState);
```

In this case, methods of `actionSt` are following.

| method   | action         | args   | args(optional) | default |
| -------- | -------------- | ------ | -------------- | ------- |
| setState | basic setState | Set<T> |                |         |
| add      | add key(s)     | val: T | ...vals: T[]   | none    |
| delete   | delete key     | val:T  |                |         |
| clear    | clear set      |        |                |         |

### Map (HashMap)

```ts
// with normal state
const [mp, actionMp] = useMap<string, number>([['a', 1]]);

// with recoil state
const [mp, actionMp] = useRecoilMap<string, number>(mpState);
```

In this case, methods of `actionSt` are following.

`TK` means type of key, `TV` means type of value.

| method   | action                | args             | args(optional) | default |
| -------- | --------------------- | ---------------- | -------------- | ------- |
| setState | basic setState        | Map<TK,TV>       |                |         |
| set      | add or update key/val | key: TK, val: TV |                |         |
| delete   | delete key/val        | key:TK           |                |         |
| clear    | clear all key/val     |                  |                |         |
