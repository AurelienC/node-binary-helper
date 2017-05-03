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

  it('setBCD', () => {
    var r = bh.setBCD(12, 34);
    expect(r).to.eql(1234);
  });

  it('setMsbLsb', () => {
    var r = bh.setMsbLsb(0x25, 0x83);
    expect(r).to.eql(0x2583);
  });

  it('setMsbLsbDouble', () => {
    var r = bh.setMsbLsbDouble(0x2546, 0x8317);
    expect(r).to.eql(0x25468317);
  });

  it('bitsToWord', () => {
    var r = bh.bitsToWord([ 1, 1, 0, 1]);
    expect(r).to.eql(11);
  });

  it('toSigned', () => {
    var r = bh.toSigned(255, 8);
    expect(r).to.eql(-128);

    var r = bh.toSigned(127, 8);
    expect(r).to.eql(127);

    var r = bh.toSigned(128, 8);
    expect(r).to.eql(-1);

    var r = bh.toSigned(0, 8);
    expect(r).to.eql(0);
  });

  it('charArrayToString', () => {
    var r = bh.charArrayToString([12609, 49]);
    expect(r).to.eql('A11');
  });
});
