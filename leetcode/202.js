/**
 * 编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set()
  while(true) {
    n = String(n).split('').map(num => Math.pow(num, 2)).reduce((a, b) => a + b)
    
    if (n === 1) {
      return true
    } else if (set.has(n)) {
      return false
    } else {
      set.add(n)
    }
  }
};