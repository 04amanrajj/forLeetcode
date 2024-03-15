var twoSum = function(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1+i; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        
        return [i, j];

      }
    }
  }
  return[]
}

let lol = twoSum([0,4,3,0],0)
console.log(lol)
