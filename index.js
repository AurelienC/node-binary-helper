exports.getLeftBCD = (aabb) => {
  return aa = Math.trunc(aabb/100);
}

exports.getRightBCD = (aabb) => {
  return aabb - getLeftBCD(aabb) * 100;
}

exports.addLsbMsb = (lsb, msb) => {
  return (msb<<16) + lsb;
}

exports.charArrayToString = (arr) => {
  let str = '';
  arr.forEach((curr) => {
    if ((curr & 0x00FF) != 0) str = str + String.fromCharCode(curr & 0x00FF);
    if ((curr >> 8) !=0)  str = str + String.fromCharCode(curr >> 8);
  });
  return str;
}
