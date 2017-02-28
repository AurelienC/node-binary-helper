var chai = require('chai'),
expect = chai.expect,
bh = require('../lib/binary-helper');

describe('binary helper', () => {
  it('getLeftBCD', () => {
    var r = bh.getLeftBCD(1234);
    expect(r).to.eql(12);
  });

  it('getRightBCD', () => {
    var r = bh.getRightBCD(1234);
    expect(r).to.eql(34);
  });

  it('addLsbMsb', () => {
    var r = bh.addLsbMsb(52501, 1883);
    expect(r).to.eql(123456789);
  });

  it('charArrayToString', () => {
    var r = bh.charArrayToString([12609, 49]);
    expect(r).to.eql('A11');
  });
});
