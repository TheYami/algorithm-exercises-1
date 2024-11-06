function runningSum(arr) {
  let result = []; 
  let sum = 0;    
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    result.push(sum); 
  }

  return result;
}

let result1 = runningSum([1, 2, 3, 4]);
let result2 = runningSum([3, 1, 2, 10, 1]);

console.log(result1); // [1, 3, 6, 10]
console.log(result2); // [3, 4, 6, 16, 17]
