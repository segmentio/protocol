
# protocol

  Testing component used to fake protocols from the browser. Overrides `window.location.protocol` properties with fake ones using `Object.defineProperty`, so it won't work on IE8. Probably a good thing to only use in testing.

## Installation

  Install with [component(1)](http://component.io):

    $ component install segmentio/protocol

## API

### #protocol();

  Returns the current protocol that the document is using

  ```js
  protocol(); // 'http:'
  ```

### #protocol(protocol);

  When supplied with an argument, sets a custom protocol for the document.

  ```js
  protocol('chrome-extension:');
  protocol(); // 'chrome-extension:'
  ```

### #http();

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

### protocol

## License

  MIT
