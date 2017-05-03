// BCD
exports.getLeftBCD = (aabb) => {
  return Math.trunc(aabb/100);
}

exports.getRightBCD = (aabb) => {
  return aabb - this.getLeftBCD(aabb) * 100;
}

exports.setBCD = (aa, bb) => {
  return (aa * 100) + (bb);
}


// MSB-LSB
exports.setMsbLsb = (msb, lsb) => {
  return ((msb & 0x00FF) << 8) + (lsb & 0x00FF);
}

exports.setMsbLsbDouble = (msb, lsb) => {
  return ((msb & 0x0000FFFF) << 16) + (lsb & 0x0000FFFF);
}

exports.getMsb = (aabb) => {
  return (aabb >> 8) & 0x00FF;
}

exports.getLsb = (aabb) => {
  return aabb & 0x00FF;
}

// Bits
exports.bitsToWord = (arr) => {
  var result = 0;

  arr.forEach(function(item, index, array) {
    result = result + (item << index);
  });

  return result;
}

exports.toSigned = (value, bits) => {
  if (value >= (Math.pow(2, bits)) * 0.5) {
    return (Math.pow(2, bits)) * 0.5 - value - 1;
  }
  return value;
}

exports.charArrayToString = (arr) => {
  var str = '';
  arr.forEach((curr) => {
    if ((curr & 0x00FF) != 0) str = str + String.fromCharCode(curr & 0x00FF);
    if ((curr >> 8) !=0)  str = str + String.fromCharCode(curr >> 8);
  });
  return str;
}
