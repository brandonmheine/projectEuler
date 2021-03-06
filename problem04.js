// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

console.log(999 * 999)


function isPalindrome(number) {
  const string = String(number)
  return string === string.split('').reverse().join('')
}

console.log(isPalindrome(999))

let biggest = 10001


for (let i = 10002; i < 998001; i++) {
  if (isPalindrome(i)) {
    biggest = i
  }
}

console.log(biggest)