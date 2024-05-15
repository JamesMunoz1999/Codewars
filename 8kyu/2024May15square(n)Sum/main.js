function squareSum(numbers){
  let newArr = []
  numbers.forEach(x => newArr.push(Math.pow(x, 2)))
  return newArr.reduce((acc,c) => acc + c, 0)
}

console.log(squareSum([3,4]))