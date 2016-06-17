'use strict';

var assert = require('proclaim');
var protocol = require('../lib');

// TODO(ndhoule): None of these tests worked previously
describe('protocol', function() {
  describe('#protocol()', function() {
    afterEach(protocol.reset);

    it('should get the current protocol', function() {
      assert(protocol() === 'http:');
      assert(protocol() === window.location.protocol);
    });

    xit('should set a new protocol', function() {
      protocol('x:');
      assert(protocol() === 'x:');
      assert(window.location.protocol === 'x:');
    });
  });

  describe('#https()', function() {
    after(protocol.reset);

    xit('should set the protocol as https:', function() {
      assert(protocol() !== 'https:');
      protocol.https();
      assert(protocol() === 'https:');
      assert(protocol() === window.location.protocol);
    });
  });

  describe('#http()', function() {
    after(protocol.reset);

    xit('should set protocol as http:', function() {
      assert(protocol() !== 'http:');
      protocol.http();
      assert(protocol() === 'http:');
      assert(window.location.protocol === 'http:');
    });
  });

  describe('#reset()', function() {
    xit('should reset to the initial protocol', function() {
      var initial = protocol();
      protocol('x:');
      protocol.reset();
      assert(protocol() === initial);
    });
  });
});
