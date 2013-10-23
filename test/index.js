
describe('protocol', function () {
  var assert = require('assert');
  var protocol = require('protocol');

  describe('#protocol()', function () {
    afterEach(protocol.reset);

    it('should get the current protocol', function () {
      assert(protocol() === 'file:');
      assert(window.location.protocol === protocol());
    });

    it('should set a new protocol', function () {
      protocol('x:');
      assert(protocol() === 'x:');
      assert(window.location.protocol === 'x:');
    });
  });

  describe('#https()', function () {
    after(protocol.reset);

    it('should set the protocol as https:', function () {
      assert(protocol() !== 'https:');
      protocol.https();
      assert(protocol() === 'https:');
      assert(window.location.protocol === protocol());
    });
  });

  describe('#http()', function () {
    after(protocol.reset);

    it('should set protocol as http:', function () {
      assert(protocol() !== 'http:');
      protocol.http();
      assert(protocol() === 'http:');
      assert(window.location.protocol === 'http:');
    });
  });

  describe('#reset()', function () {
    it('should reset to the initial protocol', function () {
      var initial = protocol();
      protocol('x:');
      protocol.reset();
      assert(protocol() === initial);
    });
  });
});