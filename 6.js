const nums = [10, 10, 10, 10, 10, 10]
let getSimilarNum = true;
for (let i = 0; i < nums.length-1; i++) {
  if (nums[i] !== nums[i+1]) {
    getSimilarNum  = false
    break
  }  
}
console.log(getSimilarNum )
