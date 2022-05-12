// Longest Collatz sequence


function collatz(number) {
  let count = 0

  while(number > 1) {
    if(number % 2 === 0) {
      number /= 2
    }
    else {
      number = number * 3 + 1
    }
    count++
  }
  return count
}


console.log(collatz(13))

let longest = 0
let counter
let number

for (let i = 2; i < 1000000; i++) {
  counter = collatz(i)
  if (counter > longest) {
    longest = counter
    number = i
  }
}


console.log(number)