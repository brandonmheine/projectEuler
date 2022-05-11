// Sum square difference


let totalSquares = 0
let total = 0

for (let i = 1; i <= 100; i++) {
  totalSquares += i ** 2
  total += i
}

console.log(total ** 2 - totalSquares)