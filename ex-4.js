function findOddOccurrence(nums) {
  let count = {};
  
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  for (let num in count) {
    if (count[num] % 2 !== 0) { 
      return Number(num);
    }
  }
}

let result1 = findOddOccurrence([0]);
let result2 = findOddOccurrence([1,1,2]);
let result3 = findOddOccurrence([1,2,2,3,3,4,3,3,1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
