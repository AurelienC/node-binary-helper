exports.getLeftBCD = (aabb) => aa = Math.trunc(aabb/100);

exports.getRightBCD = (aabb) => aabb - this.getLeftBCD(aabb) * 100;

exports.addLsbMsb = (lsb, msb) => (msb<<16) + lsb;

exports.charArrayToString = (arr) => {
  var str = '';
  arr.forEach((curr) => {
    if ((curr & 0x00FF) != 0) str = str + String.fromCharCode(curr & 0x00FF);
    if ((curr >> 8) !=0)  str = str + String.fromCharCode(curr >> 8);
  });
  return str;
}
