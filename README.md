# protocol

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

[![CircleCI](https://circleci.com/gh/segmentio/protocol.svg?style=shield&circle-token=bd6919f47872352a28fc52fbb399c8669775df41)](https://circleci.com/gh/segmentio/protocol)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/protocol/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/protocol)

Testing component used to fake protocols from the browser. Overrides `window.location.protocol` properties with fake ones using `Object.defineProperty`, so it won't work on IE8. Probably a good thing to only use in testing.

## Installation

```js
$ npm install @segment/protocol
```

## API

### #protocol()

Returns the current protocol that the document is using

```js
protocol(); // 'http:'
```

### #protocol(protocol)

When supplied with an argument, sets a custom protocol for the document.

```js
protocol('chrome-extension:');
protocol(); // 'chrome-extension:'
```

### #http()

Sets the protocol to be `http`

```js
protocol();  // 'file:'
protocol.http();  // 'http:'
```

### #https()

Sets the protocol to be `https:`

```js
protocol();  // 'file:'
protocol.https();  // 'https:'
```

### #reset()

Resets the protocol to be whatever it was at page load.

```js
protocol('x:');
protocol.reset();
protocol(); // 'http:'
```
