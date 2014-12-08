'use strict';

describe('mytodoApp.version module', function() {
  beforeEach(module('mytodoApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
