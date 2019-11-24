function twoSum(nums, target) {

    let h = {}

    for (let i = 0; i < nums.length; i++) {
    

        if (h[target - nums[i]] != undefined) {
            return [h[target - nums[i]], i];
        }

        h[nums[i]] = i;
        
    }
}