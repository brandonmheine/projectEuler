// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function threeOrFive(number) {
  let total = 0
  for (let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      total += i
    }
  }
  return total
}


console.log(threeOrFive(1000))