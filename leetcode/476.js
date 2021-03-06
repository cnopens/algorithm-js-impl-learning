/**
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let mask = ~0
  while (num & mask) {
    mask <<= 1 
  }
  return ~mask ^ num
};