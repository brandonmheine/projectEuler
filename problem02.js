// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function evenFibs(number) {
  let two = 1
  let one = 2
  let current = 0
  let total = 2

  while (current < number) {
    current = one + two
    if (current % 2 === 0) total += current
    two = one
    one = current
    console.log(current, one, two)
  }
  return total
}

console.log(evenFibs(4000000))