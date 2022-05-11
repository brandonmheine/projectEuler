// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  const upperBound = Math.ceil(Math.sqrt(number))
  const output = []
  for (let i = 2; i <= upperBound; i++) {
    if (number % i === 0) {
      output.push(i)
    }
  }
  return output
}

const results = largestPrimeFactor(600851475143)

const isPrime = results.map(x => [x, largestPrimeFactor(x)]).filter(x => x[1].length === 0)

console.log(isPrime[isPrime.length -1][0])
