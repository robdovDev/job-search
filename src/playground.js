const numbers = [1, 2, 3, 4, 5]
const names = ['LARRY', 'CURLY', 'MOE']

const squares = numbers.map((number) => {
  return number * number
})

const titles = names.map((name) => {
  return name[0].toUpperCase() + name.substring(1).toLowerCase()
})

console.log(squares)
console.log(titles)
