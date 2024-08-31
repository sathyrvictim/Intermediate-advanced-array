const arr = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, currentItem) => total + currentItem);
}
console.log(`${sumOfTripledEvens(arr)}`);

const mappedArray = arr.map((num) => num + 1);
console.log(mappedArray);
console.log(arr);

const isOdd = (num) => num % 2 !== 0;

const oddNum = arr.filter(isOdd);
console.log(oddNum);
console.log(arr);

const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);

console.log(productOfAllNums);
console.log(arr);
